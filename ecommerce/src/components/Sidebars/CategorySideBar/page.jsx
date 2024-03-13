import React, { useState, useEffect } from 'react';

const Sidebar = ({ products, updateFilteredProducts }) => {
  const [brands, setBrands] = useState([]);
  const [usages, setUsages] = useState([]);

  // Set filteredProducts initially and whenever products change
  useEffect(() => {
    updateFilteredProducts(products);
  }, [products]);

  useEffect(() => {
    filterProducts();
  }, [brands, usages]);

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
      if (brands.length > 0 && !brands.includes(product.brand)) return false;
      if (usages.length > 0 && !usages.includes(product.usage)) return false;
      return true;
    });
    updateFilteredProducts(filtered);
  };

  return (
    <div className="w-64 bg-white p-4 overflow-y-auto " style={{ maxHeight: 'calc(100vh - 64px)' }}>
      <div className="mb-4">
        <h2>Vitamins & Supplements</h2>
        <div>
          <h3>BRANDS</h3>
          {['Inlife', 'HealthyHey', 'HealthVit', 'MyFitFuel', 'Now Foods'].map((brand, index) => (
            <div key={index}>
              <input type="checkbox" checked={brands.includes(brand)} onChange={() => handleFilterChange('Brands', brand)} />
              <label>{brand}</label>
            </div>
          ))}
        </div>
        <div>
          <h3>USAGE</h3>
          {['Health Care', 'Liver Care', 'Skin Care', 'Other'].map((usage, index) => (
            <div key={index}>
              <input type="checkbox" checked={usages.includes(usage)} onChange={() => handleFilterChange('Usages', usage)} />
              <label>{usage}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
