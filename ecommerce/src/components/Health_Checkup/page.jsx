'use client'
import { useState } from 'react';

export default function Health_Checkup() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const allProducts = [
    // Sample products data
    { id: 1, name: 'Product 1', category: 'fever', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', category: 'fever', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', category: "women's health", description: 'Description of Product 3' },
    { id: 4, name: 'Product 4', category: "women's health", description: 'Description of Product 4' },
    { id: 5, name: 'Product 5', category: 'diabetes', description: 'Description of Product 5' },
    { id: 6, name: 'Product 6', category: 'fitness', description: 'Description of Product 6' },
    { id: 7, name: 'Product 7', category: 'fitness', description: 'Description of Product 7' },
    { id: 8, name: 'Product 8', category: 'fitness', description: 'Description of Product 8' },
    { id: 9, name: 'Product 9', category: 'covid 19', description: 'Description of Product 9' },
    { id: 10, name: 'Product 10', category: 'senior citizen', description: 'Description of Product 10' },
    { id: 11, name: 'Product 11', category: 'senior citizen', description: 'Description of Product 11' },
    { id: 12, name: 'Product 12', category: 'senior citizen', description: 'Description of Product 12' },
    { id: 13, name: 'Product 13', category: 'lifestyle habits', description: 'Description of Product 13' },
    { id: 14, name: 'Product 14', category: 'lifestyle habits', description: 'Description of Product 14' },
    { id: 15, name: 'Product 15', category: 'lifestyle habits', description: 'Description of Product 15' },
    // Add more products
  ];

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'all' ? allProducts : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4">
      <div className="flex space-x-4">
      <button onClick={() => handleClick('all')} className={`btn ${selectedCategory === 'all' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>All</button>
        <button onClick={() => handleClick('fever')} className={`btn ${selectedCategory === 'fever' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>Fever</button>
        <button onClick={() => handleClick("women's health")} className={`btn ${selectedCategory === "women's health" ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>Women's Health</button>
        <button onClick={() => handleClick('diabetes')} className={`btn ${selectedCategory === 'diabetes' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>Diabetes</button>
        <button onClick={() => handleClick('fitness')} className={`btn ${selectedCategory === 'fitness' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>Fitness</button>
        <button onClick={() => handleClick('covid 19')} className={`btn ${selectedCategory === 'covid 19' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>COVID-19</button>
        <button onClick={() => handleClick('senior citizen')} className={`btn ${selectedCategory === 'senior citizen' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>Senior Citizen</button>
        <button onClick={() => handleClick('lifestyle habits')} className={`btn ${selectedCategory === 'lifestyle habits' ? 'btn-active bg-[#ff6f61] text-white' : ''}`}>Lifestyle Habits</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded shadow-md p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="mt-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
