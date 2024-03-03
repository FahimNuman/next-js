
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const SearchBar = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const handleMouseEnter = () => {
    //     setIsMenuOpen(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsMenuOpen(false);
    // };

    return (
        // <div className="navbar bg-base-100 mt-0.5">
           
        //     <nav className="flex justify-center">
        //         <ul className="flex flex-wrap items-center font-medium text-sm">
        //             <li className="p-4 lg:px-8">
        //       <fieldset className="w-full space-y-1 dark:text-gray-100">
        //         <label htmlFor="Search" className="hidden">Search</label>
        //         <div className="relative">
        //             <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        //                 <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
        //                     <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
        //                         {/* SVG path */}
        //                     </svg>
        //                 </button>
        //             </span>
        //             <input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />
        //         </div>
        //     </fieldset>
        //             </li>
                   
        //             <li
        //                 className="p-4 lg:px-8 relative flex items-center space-x-1"
        //                 onMouseEnter={handleMouseEnter}
        //                 onMouseLeave={handleMouseLeave}
        //             >
        //                 <a
        //                     className="text-slate-800 hover:text-slate-900"
        //                     href="#0"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                 >Health Resource Center</a>
        //                 <button
        //                     className="shrink-0 p-1"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                 >
        //                     <span className="sr-only">Show submenu for </span>
        //                     <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        //                         <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        //                     </svg>
        //                 </button>
                       
        //                 {isMenuOpen && (
        //                     <ul
        //                         className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        //                     >
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Priority Ratings
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Insights
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Item Mirror
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Support Center
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 )}
        //             </li>

        //             <li
        //                 className="p-4 lg:px-8 relative flex items-center space-x-1"
        //                 onMouseEnter={handleMouseEnter}
        //                 onMouseLeave={handleMouseLeave}
        //             >
        //                 <a
        //                     className="text-slate-800 hover:text-slate-900"
        //                     href="#0"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                 >Personal Care</a>
        //                 <button
        //                     className="shrink-0 p-1"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                 >
        //                     <span className="sr-only">Show submenu for </span>
        //                     <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        //                         <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        //                     </svg>
        //                 </button>
                       
        //                 {isMenuOpen && (
        //                     <ul
        //                         className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        //                     >
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Priority Ratings
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Insights
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Item Mirror
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Support Center
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 )}
        //             </li>


              
                  
        //             <li
        //                 className="p-4 lg:px-8 relative flex items-center space-x-1"
        //                 onMouseEnter={handleMouseEnter}
        //                 onMouseLeave={handleMouseLeave}
        //             >
        //                 <a
        //                     className="text-slate-800 hover:text-slate-900"
        //                     href="#0"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                 >Diabetes</a>
        //                 <button
        //                     className="shrink-0 p-1"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                 >
        //                     <span className="sr-only">Show submenu for </span>
        //                     <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        //                         <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        //                     </svg>
        //                 </button>
                       
        //                 {isMenuOpen && (
        //                     <ul
        //                         className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        //                     >
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Priority Ratings
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Insights
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Item Mirror
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Support Center
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 )}
        //             </li>


        //             <li
        //                 className="p-4 lg:px-8 relative flex items-center space-x-1"
        //                 onMouseEnter={handleMouseEnter}
        //                 onMouseLeave={handleMouseLeave}
        //             >
        //                 <a
        //                     className="text-slate-800 hover:text-slate-900"
        //                     href="#0"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                 >Health Conditionsr</a>
        //                 <button
        //                     className="shrink-0 p-1"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                 >
        //                     <span className="sr-only">Show submenu </span>
        //                     <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        //                         <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        //                     </svg>
        //                 </button>
                       
        //                 {isMenuOpen && (
        //                     <ul
        //                         className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        //                     >
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Priority Ratings
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Insights
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Item Mirror
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Support Center
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 )}
        //             </li>


        //             <li
        //                 className="p-4 lg:px-8 relative flex items-center space-x-1"
        //                 onMouseEnter={handleMouseEnter}
        //                 onMouseLeave={handleMouseLeave}
        //             >
        //                 <a
        //                     className="text-slate-800 hover:text-slate-900"
        //                     href="#0"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                 >Homeopathy</a>
        //                 <button
        //                     className="shrink-0 p-1"
        //                     aria-expanded={isMenuOpen ? 'true' : 'false'}
        //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
        //                 >
        //                     <span className="sr-only">Show submenu for </span>
        //                     <svg className="w-3 h-3 fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        //                         <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
        //                     </svg>
        //                 </button>
                       
        //                 {isMenuOpen && (
        //                     <ul
        //                         className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl"
        //                     >
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Priority Ratings
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Insights
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Item Mirror
        //                             </a>
        //                         </li>
        //                         <li>
        //                             <a className="text-slate-800 hover:bg-slate-50 flex items-center p-2" href="#">
        //                                 Support Center
        //                             </a>
        //                         </li>
        //                     </ul>
        //                 )}
        //             </li>
                   
        //         </ul>
        //     </nav>
        // </div>
        <div className='mx-auto'>
        <div className="navbar-center grid grid-cols-3 lg:flex justify-center gap-10 text-md">
              <div className="dropdown dropdown-hover ">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600"
                  >
                    Health Resource Center
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
  
              <div className="dropdown dropdown-hover">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600"
                  >
                    Vitamins & Nutrition
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
  
              <div className="dropdown dropdown-hover">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600"
                  >
                    Personal Care
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
  
              <div className="dropdown dropdown-hover">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600"
                  >
                    Healthcare Devices
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
  
              <div className="dropdown dropdown-hover">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600"
                  >
                    Diabetes
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
  
              <div className="dropdown dropdown-hover">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600"
                  >
                    Homeopathy
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
  
              <div className="dropdown dropdown-hover">
                <Link href="/medicine">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1  hover:text-blue-600 bg-white"
                  >
                    Featured
                  </div>
                </Link>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu shadow  w-52 bg-white"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </div>
      </div>
    );
};

export default SearchBar;
