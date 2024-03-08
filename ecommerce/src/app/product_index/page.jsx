/* eslint-disable react/jsx-key */
// components/AlphabetBoxes.js
import Link from 'next/link';
import React from 'react';

const AlphabetBoxes = () => {
  const alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

  return (
    
    <div className="border-2">
        <div className="flex flex-wrap border-2">
        {alphabet.map((letter) => (
            <Link href="#" className="w-8 h-10 bg-blue-500 m-2 flex items-center justify-center text-white">
            {letter}
            </Link>
        ))}
        </div>
    </div>
  );
};

export default AlphabetBoxes;
