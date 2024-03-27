'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebars/CategorySideBar/page';

import getAllProducts from '@/lib/allProducts';
import AllProducts from '@/components/Product/page';

const Page = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Change this value as needed
  const [brands, setBrands] = useState([]);
  const [usages, setUsages] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, sortBy, currentPage, brands, usages]);

  const updateFilteredProducts = (filtered) => {
    setFilteredProducts(filtered);
  };

  const handleSortChange = e => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'Brands':
        setBrands(brands => {
          if (brands.includes(value)) {
            return brands.filter(brand => brand !== value);
          } else {
            return [...brands, value];
          }
        });
        break;
      case 'Usages':
        setUsages(usages => {
          if (usages.includes(value)) {
            return usages.filter(usage => usage !== value);
          } else {
            return [...usages, value];
          }
        });
        break;
      default:
        break;
    }
  };

  const filterProducts = () => {
    let filtered = products.filter(product => {
      if ((brands.length === 0 || brands.includes(product.SkuBrandName)) &&
          (usages.length === 0 || usages.includes(product.SubCategoryName))) {
        return true;
      }
      return false;
    });

    let sortedProducts = [...filtered];

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

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const getPageNumbers = () => {
    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex">
      <Sidebar
        products={products}
        updateFilteredProducts={updateFilteredProducts}
        handleFilterChange={handleFilterChange}
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
        <AllProducts products={currentItems} />
        {/* Pagination */}
        <div className='flex gap-4 justify-center my-4'>
          {getPageNumbers().map(number => (
            <button key={number} onClick={() => paginate(number)}>
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
