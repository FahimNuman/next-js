/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Carousel = () => {
  return (
    <>
      <div className=" w-full rounded-box  z-10 relative">
        <div className=" flex whitespace-no-wrap">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://onemg.gumlet.io/58db31ad-0079-4424-9327-85fa2fc59d2d_1686046401.jpg?w=1013&h=250&format=auto"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://onemg.gumlet.io/d78ff5b4-43a2-4a62-8a08-67fc2b9ff253_1700468248.png?w=1013&h=250&format=auto"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://onemg.gumlet.io/91a7d3ca-87ae-40b7-b7da-1ded3e5d2e0d_1708664690.png?w=1013&h=250&format=auto"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://onemg.gumlet.io/f50cdcfd-2c10-4d95-acbb-53a6dd4816e2_1700120354.png?w=1013&h=250&format=auto"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide2" className="relative w-3/5 sm:w-1/2 mr-2">
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
