import Slider from '@/components/Slider/page';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="flex h-screen">
            <div className="w-full h-full bg-gray-100">
                <div className="container mx-auto flex h-full">
                   
                    <div className="w-1/6 bg-gray-200 p-4 rounded">
                        {/* Sidebar content goes here */}
                        <div className="w-6/6 h-96 bg-white p-4 rounded divide-y ">
                        <div tabIndex={0} className="collapse collapse-plus   ">
                        <div className="collapse-title text-sm font-medium">
                        CATEGORIES
                        </div>
                        <div className="collapse-content text-sm "> 
                          <Link href="" className='hover:text-orange-700'>Chyawanparash</Link> <br />
                           <Link href="" className='hover:text-orange-700'>Juice</Link><br />
                           <Link href=""className='hover:text-orange-700'>Immunity Boosters</Link>
                        </div>
                        </div>
                       
                        </div>
                    </div>
                    
                    {/* Container */}
                    <div className="w-5/6 bg-white p-4">
                       <Slider/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;