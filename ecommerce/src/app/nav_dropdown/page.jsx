'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import getAllNevDropDown from '@/lib/allNevDropDown';

const Nav_DropDown = () => {
  const [data, setData] = useState(null);
  const [hoveredServiceType, setHoveredServiceType] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllNevDropDown();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const { serviceTypes, categories, subCategories } = data;

  return (
    <div className="navbar bg-base-100 z-100 justify-around border border-slate-100 h-5" style={{ zIndex: 9999 }}>
      <nav className="flex justify-center ">
        <ul className="flex flex-wrap items-center text-sm ">
          {serviceTypes.map(serviceType => (
           <li
           key={serviceType.ServiceTypeID}
           className="p-4 lg:px-4 relative flex items-center space-x-1 "
           style={{
             paddingLeft: '0.5rem', 
             paddingRight: '0.5rem' 
           }}
           onMouseEnter={() => setHoveredServiceType(serviceType.ServiceTypeID)}
           onMouseLeave={() => setHoveredServiceType(null)}
         >
         
              <a
                className="text-slate-800 hover:text-slate-900 "
                href="#0"
                aria-expanded={hoveredServiceType === serviceType.ServiceTypeID ? 'true' : 'false'}
              >
                {serviceType.ServiceTypeName}
              </a>
              <button
                className="shrink-0 p-1"
                aria-expanded={hoveredServiceType === serviceType.ServiceTypeID ? 'true' : 'false'}
                onClick={() =>
                  setHoveredServiceType(hovered =>
                    hovered === serviceType.ServiceTypeID ? null : serviceType.ServiceTypeID
                  )
                }
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

              {hoveredServiceType === serviceType.ServiceTypeID && (
                <ul
                  className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2 max-h-[540px] min-w-[540px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded shadow-xl grid grid-cols-4 gap-2 "
                  style={{ zIndex: 9999 }}
                >
                  {/* Filter categories based on the current service type */}
                  {categories
                    .filter(category => category.ServiceTypeID === serviceType.ServiceTypeID)
                    .map(category => (
                      <li key={category.CategoryID}>
                        <Link
                        href={category.PagePath}
                        // href={`/category/${category.PagePath}`}
                          className="hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 text-black font-bold"
                        >
                          {category.CategoryName}
                        </Link>
                        {/* Render subcategories for the current category */}
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

export default Nav_DropDown;
