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
      
        <div key={category.id} className="max-w-xs p-12    max-h-64 max-w-48 hover:bg-slate-200 active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-100 rounded-lg drop-shadow-md ">
           <Link href={`@/src/app/`}>
          <div className="w-24 h-24 sm:w-32 sm:h-32"> {/* Adjust width and height as per your requirement */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
              alt=""
              className="object-cover object-center w-full rounded-md h-72 max-h-24 max-w-24"
            />
          </div>
          <div className="mt-2 mb-1">
            <span className="block text-xs font-medium tracki uppercase">
              {category.id}
            </span>
           
            <h2 className="text-lg font-semibold tracki">
              {category.name}
            </h2>

          </div>
          </Link>
        </div>

    
      )}
    </>

  )
}

