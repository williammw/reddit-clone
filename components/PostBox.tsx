import { useSession } from 'next-auth/react'
import React from 'react'
import Avatar from './Avatar'

function PostBox() {
  const {data:session} = useSession()
  return (
    <form action="">
      <div className="flex items-center space-x-3">
        {/* Avatar */}
        <Avatar />
        <input 
          type="text"  
          className="flex-1 bg-gray-50 p-2 pl-5 outline-none"
          disabled={!session}
          placeholder={
            session? 'Create a post by entering a title!' : 'Sign to Post'
          }
          />
      </div>
    </form>
  )
}

export default PostBox