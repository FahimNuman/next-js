'use client'
import getAllCategoriesByCare from '@/lib/CategoriesByCare';
import Link from 'next/link';
import React from 'react'
export default async function Posts() {
  const categories = await getAllCategoriesByCare();
  return (
    <>
      {categories.map(category =>
      
        <div key={category.id} className="max-w-xs sm:max-w-sm p-2 rounded-md shadow-md">
           <Link href="">
          <div className="w-24 h-24 sm:w-32 sm:h-32"> {/* Adjust width and height as per your requirement */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
              alt=""
              className="object-cover object-center w-full h-full rounded-md"
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

