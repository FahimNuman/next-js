import React from 'react';

const Carousel = () => {
  return (
    <div className=''>
    <div className="carousel w-full rounded-box">
        <div className="carousel-inner flex h-48 w-full">
            <div id="slide1" className="carousel-item relative w-3/4">
                <img src="https://i.ibb.co/J2gKdJb/33eab3f0-49a1-476d-8c1f-2fe4159bcf4d-1679394544-1.png" className="w-full" alt="Slide 1" />
            </div>
            <div id="slide2" className="carousel-item relative w-3/4 mr-2">
                <img className='object-contain' src="https://onemg.gumlet.io/diagnostics%2F2024-01%2F1706088937_1948x800+%2827%29.png" className="w-full" alt="Slide 2" />
            </div>
        </div>
    </div>

    <div>
        <div className="bg-white py-5 md:px-12 px-2 flex justify-center text-center font-semibold text-2xl">
            Fortis mg: BD’s Leading Online Pharmacy & Healthcare Platform
        </div>
    </div>
</div>

  );
};

export default Carousel;
