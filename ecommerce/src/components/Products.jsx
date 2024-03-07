/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React from 'react';

const Products = ({ products }) => {
  // Check if products array is not available yet
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((item) => (
       
        <div key={item._id}>
          
          <Link href={{ pathname:"/singleproduct", query:{ _id: item?._id}}}
                      key={item._id}>{item.title} </Link> 
         
          <p>Brand: {item.brand}</p>
        </div>
      ))}
    </div>
  );
}; <Link >
</Link>

export default Products;

