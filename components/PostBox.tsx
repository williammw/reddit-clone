import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
  const {data:session} = useSession()
  return (
    <form action="">
      <div>
        {/* Avatar */}
        <input 
          type="text"  
          className="bg-gray-50 p-2 pl-5 outline-none"
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