'use client'

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
            <fieldset className="w-full space-y-1 dark:text-gray-100">
              <label for="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-100"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400"
                />
              </div>
            </fieldset>
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
                  <a
                    className="divide-y sm:flex-row sm:divide-y-0 text-slate-400 text-sm-md hover:bg-slate-50 flex items-center p-2 hover:text-orange-300 "
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:bg-slate-50 text-slate-400 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className=" hover:bg-slate-50 text-slate-400 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>{' '}
                <li>
                  <a
                    className=" hover:bg-slate-50 text-slate-400 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Priority Ratings
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:bg-slate-50 text-slate-400 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:bg-slate-50 text-slate-400 flex items-center p-2 hover:text-orange-300"
                    href="#"
                  >
                    Item Mirror
                  </a>
                </li>
                <li>
                  <a
                    className=" hover:bg-slate-50 text-slate-400 flex items-center p-2 hover:text-orange-300"
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
