import React from 'react';
import Link from "next/link";
const Navbar = () => {
    return (
        <div className=''>
           
          <div className="navbar bg-base-100">
            <div className="flex-1">
            <a className="text-xl"><span className="text-blue-600">Fortis</span>Mg</a>
            </div>
           
            <div className="hidden lg:flex text-sm flex-grow gap-8 justify-between">

            <div className='flex gap-8'>
              <Link href="/About" className="font-medium hover:text-blue-500">
                MEDICINE
              </Link>
              
              <Link href="/lebtest" className="font-medium hover:text-blue-500">
                LAB TESTS
                {/* <button className="btn btn-xs bg-blue-600 text-white">SAVE</button> */}
              </Link>
              <Link href="/dr" className="font-medium hover:text-blue-500">
                CONSULT DOCTORS
              </Link>
              <Link href="/cr" className="font-medium hover:text-blue-500">
                CANCER CARE
              </Link>
              <Link href="/ar" className="font-medium hover:text-blue-500">
                AYURVEDA
              </Link>
              <Link href="/medicine" className="font-medium hover:text-blue-500">
                CARE PLANE
              </Link>
              </div>

              <div className='flex gap-3'>
              <Link href="/login" className="text-xs hover:text-blue-500">
                Login
              </Link>
              <span> | </span>
              <Link href="/singup" className="text-xs hover:text-blue-500">
                Sign Up
              </Link>
              <Link href="/help" className="text-xs hover:text-blue-500">
                Offers
              </Link>
            </div>

            
            <div className="flex">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  hover:text-blue-500">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  
                  </div>
                </div>
                <div tabIndex={0} className=" z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                
             
                  </div>
                </div>
              </div>
              <div className=' flex items-center'>
              <Link href="/help" className="text-xs  hover:text-blue-500">
                Need Help?
              </Link>
              </div>
            </div>
            </div>          

            
            <div className="flex-none lg:hidden">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <div className="indicator">
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
                  
                  </div>
                </div>
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                  <Link href="/About" className="text-bold">
                MEDICINE
              </Link>
              <Link href="/lebtest" className="text-bold">
                LAB TESTS
                {/* <button className="btn btn-xs bg-orange-600">SAVE</button> */}
              </Link>
              <Link href="/dr" className="text-bold">
                CONSULT DOCTORS
              </Link>
              <Link href="/cr" className="text-bold">
                CANCER CARE
              </Link>
              <Link href="/ar" className="text-bold">
                AYURVEDA
              </Link>
              <Link href="/medicine" className="text-bold">
                CARE PLANE
                {/* <button className="btn btn-xs bg-orange-600">SAVE MODE</button> */}
              </Link>
              <Link href="/login" className="text-xs">
                Login
              </Link>
              {/* <span> </span> */}
              <Link href="/singup" className="text-xs">
                Sing Up
              </Link>
              <Link href="/help" className="text-xs">
                offers
              </Link>
              <Link href="/help" className="text-xs">
                Need Help?
              </Link>
                  </div>
                </div>
              </div>
              <span> </span>
              
            </div>
          </div>
       
        </div>
    );
};

export default Navbar;