import { useSession } from 'next-auth/react'
import React from 'react'

function PostBox() {
  const {data:session} = useSession()
  return (
    <form action="">
      <div>
        {/* Avatar */}

      </div>
    </form>
  )
}

export default PostBox