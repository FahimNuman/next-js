import React from 'react';

import SingleProduct from './Product';

const AllProducts = ({ products }) => {
  return (
    <div className=" grid grid-cols-3 gap-4">
      {products.map(product => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;