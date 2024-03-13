import Drug_Therapeutic_Side_Bar from '@/components/Sidebars/Drug_Therapeutic_Side_Bar/page'
import React from 'react'

const drugs_therapeutic = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-3 ml-4">
        <div>
          <h1 className='font-bold'>
          Search results for Omez
          </h1>
        </div>
     
          <div key="" className="card card-side bg-base-100 shadow-xl flex w-full mb-2">
            <div className="col-span-1 p-1 flex justify-items-center">
              <figure>
                <img
                  style={{ width: '40px' }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
                  alt=""
                />
              </figure>
            </div>
            <div className="card-body col-span-11 pl-3">
              <div className="card-title text-xs font-bold flex justify-between">
                <span>
                    Omez Injection
                </span>
                <span>
                    80 tk
                </span>
                <br />
              </div>
              <small>
                Prescription Required
              </small>
              <div className="text-xs">
                Strip Of 20 Capsules
              </div>
            </div>
          </div>
        
      </div>
    </div>
  )
}

export default drugs_therapeutic