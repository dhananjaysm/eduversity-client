import axios from 'axios'
import dayjs from 'dayjs'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { createRef, useEffect, useState } from 'react'
import useSWR from 'swr'
import { useAuthState } from '../../context/auth'
import NewPostCard from '../../newcomponents/NewPostCard'
import { Post, Comment, User } from '../../types'
import classNames from "classnames";

export default function user() {
  const router = useRouter()

  const username = router.query.username
  const { authenticated } = useAuthState();

  const fileInputRef = createRef<HTMLInputElement>();
  const [ownUser, setOwnUser] = useState(false);



  const { data, error ,revalidate} = useSWR<any>(username ? `/users/${username}` : null)
 console.log(data);
 
  useEffect(() => {
    if ( !data) return;
    setOwnUser(authenticated && data.user.username);
  }, [data]);

  const openFileInput = (type: string) => {
    if (!ownUser) return;
    fileInputRef.current.name = type;
    fileInputRef.current.click();
  };

  const uploadImage = async (event:any) => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("type", fileInputRef.current.name);

    try {
      await axios.post<User>(`/users/${username}/image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      revalidate();
    } catch (err) {
      console.log(err);
    }
  };

  if (error) router.push('/')

  if (data) console.log(data)


  return (
    <>
      <Head>
        <title>{data?.user.username}</title>
      </Head>
      {data && (
        <div className="container flex pt-5">
          <div className="w-160">
            {data.submissions.map((submission: any) => {
              if (submission.type === 'Post') {
                const post: Post = submission
                return <NewPostCard key={post.identifier} post={post} />
              } else {
                const comment: Comment = submission
                return (
                  <article className="card" 
                    key={comment.identifier}
                    
                  >
                    
                    <div className="card-author">
                      <p className="author-avatar">
                        {comment.username}

                        <span> commented on </span>
                        <Link href={comment.post.url}>
                          <a className="author-name-prefix ">
                            {comment.post.title}
                          </a>
                        </Link>
                        
                        <Link href={`/p/${comment.post.subName}`}>
                          <a className="author-name-prefix ">
                            {comment.post.subName}
                          </a>
                        </Link>
                      </p>
                      <hr />
                      <header className="card-header">
                      <p>{comment.body}</p>
                      </header>
                      
                    </div>
                  </article>
                )
              }
            })}
          </div>
          <div className="ml-6 w-80">
            <div className="rounded-lg bg-space-500">
              {/* USER IMAGE */}
              <input
            type="file"
            hidden={true}
            ref={fileInputRef}
            onChange={uploadImage}
          />
              <div className="p-3" >
              
                <Image
                    src={data.user.imageUrl}
                    alt="User"
                    className={classNames("rounded-full", {
                      "cursor-pointer": ownUser,
                    })}
                    onClick={() => openFileInput("image")}
                    width={70}
                    height={70}
                  />
              </div>


              <div className="p-3 text-center">
                <h1 className="mb-3 text-xl">{data.user.username}</h1>
                <hr />
                <p className="mt-3">
                  Joined {dayjs(data.user.createdAt).format('MMM YYYY')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
