import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import useSWR, { useSWRInfinite } from 'swr'
import Image from 'next/image'

import { Post, Sub } from '../types'

import PostCard from '../components/PostCard'
import Link from 'next/link'
import { useAuthState } from '../context/auth'
import NewPostCard from '../newcomponents/NewPostCard'

dayjs.extend(relativeTime)

function LoadingMessage() {
  return (
    <div className="splash-screen">
      Wait a moment while we load your app.
      <div className="loading-dot">.</div>
    </div>
  );
}
export default function Home() {
  
  
  const [observedPost, setObservedPost] = useState('')

  // const { data: posts } = useSWR<Post[]>('/posts')
  const { data: topSubs } = useSWR<Sub[]>('/misc/top-subs')

  const description = ''
    
  const title = 'Eduversity: moon,stars and beyond'

  const { authenticated } = useAuthState()

  const {
    data,
    error,
    size: page,
    setSize: setPage,
    isValidating,
    revalidate,
  } = useSWRInfinite<Post[]>((index) => `/posts?page=${index}`)

  const isInitialLoading = !data && !error
  const posts: Post[] = data ? [].concat(...data) : []

  useEffect(() => {
    if (!posts || posts.length === 0) return

    const id = posts[posts.length - 1].identifier

    if (id !== observedPost) {
      setObservedPost(id)
      observeElement(document.getElementById(id))
    }
  }, [posts])

  const observeElement = (element: HTMLElement) => {
    if (!element) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          console.log('Reached bottom of post')
          setPage(page + 1)
          observer.unobserve(element)
        }
      },
      { threshold: 1 }
    )
    observer.observe(element)
  }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        
      </Head>
      
        <body>
      <section className=" card-list">
          {isInitialLoading && <p className="text-center text-yellow-200">Loading..</p>}
          {posts?.map((post) => (
            // <PostCard
            //   post={post}
            //   key={post.identifier}
            //   revalidate={revalidate}
            // />
            <NewPostCard
            post={post}
            key={post.identifier}
            revalidate={revalidate}
            />
          ))}
          {isValidating && posts.length > 0 && (
            <p className="text-lg text-center">Loading More..</p>
          )}
          </section>

          <div className="fixed top-0 right-0 hidden mx-10 mt-5 md:block w-80">
          <div className="rounded bg-space-500">
            <div className="p-4 border-b-2">
              <p className="text-lg font-semibold text-center">
                Top Groups
              </p>
            </div>
            <div>
              {topSubs?.map((sub) => (
                <div
                  key={sub.name}
                  className="flex items-center px-4 py-2 text-xs "
                >
                  <Link href={`/p/${sub.name}`}>
                    <a>
                      <Image
                        src={sub.imageUrl}
                        className="rounded-full cursor-pointer"
                        alt="Sub"
                        width={(6 * 16) / 4}
                        height={(6 * 16) / 4}
                      />
                    </a>
                  </Link>
                  <Link href={`/p/${sub.name}`}>
                    <a className="ml-2 font-bold hover:cursor-pointer">
                      {sub.name}
                    </a>
                  </Link>
                  <p className="ml-auto font-med">{sub.postCount}</p>
                </div>
              ))}
            </div>
            {/* {authenticated && (
              <div className="p-4 ">
                <Link href="/subs/create">
                  <a className="w-1/2 px-2 py-1 bg-space-500 border-olight-500 button">
                    Create Group
                  </a>
                </Link>
              </div>
            )} */}
          </div>
          </div>
          </body>

         
      
    </Fragment>
  )
}