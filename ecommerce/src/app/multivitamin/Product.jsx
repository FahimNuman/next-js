import React from 'react'

const SingleProduct = ({ product }) => {
  return (
    <div className=''>
      <div className="card w-64 bg-base-100 shadow-xl">
        <div className='h-84'>
          <figure className="">
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{product.name}</h2>
            <p>{product.description}</p>
            <div className="card-actions">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct;