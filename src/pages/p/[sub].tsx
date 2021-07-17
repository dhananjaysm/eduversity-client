import Head from "next/head";
import { useRouter } from "next/router";
import { ChangeEvent, createRef, Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import classNames from "classnames";

import { Sub } from "../../types";
import { useAuthState } from "../../context/auth";
import Axios from "axios";
import Sidebar from "../../components/Sidebar";
import NewPostCard from "../../newcomponents/NewPostCard";

export default function SubPage() {
  // Local state
  const [ownSub, setOwnSub] = useState(false);
  // Global state
  const { authenticated, user } = useAuthState();
  // Utils
  const router = useRouter();
  const fileInputRef = createRef<HTMLInputElement>();

  const subName = router.query.sub;

  const {
    data: sub,
    error,
    revalidate,
  } = useSWR<Sub>(subName ? `/subs/${subName}` : null);
  console.log(sub);
  

  useEffect(() => {
    if (!sub) return;
    setOwnSub(authenticated && user.username === sub.username);
  }, [sub]);

  const openFileInput = (type: string) => {
    if (!ownSub) return;
    fileInputRef.current.name = type;
    fileInputRef.current.click();
  };

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", fileInputRef.current.name);

    try {
      await Axios.post<Sub>(`/subs/${sub.name}/image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      revalidate();
    } catch (err) {
      console.log(err);
    }
  };

  if (error) router.push("/");

  let postsMarkup;
  if (!sub) {
    postsMarkup = <p className="text-lg text-center">Loading..</p>;
  } else if (sub.posts.length === 0) {
    postsMarkup = <p className="text-lg text-center">No posts submitted yet</p>;
  } else {
    postsMarkup = sub.posts.map((post) => (
      <NewPostCard key={post.identifier} post={post} revalidate={revalidate} />
    ));
  }

  return (
    <div>
      <Head>
        <title>{sub?.title}</title>
      </Head>

      {sub && (
        <Fragment>
          <input
            type="file"
            hidden={true}
            ref={fileInputRef}
            onChange={uploadImage}
          />
          {/* Sub info and images */}
          <div>

            {/* Banner image */}
            <div
              className={classNames("bg-space-500", {
                "cursor-pointer": ownSub,
              })}
              onClick={() => openFileInput("banner")}
            >
              {sub.bannerUrl ? (
                <div
                  className="h-56 bg-space-500"
                  style={{
                    backgroundImage: `url(${sub.bannerUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              ) : (
                <div className="h-20 bg-space-500"></div>
              )}
              
            </div>
            {/* Sub meta data */}
            <div className="h-20 bg-space-500">
              <div className="container relative flex">
                <div className="absolute" style={{ top: -15 }}>
                  <Image
                    src={sub.imageUrl}
                    alt="Sub"
                    className={classNames("rounded-full", {
                      "cursor-pointer": ownSub,
                    })}
                    onClick={() => openFileInput("image")}
                    width={70}
                    height={70}
                  />
                  
                </div>
                <div className="pt-1 pl-24">
                  <div className="flex items-center">
                    <h1 className="mb-1 text-3xl font-bold">{sub.title}</h1>
                  </div>
                  <p className="text-sm font-bold text-gray-500">@{sub.name}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Posts & Sidebar */}
          <div className="container flex pt-5">
            <div className="w-160">{postsMarkup}</div>
            <Sidebar sub={sub}/>
          </div>
         
          {/* BLOB */}
          {/* <div className="blob">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path
              fill="currentColor"
                className="fa-primary"
                d="M493.7 212.6C495.1 221.6 495.9 230.8 496 240c0 3.146-.3047 6.215-.4687 9.322C441.9 273.7 382.8 287.1 320 287.1s-121.9-14.34-175.5-38.67C144.3 246.2 144 243.1 144 240c.0685-9.186 .8534-18.35 2.348-27.42C58.36 235.4 0 274.9 0 320C0 390.7 143.3 448 320 448s320-57.31 320-127.1C640 274.9 581.6 235.4 493.7 212.6zM128 360c-13.25 0-24-10.75-24-24S114.7 312 128 312s24 10.75 24 24C151.1 349.3 141.3 359.1 128 360zM320 392c-13.25 0-24-10.75-24-24s10.75-24 24-24s24 10.75 24 24C343.1 381.3 333.3 391.1 320 392zM512 360c-13.25 0-24-10.75-24-24S498.7 312 512 312s24 10.75 24 24C535.1 349.3 525.3 359.1 512 360z"
              />
              <path
              fill="currentColor"
                className="fa-secondary"
                d="M496 240c0 3.146-.3047 6.215-.4687 9.322C441.9 273.7 382.8 287.1 320 287.1s-121.9-14.34-175.5-38.67C144.3 246.2 144 243.1 144 240c0-97.2 78.8-176 175.1-176S496 142.8 496 240z"
              />
            </svg>
          </div> */}
        </Fragment>
      )}
    </div>
  );
}
