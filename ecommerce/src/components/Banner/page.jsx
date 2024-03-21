import React from 'react';

const Banner = () => {
    return (

        <div className="bg-white py-3 md:px-6 px-2 flex justify-between items-center rounded-md border">
        <h2 className="font-semibold capitalize text-lg md:text-xl w-full rounded-box  z-10 relative">
            <div className="p-4 py-8 dark:bg-violet-400 dark:text-gray-900 bg-blue-500 items-center justify-center">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-4xl tracki font-bold">Up to
                            <br className="sm:hidden" />30% Off
                        </h2>
                        <div className="space-x-1 text-center py-1 lg:py-0">
                            <span className="text-sm">Get Extra 5% Saving, Your First Order</span>
                            <span className="font-bold text-base">Fortis_Mg</span>
                        </div>
                        <a href="#" rel="noreferrer noopener" className="px-3 mt-2 lg:mt-0 py-2 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400 text-sm">Know More</a>
                    </div>
                </div>
            </div>
            Shop by health concerns
        </h2>
    </div>
    


    );
};

export default Banner;