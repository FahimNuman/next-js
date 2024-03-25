import React from 'react';
import Link from 'next/link';

const SingleProduct = ({ product }) => {
  return (
    <div className='card-wrapper flex flex-col'>
      <div className="card w-64 bg-base-100 shadow-xl border-2 h-96">
        <div className=''>
          <figure className="">
            <img src={`http://localhost:5047/${product.SkuImage}`} alt="Shoes" className="rounded-xl h-20" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title">{product.SkuName}</h2>
            <h2 className="card-title">{product.SkuBrandName}</h2>
            <p>100$</p>
            <div className="card-actions">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(product => (
        <Link href={`/multivitamin/${product.SkuID}`} key={product.SkuID}>
          <SingleProduct product={product} id={product.SkuID} />
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;
