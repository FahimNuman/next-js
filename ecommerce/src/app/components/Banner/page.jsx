import React from 'react';

const Banner = () => {
    return (

        <div className="bg-white py-5 md:px-12 px-2 flex justify-center items-center">
            <h2 className="font-semibold capitalize text-xl md:text-3xl relative">
                <div className="p-6 py-12 dark:bg-blue-300 dark:text-gray-900 bg-blue-500 items-center justify-center">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-4xl tracki font-bold">Up to
                                <br className="sm:hidden" />30% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>Get Extra 5% Saving , Your First Order</span>

                            </div>
                            <button className='btn btn-ghost'>Know More</button>
                        </div>
                    </div>
                </div>
                Shop by health concerns
            </h2>

        </div>


    );
};

export default Banner;