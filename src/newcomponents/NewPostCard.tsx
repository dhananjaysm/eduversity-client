import axios from 'axios'
import dayjs from 'dayjs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ActionButton from '../components/ActionButton'
import { useAuthState } from '../context/auth'
import { Post } from '../types'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime) //IMPORTANT TO AVOID RENDER ERROR


interface NewPostCardProps {
  post: Post
  revalidate?: Function
}


export default function NewPostCard({
  post: {
    identifier,
    slug,
    title,
    body,
    subName,
    createdAt,
    voteScore,
    userVote,
    commentCount,
    url,
    username,
    sub,
  },
  revalidate,
}: NewPostCardProps) {
  const { authenticated } = useAuthState()

  const router = useRouter()

  const isInSubPage = router.pathname === '/p/[sub]' // /r/[sub]

  const vote = async (value: number) => {
    if (!authenticated) router.push('/login')

    if (value === userVote) value = 0

    try {
      const res = await axios.post('/misc/vote', {
        identifier,
        slug,
        value,
      })

      if (revalidate) revalidate()

      console.log(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  
    return (
        
    
           <article className="card"   key={identifier}    id={identifier}>
           <div className="card-author">
               {!isInSubPage && (<>
               <a className="author-avatar" href={`/p/${subName}`}>
                 <img src={sub.imageUrl} />
               </a>
               <svg className="half-circle" viewBox="0 0 106 57">
                 <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
               </svg> 
               </>
               )}
     
               <div className="author-name">
                 <p className="author-name-prefix">Posted by</p>
                 <Link href={`/u/${username}`}>
                  <a className="text-xl hover:underline">{username}</a>
                 </Link>
                 {!isInSubPage && <Link  href={`/p/${subName}`}>
                    <a className="author-name-prefix "> in {subName} </a>
                  </Link> }
               </div>
             </div>
             <header className="card-header">
               <p style={{fontSize:'12px'}}>{dayjs(createdAt).fromNow()}</p>
               <Link href={url}>
                  <h2 >{title}</h2>
                </Link>
                {body && <p style={{margin:0}}>{body.slice(0,100)} ...</p>}

             </header>
     
             
             {/* <div className="tags">
               <a href="#">html</a>
               <a href="#">css</a>
               <a href="#">web-dev</a>
             </div> */}
             <div className="flex mt-2">
          <Link href={url}>
            <a>
              <ActionButton>
                <i className="mr-1 fas fa-comment-alt fa-xs"></i>
                <span className="font-bold">{commentCount} Comment</span>
              </ActionButton>
            </a>
          </Link>
          <ActionButton>
            <i className="mr-1 fas fa-share fa-xs"></i>
            <span className="font-bold">Share</span>
          </ActionButton>
        </div>
           </article>
          
    )
}
