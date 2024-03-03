'use client'
import getAllCategoriesByCare from '@/lib/CategoriesByCare';
import React from 'react'

export default async function HealthCheckup() {
  const categories = await getAllCategoriesByCare();
  return (
    <>
      
    {categories.map(category=> 
      <div key={category.id} className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{category.id}</h2>
        <p>{category.title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
      )}
    
      
    </>

  )
}
