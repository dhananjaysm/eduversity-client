import dayjs from 'dayjs'
import Head from 'next/head'


import { Sub } from '../types'
import { useAuthState } from '../context/auth'
import Link from 'next/link'

export default function Sidebar({ sub }: { sub: Sub }) {
  const { authenticated } = useAuthState()

  return (
    <div className="ml-6 w-80">
        
      <div className="divide-y-2 rounded bg-space-500">
     
        <div className="p-3 rounded-t">
          <p className="font-mono font-semibold text-white">About Group</p>
        </div>
        <div className="p-3">
          <p className="mb-3 text-md ">{sub.description}</p>
          <div className="flex mb-3 text-sm font-medium">
            {/* <div className="w-1/2">
              <p>0.1k</p>
              <p>members</p>
            </div> */}
            {/* <div className="w-1/2">
              <p>Top Posts by</p>
              <p>members</p>
            </div> */}
            {/* <div className="w-1/2">
              <p>150</p>
              <p>online</p>
            </div> */}
          </div>
          {/* <p className="my-3">
            Created {dayjs(sub.createdAt).format('D MMM YYYY')}
          </p> */}

          {/* SIDEBAR CREATE POST TODO: move it to the dialog box */}
          {authenticated && (
            <Link href={`/p/${sub.name}/submit`}>
              <a className="w-full py-1 text-sm text-white bg-gray-600 button">Create Post</a>
            </Link>
          )}

        </div>
      </div>
    </div>
  )
}
