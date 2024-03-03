/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from "next/link";
const Navbar = () => {
    return (
        <div>
           
          <div className="navbar bg-base-100">
            <div className="flex-1 ">
              <Link href="/" className="size-22">
              <strong>Fortis_mart</strong>
              </Link>
            </div>
           
            <div className="hidden lg:flex space-x-4">
              <Link href="/About" className="text-bold hover:text-blue-500">
              <span></span>  <strong>MEDICINE</strong>
              </Link>
              <span></span> 
              <Link href="/lebtest" className="text-bold hover:text-blue-500">
                <strong>LAB TESTS</strong>
                <button className="btn btn-xs bg-orange-600">SAVE</button>
              </Link><span></span> 
              <Link href="/dr" className="text-bold hover:text-blue-500">
                <strong>CONSULT DOCTORS</strong>
              </Link><span></span> 
              <Link href="/cr" className="text-bold hover:text-blue-500">
                <strong>CANCER CARE</strong>
              </Link><span></span> 
              <Link href="/ar" className="text-bold hover:text-blue-500">
                <strong>AYURVEDA</strong>
              </Link><span></span> 
              <Link href="/medicine" className="text-bold hover:text-blue-500">
                <strong>CARE PLANE</strong>
                <button className="btn btn-xs bg-orange-600">SAVE MODE</button>
              </Link><span></span> 
              <Link href="/login" className="text-xs">
                Login
              </Link>
              <span> | </span>
              <Link href="/singup" className="text-xs">
                Sing Up
              </Link><span></span> 
              <Link href="/help" className="text-xs">
                offers
              </Link>
            </div>
            <div className="flex-none">
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                  <div className="card-body">
                
             
                  </div>
                </div>
              </div>
              <Link href="/help" className="text-xs">
                Need Help?
              </Link>
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
                <strong>MEDICINE</strong>
              </Link>
              <Link href="/lebtest" className="text-bold">
                <strong>LAB TESTS</strong>
                <button className="btn btn-xs bg-orange-600">SAVE</button>
              </Link>
              <Link href="/dr" className="text-bold">
                <strong>CONSULT DOCTORS</strong>
              </Link>
              <Link href="/cr" className="text-bold">
                <strong>CANCER CARE</strong>
              </Link>
              <Link href="/ar" className="text-bold">
                <strong>AYURVEDA</strong>
              </Link>
              <Link href="/medicine" className="text-bold">
                <strong>CARE PLANE</strong>
                <button className="btn btn-xs bg-orange-600">SAVE MODE</button>
              </Link>
              <Link href="/login" className="text-xs">
                Login
              </Link>
              <span> </span>
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