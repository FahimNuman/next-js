'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const NavDropDown = () => {
  const [isHealthMenuOpen, setIsHealthMenuOpen] = useState(false)
  const [isPersonalMenuOpen, setIsPersonalMenuOpen] = useState(false)
  const [isDiabetesMenuOpen, setIsDiabetesMenuOpen] = useState(false)
  const [isHealthConditionsMenuOpen, setIsHealthConditionsMenuOpen] =
    useState(false)
  const [isAnotherHealthMenuOpen, setIsAnotherHealthMenuOpen] = useState(false)

  const handleHealthMouseEnter = () => {
    setIsHealthMenuOpen(true)
  }

  const handleHealthMouseLeave = () => {
    setIsHealthMenuOpen(false)
  }

  const handlePersonalMouseEnter = () => {
    setIsPersonalMenuOpen(true)
  }

  const handlePersonalMouseLeave = () => {
    setIsPersonalMenuOpen(false)
  }

  const handleDiabetesMouseEnter = () => {
    setIsDiabetesMenuOpen(true)
  }

  const handleDiabetesMouseLeave = () => {
    setIsDiabetesMenuOpen(false)
  }

  const handleHealthConditionsMouseEnter = () => {
    setIsHealthConditionsMenuOpen(true)
  }

  const handleHealthConditionsMouseLeave = () => {
    setIsHealthConditionsMenuOpen(false)
  }

  const handleAnotherHealthMouseEnter = () => {
    setIsAnotherHealthMenuOpen(true)
  }

  const handleAnotherHealthMouseLeave = () => {
    setIsAnotherHealthMenuOpen(false)
  }

  return (
    <div className="navbar bg-base-100 mt-0.5 z-100 max-h-px max-h-0"  style={{ zIndex: 9999 }}>
      <nav className="flex justify-center">
        <ul className="flex flex-wrap items-center font-medium text-sm">
          <li className="p-4 lg:px-8">
            
          </li>

          <li
            className="p-4 lg:px-8 relative flex items-center space-x-1"
            onMouseEnter={handleHealthMouseEnter}
            onMouseLeave={handleHealthMouseLeave}
            style={{ zIndex: 9999 }}
          >
            <a
              className="text-slate-800 hover:text-slate-900"
              href="#0"
              aria-expanded={isHealthMenuOpen ? 'true' : 'false'}
            >
              Health Resource Center
            </a>
            <button
              className="shrink-0 p-1"
              aria-expanded={isHealthMenuOpen ? 'true' : 'false'}
              onClick={() => setIsHealthMenuOpen(!isHealthMenuOpen)}
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

            {isHealthMenuOpen && (
              <ul
              className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2  max-h-[640px] min-w-[640px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded-lg shadow-xl grid grid-cols-4 gap-2"
              style={{ zIndex: 9999 }}
              >
                <li>
                  <Link
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href=""
                  >
                    All Diseases
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="/all_medicine"
                  >
                    All Medicines
                  </Link>
                </li>{' '}
                <li>
                  <Link
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                   Medicines by Therapeutic Class
                  </Link>
                </li>{' '}

              </ul>
            )}
          </li>

          <li
            className="p-4 lg:px-8 relative flex items-center space-x-1"
            onMouseEnter={handlePersonalMouseEnter}
            onMouseLeave={handlePersonalMouseLeave}
            style={{ zIndex: 9999 }}
          >
            <a
              className="text-slate-800 hover:text-slate-900"
              href="#0"
              aria-expanded={isPersonalMenuOpen ? 'true' : 'false'}
            >
              Personal Care
            </a>
            <button
              className="shrink-0 p-1"
              aria-expanded={isPersonalMenuOpen ? 'true' : 'false'}
              onClick={() => setIsPersonalMenuOpen(!isPersonalMenuOpen)}
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

            {isPersonalMenuOpen && (
              <ul
              className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2  max-h-[640px] min-w-[640px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded-lg shadow-xl grid grid-cols-4 gap-4"
              style={{ zIndex: 9999 }}
              >
                <li>
                  <a
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Item Mirror
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Item Mirror
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Item Mirror
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            )}
          </li>

          <li
            className="p-4 lg:px-8 relative flex items-center space-x-1"
            onMouseEnter={handleDiabetesMouseEnter}
            onMouseLeave={handleDiabetesMouseLeave}
            style={{ zIndex: 9999 }}
          >
            <a
              className="text-slate-800 hover:text-slate-900"
              href="#0"
              aria-expanded={isDiabetesMenuOpen ? 'true' : 'false'}
            >
              Diabetes
            </a>
            <button
              className="shrink-0 p-1"
              aria-expanded={isDiabetesMenuOpen ? 'true' : 'false'}
              onClick={() => setIsDiabetesMenuOpen(!isDiabetesMenuOpen)}
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

            {isDiabetesMenuOpen && (
            <ul
            className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2  max-h-[640px] min-w-[640px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded-lg shadow-xl grid grid-cols-4 gap-4"
            style={{ zIndex: 9999 }}
            >
              <li>
                <a
                  className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Item Mirror
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Item Mirror
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Support Center
                </a>
              </li>
              <li>
                <a
                  className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>{' '}
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Priority Ratings
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Item Mirror
                </a>
              </li>
              <li>
                <a
                  className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                  href="#"
                >
                  Support Center
                </a>
              </li>
            </ul>
            )}
          </li>

          <li
            className="p-4 lg:px-8 relative flex items-center space-x-1"
            onMouseEnter={handleHealthConditionsMouseEnter}
            onMouseLeave={handleHealthConditionsMouseLeave}
            style={{ zIndex: 9999 }}
          >
            <a
              className="text-slate-800 hover:text-slate-900"
              href="#0"
              aria-expanded={isHealthConditionsMenuOpen ? 'true' : 'false'}
            >
              Health Conditions
            </a>
            <button
              className="shrink-0 p-1"
              aria-expanded={isHealthConditionsMenuOpen ? 'true' : 'false'}
              onClick={() =>
                setIsHealthConditionsMenuOpen(!isHealthConditionsMenuOpen)
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

            {isHealthConditionsMenuOpen && (
             <ul
             className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2  max-h-[640px] min-w-[640px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded-lg shadow-xl grid grid-cols-4 gap-4"
             style={{ zIndex: 9999 }}
             >
               <li>
                 <a
                   className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>{' '}
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>{' '}
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Insights
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Item Mirror
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Support Center
                 </a>
               </li>
               <li>
                 <a
                   className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>{' '}
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>{' '}
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Insights
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Item Mirror
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Support Center
                 </a>
               </li>
               <li>
                 <a
                   className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>{' '}
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>{' '}
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Priority Ratings
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Insights
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Item Mirror
                 </a>
               </li>
               <li>
                 <a
                   className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                   href="#"
                 >
                   Support Center
                 </a>
               </li>
             </ul>
            )}
          </li>

          <li
            className="p-4 lg:px-8 relative flex items-center space-x-1"
            onMouseEnter={handleAnotherHealthMouseEnter}
            onMouseLeave={handleAnotherHealthMouseLeave}
            style={{ zIndex: 9999 }}
          >
            <a
              className="text-slate-800 hover:text-slate-900"
              href="#0"
              aria-expanded={isAnotherHealthMenuOpen ? 'true' : 'false'}
            >
              Another Health Device
            </a>
            <button
              className="shrink-0 p-1"
              aria-expanded={isAnotherHealthMenuOpen ? 'true' : 'false'}
              onClick={() =>
                setIsAnotherHealthMenuOpen(!isAnotherHealthMenuOpen)
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

            {isAnotherHealthMenuOpen && (
              <ul
              className="text-xs origin-top-right absolute top-full left-1/2 -translate-x-1/2  max-h-[640px] min-w-[640px] bg-white border border-slate-200 p-2 hover:text-orange-300 rounded-lg shadow-xl grid grid-cols-4 gap-4"
              style={{ zIndex: 9999 }}
              >
                <li>
                  <a
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Item Mirror
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Item Mirror
                  </a>
                </li>
                <li>
                  <a
                    className="text-slate-400 hover:bg-slate-50 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Support Center
                  </a>
                </li>
                <li>
                  <a
                    className=" divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
              
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavDropDown
