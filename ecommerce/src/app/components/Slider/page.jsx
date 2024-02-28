/* eslint-disable @next/next/no-img-element */
'use client' // Mark the file as a client-side component

import React, { useEffect } from 'react'
import Glide from '@glidejs/glide'

const Slider = () => {
  useEffect(() => {
    
    const slider = new Glide('.glide-03', {
      type: 'carousel',
      focusAt: 'center',
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
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
     
      <div className="glide-03 relative w-full">
        <div className="overflow-hidden " data-glide-el="track">
          <ul className=" whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <div className="max-w-xs p-12  rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 bg:glass">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYwAvpt9aZqLuEgkpXHSHpi56qg5pjd0rJtqI8Z1tBzIQsOvrtn32TgS0FI6iHMzISHs&usqp=CAU"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="https://pictures-nigeria.jijistatic.com/133690650_MzAwLTQ0Ny00ZjMwMzI5YTA3.webp"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/vitamin-supplement/x/f/f/60-100-vitamin-c-tablets-for-glowing-skin-h132-dietary-original-imaggdzzqzayzd5r.jpeg?q=20&crop=false"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
              <img
                src="data:image/png;base64,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"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
              />
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                  Quisque
                </span>
                <h2 className="text-xl font-semibold tracki">
                  Nam maximus purus
                </h2>
              </div>
            </div>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
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
        </div>
        {/*    <!-- Indicators --> */}
        <div
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
        </div>
      </div>
      {/*<!-- End Carousel with indicators & controls inside --> */}
    </>
  )
}

export default Slider
