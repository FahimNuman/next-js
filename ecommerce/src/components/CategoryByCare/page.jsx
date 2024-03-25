/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-async-client-component */
'use client'
import getAllCategoriesByCare from '@/lib/CategoriesByCare';
import Link from 'next/link';
import React from 'react'
export default async function Posts() {
  const categories = await getAllCategoriesByCare();
  return (
    <>
    {categories.map(category =>
      <div key={category.id} className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center">
        <Link href={`@/src/app/`}>
          <div className="sm:w-32 sm:h-32 max-w-32 max-h-24 flex justify-center items-center">
            <img
              src="http://localhost:5047/Files/Images/SkuImages/1.png"
              
              alt=""
              className="object-cover object-center rounded-md max-w-full max-h-full"
            />
          </div>
        </Link>
        <div className="mt-2 mb-1 text-center">
          <span className="block text-xs font-medium tracki uppercase">
            {category.title.split(' ').slice(0, 2).join(' ')}
          </span>
        </div>
      </div>
    )}
  </>
  

  )
}

