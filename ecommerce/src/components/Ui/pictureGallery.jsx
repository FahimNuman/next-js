'use client'
import React, { useState } from 'react';

const PictureGallery = ({image}) => {
 
  const images = [
    `http://localhost:5047/${image}`,
    'https://onemg.gumlet.io/l_watermark_346,w_120,h_120,c_fit,q_auto,f_auto/jx0bktwqliah4njccdjf.jpg',
    'https://onemg.gumlet.io/l_watermark_346,w_120,h_120,c_fit,q_auto,f_auto/na12bpyfymzuwe2onzns.jpg',
    'https://onemg.gumlet.io/l_watermark_346,w_120,h_120,c_fit,q_auto,f_auto/haamssccygb116mxtuz6.jpg',
    'https://onemg.gumlet.io/l_watermark_346,w_120,h_120,c_fit,q_auto,f_auto/lyyksqayiqlvwhwmzguu.jpg'
  ];

  const [selectedImage, setSelectedImage] = useState(images[images.length - 1]);
  const [isMagnified, setIsMagnified] = useState(false);
  const [magnifyPosition, setMagnifyPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleMouseMove = (e) => {
    if (isMagnified) {
      const { offsetWidth, offsetHeight } = e.target;
      const { clientX, clientY } = e;
      const { left, top } = e.target.getBoundingClientRect();
      const x = (clientX - left) / offsetWidth;
      const y = (clientY - top) / offsetHeight;
      setMagnifyPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsMagnified(true);
  };

  const handleMouseLeave = () => {
    setIsMagnified(false);
  };

  return (
    <div className="flex">
  
      <div className="flex flex-col items-start">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className="w-12 h-12 m-1 cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <div className="ml-4 relative w-64 h-64 border border-gray-400 rounded-lg mt-1 overflow-hidden">
        {selectedImage && (
          <div
            className="w-full h-full bg-cover"
            style={{
              backgroundImage: `url(${selectedImage})`,
              backgroundSize: isMagnified ? '250%' : 'cover',
              backgroundPosition: isMagnified
                ? `${magnifyPosition.x * 100}% ${magnifyPosition.y * 100}%`
                : 'center center',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          ></div>
        )}
      </div>
    </div>
  );
};

export default PictureGallery;




