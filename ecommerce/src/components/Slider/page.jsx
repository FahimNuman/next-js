/* eslint-disable @next/next/no-img-element */
// Mark the file as a client-side component
'use client'
import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'
import Posts from '../CategoryByCare/page'

const Slider = () => {
  useEffect(() => {
    const cartItemStyle = {
      // Your regular styles for cart item
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease',
      cursor: 'pointer',
    }

    const cartItemActiveStyle = {
      // Your styles when cart item is active
      border: '2px solid blue',
    }
    const slider = new Glide('.glide-03', {
      type: 'carousel',
      focusAt: 'center',
      perView: 6,
      autoplay: 0,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 3,
        },
        640: {
          perView: 3,
        },
      },
    })

    slider.mount()

    return () => {
      slider.destroy()
    }
  }, [])
  return (
    <>
      <div className="bg-gray-50 py-5 md:px-12 px-2 flex justify-between items-center rounded-md ">
        <div className=" w-full rounded-box  z-10 relative rounded-md border ">
          <div className=" flex whitespace-no-wrap ">
            <div className="glide-03 relative w-full">
              <div className="overflow-hidden " data-glide-el="track">
                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48 max-h-48 flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/diabetes.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Diabetes
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48 max-h-48 flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/bonecare.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Bone Care
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48 max-h-48 flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/stomaccare.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Stomach Care
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48 max-h-48 flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/livercare.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Liver Care
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48 max-h-48 flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/kidneycare.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Kidney Care
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48 max-h-48 flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/dermacare.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Derma Care
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="max-w-xs max-w-24 p-2 rounded-md shadow-md flex flex-col items-center transition duration-300 transform hover:scale-110">
                      <div className="sm:w-32 sm:h-32 max-w-48  flex justify-center items-center">
                        <img
                          src="http://localhost:5047/Files/Images/SkuImages/heartcare.png"
                          alt=""
                          className="object-cover object-center rounded-md max-w-full max-h-full transition duration-300 transform hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 mb-1 text-center">
                        <span className="block text-xs font-medium tracki uppercase">
                          Heart Care
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* <!-- Controls --> */}
              {/* <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-cemax-h-48nter justify-between px-4 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div> */}
              {/*    <!-- Indicators --> */}
              {/* <div
          className="absolute bottom-0 flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div> */}
            </div>
            
          </div>
        </div>
        
      </div>
      <span className="flex justify-center justify-items-start" > Full body health checkups SEE ALL </span>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  )
}

export default Slider
