import getAllPost from '@/app/lib/post'
import React from 'react'

export default async function Posts(){
    const posts = await getAllPost();
  return (
    <>
    {posts.map(post=>
     
<div key={post.id} className="max-w-xs sm:max-w-sm p-2 rounded-md shadow-md">
  <div className="w-24 h-24 sm:w-32 sm:h-32"> {/* Adjust width and height as per your requirement */}
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
      alt=""
      className="object-cover object-center w-full h-full rounded-md"
    />
  </div>
  <div className="mt-2 mb-1">
    <span className="block text-xs font-medium tracki uppercase">
      {post.id}
    </span>
    <h2 className="text-lg font-semibold tracki">
      {post.name}
    </h2>
  </div>
</div>

   
   
   
   
    )}
    </>
   
  )
}

