import React from 'react';

const Carousel = () => {
  return (
    <><div className="carousel w-full rounded-box overflow-x-scroll">
      <div className="carousel-inner flex whitespace-no-wrap">
        <div id="slide1" className="carousel-item relative w-3/4 mr-2">
          <img src="https://onemg.gumlet.io/91a7d3ca-87ae-40b7-b7da-1ded3e5d2e0d_1708664690.png?w=1013&h=250&format=auto" className="w-full" alt="Slide 1" />
        </div>
        <div id="slide2" className="carousel-item relative w-3/4 mr-2">
          <img src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" className="w-full" alt="Slide 2" />
        </div>

      </div>
      <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 bg-blue-500 items-center justify-center">
        Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
      </div>
    </div><div>
    <div className="bg-white py-5 md:px-12 px-2 flex justify-between text-align-center text-xl">
    
      Fortis mg: BD’s Leading Online Pharmacy & Healthcare Platform 
     
    </div>
      </div></>
  );
};

export default Carousel;
