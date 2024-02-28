import getAllPost from '@/app/lib/post'
import React from 'react'

export default async function Posts(){
    const posts = await getAllPost();
  return (
    <>
    {posts.map(post=>
     
        <div key={posts.id} className="max-w-xs p-12  rounded-md shadow-md  ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
                alt=""
                className="object-cover object-center w-full rounded-md h-72"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  {post.id}
                </span>
                <h2 className="text-xl font-semibold tracki ">
                 {post.title}
                </h2>
              </div>
            </div>
   
    )}
    </>
   
  )
}

