import React from 'react'

const BottomNav = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:flex ml-4 gap-16 mb-4">
          <div className="w-2/3 lg:flex justify-between gap-1">
            <details className="dropdown w-2/4 md:w-1/4 ">
              <summary className="btn btn-outline bg-white text-blue-600  hover:text-white  hover:bg-blue-600 hover: w-full">
               <div className='flex gap-10'>
                <p>Location</p>
                <p>⚲</p>
               </div>
              
              </summary>

              <ul className="shadow menu dropdown-content z-[1] rounded-box bg-white">
                <li>
                  <a>Dhaka</a>
                </li>
                <li>
                  <a>Chittagong</a>
                </li>
                <li>
                  <a>Sylhet</a>
                </li>
                <li>
                  <a>Khulna</a>
                </li>
                <li>
                  <a>Rajshahi</a>
                </li>
                <li>
                  <a>Rangpur</a>
                </li>
                <li>
                  <a>Barisal</a>
                </li>
                <li>
                  <a>Mymensingh</a>
                </li>
              </ul>
            </details>

            <div className="flex-grow flex-shrink-0">
              <input
                type="text"
                placeholder="Search for medicines"
                className="input input-info w-80 max-w-xs bg-neutral-100"
              />
            </div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="text-right">
              QUICK BUY! Get 15% off on <br />
              medicines*
            </div>
            <div>
              <summary className="btn bg-blue-600 text-white hover:bg-white hover:text-blue-600 w-full">
                Quick Order
              </summary>
            </div>
          </div>
        </div>
    </div>
  )
}

export default BottomNav
