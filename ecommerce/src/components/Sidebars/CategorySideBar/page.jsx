import React, { useState, useEffect } from 'react';

const Sidebar = ({ products, updateFilteredProducts }) => {
  const [brands, setBrands] = useState([]);
  const [usages, setUsages] = useState([]);

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

  const renderBrandOptions = () => {
    const brandOptions = ['Inlife', 'HealthyHey', 'HealthVit', 'MyFitFuel', 'Now Foods',
      'Vitabiotics', 'Natures Bounty', 'Nutrilite', 'Garden of Life',
      'SmartyPants', 'Rainbow Light', 'Solgar', 'Kirkland Signature',
      'Centrum', 'NOW'];

    return (
      <div className="my-3">
        <h3 className='text-xl font-semibold py-2'>BRANDS</h3>
        <div className={brandOptions.length > 5 ? 'overflow-y-auto max-h-40' : ''}>
          {brandOptions.map((brand, index) => (
            <div key={index}>
              <input type="checkbox" checked={brands.includes(brand)} onChange={() => handleFilterChange('Brands', brand)} />
              <label>{brand}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderUsageOptions = () => {
    const usageOptions = ['Health Care', 'Liver Care', 'Skin Care', 'Mind Care', 'Cardiac Care', 'Women Care', 'Stomach Care'];

    return (
      <div className="my-3">
        <h3 className='text-xl font-semibold py-2'>USAGE</h3>
        <div className={usageOptions.length > 5 ? 'overflow-y-auto max-h-40' : ''}>
          {usageOptions.map((usage, index) => (
            <div key={index}>
              <input type="checkbox" checked={usages.includes(usage)} onChange={() => handleFilterChange('Usages', usage)} />
              <label>{usage}</label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-64 bg-white p-4" style={{ maxHeight: 'calc(100vh - 64px)', overflow: 'hidden' }}>
      <div className="mb-4">
        <h2>Vitamins & Supplements</h2>
        {renderBrandOptions()}
        {renderUsageOptions()}
      </div>
    </div>
  );
};

export default Sidebar;
