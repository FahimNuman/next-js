'use client'
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      // Auto transition to the next slide
      if (currentSlide === 4) {
        setCurrentSlide(1)
      } else {
        setCurrentSlide(currentSlide + 1)
      }
    }, 2000) // Change slide every 2 seconds

    return () => clearInterval(interval)
  }, [currentSlide])

  const handleDotClick = (slideNumber) => {
    setCurrentSlide(slideNumber)
  }

  return (
    <>
      <div className=" w-full rounded-box  z-10 relative">
        <div className=" flex whitespace-no-wrap">
          <div className="carousel w-full relative">
            <div
              id="slide1"
              className={`carousel-item relative w-full ${
                currentSlide === 1 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/58db31ad-0079-4424-9327-85fa2fc59d2d_1686046401.jpg?w=1013&h=250&format=auto"
                className="w-full h-50"
              />
            </div>
            <div
              id="slide2"
              className={`carousel-item relative w-full ${
                currentSlide === 2 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/d78ff5b4-43a2-4a62-8a08-67fc2b9ff253_1700468248.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>
            <div
              id="slide3"
              className={`carousel-item relative w-full ${
                currentSlide === 3 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/91a7d3ca-87ae-40b7-b7da-1ded3e5d2e0d_1708664690.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>
            <div
              id="slide4"
              className={`carousel-item relative w-full ${
                currentSlide === 4 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/f50cdcfd-2c10-4d95-acbb-53a6dd4816e2_1700120354.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>

            <div
              id="slide5"
              className={`carousel-item relative w-full ${
                currentSlide === 5 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/diagnostics%2F2024-03%2F1710402085_WOW+Sale_Day+1_OTC_960x200+copy+2.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>

            <div
              id="slide6"
              className={`carousel-item relative w-full ${
                currentSlide === 6 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/1c1678d5-049a-494c-acca-b9940db10935_1710401096.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>

            <div
              id="slide7"
              className={`carousel-item relative w-full ${
                currentSlide === 7 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/565496d5-3ab4-4249-ac39-7461c566f8b9_1709034632.jpg?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>

            <div
              id="slide8"
              className={`carousel-item relative w-full ${
                currentSlide === 8 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/20a26983-288b-4e9a-bac7-256e0c0d0832_1705995212.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>

            <div
              id="slide9"
              className={`carousel-item relative w-full ${
                currentSlide === 9 ? 'block' : 'hidden'
              }`}
            >
              <img
                src="https://onemg.gumlet.io/90a6a7b8-b74d-4c81-968b-b50418619005_1704865379.png?w=1013&h=250&format=auto"
                className="w-full"
              />
            </div>

            <div className="absolute bottom-0 w-full flex justify-center">
          <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 1 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(1)}
            ></span>
            <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 2 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(2)}
            ></span>
            <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 3 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(3)}
            ></span>
            <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 4 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(4)}
            ></span>
            <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 5 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(5)}
            ></span>
            <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 6 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(6)}
            ></span>
            <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 7 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(7)}
            ></span>
             <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 8 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(8)}
            ></span>
             <span
              className={`inline-block h-1 w-1 rounded-full bg-slate-300 hover:bg-orange-700 mx-1 cursor-pointer ${
                currentSlide === 9 ? 'bg-black' : ''
              }`}
              onClick={() => handleDotClick(9)}
            ></span>
          </div>
          </div>

         

          <div id="slide2" className="relative w-3/6 h-30 sm:w-1/2 mr-1">
            <img
              src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png"
              className="w-full"
              alt="Slide 2"
            />
          </div>
        </div>
        <div className="p-6 py-12 dark:bg-violet-400 text-teal-700 bg-white-500 text-lg bg-white text-center justify-center border-b border-gray-200">
          Fortis mg: BD’s Leading Online Pharmacy & Healthcare Platform
        </div>
      </div>
    </>
  )
}

export default Carousel
