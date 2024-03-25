import React from 'react';

const Banner = () => {
    return (

        <div className="bg-white py-3 md:px-6 px-2 flex justify-between items-center rounded-md border">
        <h2 className=" capitalize text-lg  md:text-xl w-full rounded-box z-10 relative">
          <div className="flex justify-center items-center" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <img src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png" alt="" style={{ width: '1212px', height: 'auto' }} />
          </div>
          <span className="flex justify-center justify-items-start" > Shop by health concerns</span>
        </h2>
      </div>
      
    


    );
};

export default Banner;