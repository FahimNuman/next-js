import Link from 'next/link'
import React from 'react'

const NavDropDown = () => {
  return (
    <div className='mx-auto mb-2'>
      <div className="font-base navbar-center grid text-sm grid-cols-3 lg:flex justify-center gap-10 lg:text-md">
            <div className="dropdown dropdown-hover ">
              <Link href="/medicine">
                <div
                  tabIndex={0}
                  role="button"
                  className="m-1  hover:text-blue-600"
                >
                  <div className='flex gap-0 md:gap-2'>
                  Health Resource Center 
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
                  <div className='flex gap-0 md:gap-2'>
                  Vitamins and Nutritions 
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
                  <div className='flex gap-0 md:gap-2'>
                  Personal Care 
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
                  <div className='flex gap-0 md:gap-2'>
                  Healthcare Devices
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
                  <div className='flex gap-0 md:gap-2'>
                  Dibetes 
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
                  <div className='flex gap-0 md:gap-2'>
                  Homeopathy 
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
                  <div className='flex gap-0 md:gap-2'>
                  Featured 
                  <div className='pt-1.5 flex items-center'>
                       ﹀
                  </div>
                  </div>
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
  )
}

export default NavDropDown
