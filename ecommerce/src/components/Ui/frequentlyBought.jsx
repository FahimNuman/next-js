import React from 'react';

const Product = ({ imageUrl, deliveryTime, mrp, discount, price }) => (
    <div className="flex items-center justify-between mb-4">
        {/* Product Image */}
        <img src={imageUrl} alt="Product Image" className="w-16 h-16 mr-4" />
        {/* Product Details */}
        <div className="flex-1">
            <p className="font-base mb-1">Delivery by <span className="font-md">{deliveryTime}</span></p>
            <p className="font-base mb-1">MRP <span className="font-md">₹{mrp}</span> <span className="text-red-600">{discount}% off</span></p>
            <p className="font-bold text-lg">₹{price}</p>
        </div>
    </div>
);

const FrequentlyBoughtTogether = () => (
    <div className="flex flex-col">
        {/* Product 1 */}
        <Product
            imageUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg"
            deliveryTime="11am, Today"
            mrp="1299"
            discount="23"
            price="1000"
        />
        {/* Plus sign */}
        <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">+</span>
        </div>
        {/* Product 2 */}
        <Product
            imageUrl="https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/nkilh2lgwkjzgihhc06b.jpg"
            deliveryTime="12pm, Today"
            mrp="1399"
            discount="23"
            price="1077"
        />
        {/* Total */}
        <div className="flex justify-between mb-4">
            <p className="font-bold">Total for 2 items</p>
            <p className="font-bold text-lg">₹2077</p>
        </div>
        {/* Add to Cart Button */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            ADD BOTH TO CART
        </button>
    </div>
);

export default FrequentlyBoughtTogether;