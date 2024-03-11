'use client';
import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full">
      <div className="carousel">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item absolute w-full ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <div className="carousel-content p-4 text-center">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-[80px] text-[#ff6f61]"
      >
        &#8249;
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-[80px] text-[#ff6f61]"
      >
        &#8250;
      </button>
    </div>
  );
};

// Example usage:
const items = [
  { title: 'Slide 1', description: 'Initially, I was a little skeptical of consulting a doctor online. But the consultation turned out to be honest and cool, the doctor\'s behavior was friendly. The best part is that I saved so much time and money!.' },
  { title: 'Slide 2', description: 'Dr. Chakraborty is so concerned about his patient. I sincerely wish him the best. He always takes the time to understand the problem and on the basis of that he takes the decision and explains it very well. And if you miss out on anything, you can come back with more questions.' },
  { title: 'Slide 3', description: 'I installed the app and went for a free consultation with a dietician. The advice given by Dr. Mirza was simply great. He shared a detailed diet chart and exercises with me which was easy to incorporate into my hectic schedule.' },
];

const DoctorConCarousel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Carousel items={items} />
    </div>
  );
};

export default DoctorConCarousel;
