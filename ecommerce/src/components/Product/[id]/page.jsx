import React from 'react';
import { useNavigation } from 'next/navigation';

const ProductDetails = ({ products }) => {
  console.log(products,111);
  const navigation = useNavigation();
  const { SkuID } = navigation.query;

  // Find the product with matching SkuID
  const product = products.find(product => product.SkuID === parseInt(SkuID));

  // Render product details
  return (
    <div>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>{product.SkuName}</h2>
          <p>Sub Category: {product.SubCategoryName}</p>
          <p>Remark: {product.Remark}</p>
          <p>Sku Type: {product.SkuTypeName}</p>
          <p>Brand: {product.SkuBrandName}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
