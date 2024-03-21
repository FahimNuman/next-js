'use client';
import React, { useState } from 'react';

const CarouselOne = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    const items = [
      { title: 'Dr.Bidhan Chondro', description: 'Initially, I was a little skeptical of consulting a doctor online. But the consultation turned out to be honest and cool, the doctor\'s behavior was friendly. The best part is that I saved so much time and money!.' },
      { title: 'Dr.Ali Hossain', description: 'Dr. Chakraborty is so concerned about his patient. I sincerely wish him the best. He always takes the time to understand the problem and on the basis of that he takes the decision and explains it very well. And if you miss out on anything, you can come back with more questions.' },
      { title: 'Dr.Mita Chowdhuri', description: 'I installed the app and went for a free consultation with a dietician. The advice given by Dr. Mirza was simply great. He shared a detailed diet chart and exercises with me which was easy to incorporate into my hectic schedule.' },
      { title: 'Dr.Km Hasan', description: 'I installed the app and went for a free consultation with a dietician. The advice given by Dr. Mirza was simply great. He shared a detailed diet chart and exercises with me which was easy to incorporate into my hectic schedule.' },
    ];
  
    return (
      <div className=" flex items-center justify-center">
        <style>
          {`
          .carousel {
            display: flex;
          }
          
          .carousel-item {
            flex: 0 0 calc(47% - 20px);
            margin: 0 10px;
            border: 2px solid #ccc;
            border-radius: 10px;
            padding: 10px;
            transition: opacity 0.5s ease;
          }
          
          .carousel-item.hidden {
            opacity: 0;
            pointer-events: none;
          }
          
          .carousel-item.block {
            opacity: 1;
            pointer-events: auto;
          }

          .carousel-content img {
            max-width: 50%; /* Make the image size smaller */
          }
          `}
        </style>
        
        <div className="relative w-full">
          <div className="carousel">
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentIndex || index === (currentIndex + 1) % items.length ? 'block' : 'hidden'}`}
              >
                <div className="carousel-content p-4 text-center">
                    
                  <p className="text-lg font-semibold">
                   <img src="https://onemg-images.gumlet.io/fetch/w_65,h_65,q_auto,f_auto,r_max/https://doctors-production.s3.amazonaws.com/uploads/doctor_attachment/profile_image/31206/thumb_sanjay.jpg" alt=""className='w-12 h-13 mr-1' /> {item.title}</p>
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
      </div>
    );
  };

export default CarouselOne;
