import React from 'react';

const Banner = () => {
    return (

        <div className="bg-white py-5 md:px-12 px-2 flex justify-between items-center rounded-md border">
            <h2 className="font-semibold capitalize text-xl md:text-3xl w-full rounded-box  z-10 relative">
                <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 bg-blue-500 items-center justify-center">
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <h2 className="text-center text-6xl tracki font-bold">Up to
                                <br className="sm:hidden" />30% Off
                            </h2>
                            <div className="space-x-2 text-center py-2 lg:py-0">
                                <span>Get Extra 5% Saving , Your First Order</span>
                                <span className="font-bold text-lg">Fortis_Mg</span>
                            </div>
                            <a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Know More</a>
                        </div>
                    </div>
                </div>
                Shop by health concerns
            </h2>

        </div>


    );
};

export default Banner;