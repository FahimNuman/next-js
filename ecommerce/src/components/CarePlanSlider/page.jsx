'use client';
import React, { useState } from 'react';

const CarePlanSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };
  
    const items = [
      { title: 'Dr.Orijit Sing', description: 'Initially, I was a little skeptical of consulting a doctor online. But the consultation turned out to be honest and cool, the doctor\'s behavior was friendly. The best part is that I saved so much time and money!.' },
      { title: 'Dr.Strange', description: 'Dr. Chakraborty is so concerned about his patient. I sincerely wish him the best. He always takes the time to understand the problem and on the basis of that he takes the decision and explains it very well. And if you miss out on anything, you can come back with more questions.' },
      { title: 'Dr.Orijit Sing', description: 'I installed the app and went for a free consultation with a dietician. The advice given by Dr. Mirza was simply great. He shared a detailed diet chart and exercises with me which was easy to incorporate into my hectic schedule.' },
      { title: 'Dr.Orijit Sing', description: 'I installed the app and went for a free consultation with a dietician. The advice given by Dr. Mirza was simply great. He shared a detailed diet chart and exercises with me which was easy to incorporate into my hectic schedule.' },
    ];
  
    return (
      <div className="flex items-center justify-center">
        <style>
          {`
          .carousel {
            display: flex;
            overflow-x: hidden; /* Hide overflow */
            background-color: red-100;
          }
          
          .carousel-item {
            flex: 0 0 calc(100% - 40px); /* Change width to 100% minus margin */
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
            max-width: 100%; /* Make the image size 100% of container */
          }

          .dots {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }

          .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ccc;
            margin: 0 5px;
            cursor: pointer;
          }

          .dot.active {
            background-color: #ff6f61; /* Change active dot color */
          }
          `}
        </style>
        
        <div className=" w-full ">
          <div className="carousel ">
            {items.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === currentIndex ? 'block' : 'hidden'}`}
              >
                <div className="carousel-content p-4 text-center bg-red-100">
                  <img src="https://onemg.gumlet.io/image/upload/v1617168913/marketing/viz4ybkh6wfq9sjbu4ze.png" alt="" className='w-12 h-13 mr-1' />
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="dots">
            {items.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    );
};

export default CarePlanSlider;
