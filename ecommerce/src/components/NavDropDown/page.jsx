'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const NavDropDown = () => {
  const [hoveredServiceType, setHoveredServiceType] = useState(null);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});

  useEffect(() => {
    fetch('http://localhost:5047/api/FrontendApi/NavDropDown/GetServiceType')
      .then(response => response.json())
      .then(data => setServiceTypes(data))
      .catch(error => console.error('Error fetching service types:', error));

    fetchCategories(5);
    fetchCategories(10);
    
  }, []);

  const fetchCategories = (serviceTypeId) => {
    fetch(`http://localhost:5047/api/FrontendApi/NavDropDown/GetCategory?ServiceTypeID=${serviceTypeId}`)
      .then(response => response.json())
      .then(data => {
        setCategories(prevCategories => [...prevCategories, ...data]);
        // Fetch subcategories for each category
        data.forEach(category => fetchSubCategories(category.CategoryID));
      })
      .catch(error => console.error(`Error fetching categories for ServiceTypeID ${serviceTypeId}:`, error));
  };

  const fetchSubCategories = (categoryId) => {
    fetch(`http://localhost:5047/api/FrontendApi/NavDropDown/GetSubCategory?CategoryID=${categoryId}`)
      .then(response => response.json())
      .then(data => setSubCategories(prevSubCategories => ({
        ...prevSubCategories,
        [categoryId]: data
      })))
      .catch(error => console.error(`Error fetching subcategories for CategoryID ${categoryId}:`, error));
  };

  return (
    <div className="navbar bg-base-100 z-100" style={{ zIndex: 9999 }}>
      <nav className="flex justify-center">
        <ul className="flex flex-wrap items-center text-sm">
          {serviceTypes.map(serviceType => (
            <li
              key={serviceType.ServiceTypeID}
              className="p-4 lg:px-8 relative flex items-center space-x-1"
              onMouseEnter={() => setHoveredServiceType(serviceType.ServiceTypeID)}
              onMouseLeave={() => setHoveredServiceType(null)}
            >
              <a
                className="text-slate-800 hover:text-slate-900"
                href="#0"
                aria-expanded={hoveredServiceType === serviceType.ServiceTypeID ? 'true' : 'false'}
              >
                {serviceType.ServiceTypeName}
              </a>
              <button
                className="shrink-0 p-1"
                aria-expanded={hoveredServiceType === serviceType.ServiceTypeID ? 'true' : 'false'}
                onClick={() => setHoveredServiceType(hovered => (hovered === serviceType.ServiceTypeID ? null : serviceType.ServiceTypeID))}
              >
                <span className="sr-only">Show submenu for </span>
                <svg
                  className="w-3 h-3 fill-slate-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                >
                  <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
                </svg>
              </button>

              {hoveredServiceType === serviceType.ServiceTypeID && serviceType.ServiceTypeID === 5 && (
                <ul
                  className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2 max-h-[540px] min-w-[540px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded-lg shadow-xl grid grid-cols-4 gap-2"
                  style={{ zIndex: 9999 }}
                >
                  {categories.map(category => (
                    <li key={category.CategoryID}>
                      <Link
                        href={`/category/${category.CategoryID}`}
                        className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                      >
                        {category.CategoryName}
                      </Link>
                      {/* Render subcategories */}
                      {subCategories[category.CategoryID] && (
                        <ul>
                          {subCategories[category.CategoryID].map(subCategory => (
                            <li key={subCategory.SubCategoryID}>
                              <Link
                                href={`/subcategory/${subCategory.SubCategoryID}`}
                                className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                              >
                                {subCategory.SubCategoryName}
                              </Link>
                            </li>
                          ))}
                        </ul>

                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavDropDown;
