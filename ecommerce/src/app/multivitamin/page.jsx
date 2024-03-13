'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebars/CategorySideBar/page';
import AllProducts from './AllProducts';
import getAllProducts from '@/lib/allProducts';

const Page = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState(''); // State to hold the selected sort option

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []); 

  useEffect(() => {
    filterProducts();
  }, [products, sortBy]);

  const updateFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };

  const handleSortChange = e => {
    setSortBy(e.target.value);
  };

  const filterProducts = () => {
    let sortedProducts = [...products];

    if (sortBy === 'relevance') {
      // Add relevance sorting logic here
    } else if (sortBy === 'customerRating') {
      sortedProducts.sort((a, b) => b.customerRating - a.customerRating);
    } else if (sortBy === 'priceHighToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'priceLowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'discount') {
      sortedProducts.sort((a, b) => b.discount - a.discount);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="flex">
      <Sidebar
        products={products}
        updateFilteredProducts={updateFilteredProducts}
      />
      <div className='w-2/3'>
        <div className="flex justify-end mb-2">
          <select value={sortBy} onChange={handleSortChange}>
            <option value="">Sort By</option>
            <option value="relevance">Relevance</option>
            <option value="customerRating">Customer Rating</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="discount">Discount</option>
          </select>
        </div>
        <h2>All Products</h2>
        <AllProducts products={filteredProducts} />
      </div>
    </div>
  );
};

export default Page;
