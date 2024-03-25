'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebars/CategorySideBar/page'; // Assuming relative path
import getAllProducts from '@/lib/allProducts'; // Assuming data fetching function
import AllProducts from '@/components/Product/page'; // Assuming component for individual products

const Page = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Change this value as needed
  const [brands, setBrands] = useState([]);
  const [usages, setUsages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        filterProducts(data); // Initial filtering
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const updateFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    // ... Same logic as before for filtering brands and usages
  };

  const filterProducts = (data) => {
    // ... Same filtering logic as before, using the provided data
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    // ... Same logic as before for pagination
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex">
      <Sidebar
        products={products} // Pass all products for filtering in Sidebar
        updateFilteredProducts={updateFilteredProducts}
        handleFilterChange={handleFilterChange}
      />
      <div className="w-2/3">
        <div className="flex justify-end mb-2">
          <select value={sortBy} onChange={handleSortChange}>
            {/* ... Same options for sorting */}
          </select>
        </div>
        <h2 className='font-semibold text-2xl py-4'>All Products</h2>
        <AllProducts products={currentItems} />
        <div className="flex gap-4 justify-center my-4">
          {/* ... Same pagination logic */}
        </div>
      </div>
    </div>
  );
};

export default Page;
