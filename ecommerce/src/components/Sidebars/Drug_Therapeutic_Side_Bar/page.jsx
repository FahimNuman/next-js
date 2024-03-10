'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Drug_Therapeutic_Side_Bar = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('http://localhost:4000/drug_therapeutic_classes')
      .then(response => response.json())
      .then(data => {
        setMenuItems(data);
        // Select the first item by default
        if (data.length > 0) {
          setExpandedMenu(data[0].id);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to execute only once on component mount

  const handleMenuClick = (menu) => {
    setExpandedMenu(menu);
  };

  return (
    <div className="flex">
      <div className="w-1/4 h-fit bg-gray-200">
        <ul>
          {menuItems.map((menuItem) => (
            <li key={menuItem.id} onClick={() => handleMenuClick(menuItem.id)} className={`cursor-pointer p-4 ${expandedMenu === menuItem.id ? 'bg-white' : ''}`}>
              {menuItem.parent}
              {expandedMenu === menuItem.id && ' >'}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 h-screen text-[#ff766b]">
        {expandedMenu && (
          <div className="p-4 text-lg">
            <ul>
              {menuItems.find((menuItem) => menuItem.id === expandedMenu).children.map((child, index) => (
                <li key={index}>
                  <Link href={`/drug_therapeutic_classes/${expandedMenu}/${child}`}>
                    {`>  ` + child}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drug_Therapeutic_Side_Bar;
