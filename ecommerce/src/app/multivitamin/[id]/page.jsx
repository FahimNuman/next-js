'use client';
import React, { useEffect, useState } from 'react';
import getAllProducts from '@/lib/allProducts'; // Assuming data fetching function

export default function Page({ params }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProducts();
            setProduct(data);
           // filterProducts(data); // Initial filtering
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchData();
      }, []);
      let sinleProduct = product.filter(x=>x.SkuID == params.id);
      
    return (
      <div>
        {sinleProduct.map(index => 
        <h1>Hello World {index.SkuBrandName} {index.SkuName}</h1>
        )}
        
      </div>
    );
}
