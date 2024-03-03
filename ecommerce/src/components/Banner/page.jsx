import React from 'react';

const Banner = () => {
    return (

        <div className="bg-white md:px-12 px-2 flex justify-center items-center">
            <h2 className="font-semibold capitalize text-xl md:text-xl relative">
                <div className="p-6 py-12 dark:bg-blue-300  items-center justify-center">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            
                            <div className="space-x-2 text-center">
                                <span>Gete extra 5% savings on your orders.Free shipping, same-day delivery and more. Become a member today!</span>

                            </div>
                            <button className='btn text-white bg-black'>Know More</button>
                        </div>
                    </div>
                </div>
                <div className='text-center my-4'>
                Shop by health concerns
                </div>
               
            </h2>

        </div>


    );
};

export default Banner;