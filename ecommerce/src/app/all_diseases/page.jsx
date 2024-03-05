import getAllDiseases from '@/lib/allDiseageData';
import React from 'react'
import ProductIndex from '../product_index/page';
export default async function Posts() {
const getDiseases = await getAllDiseases();
  return (
    <div>
      <ProductIndex />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {getDiseases.map(disease =>
          <div key={disease.id} className="card card-side bg-base-100 shadow-xl" style={{ height: '120px' }}>
            <div className='w-1/3 flex'>
              <figure >
                <img
                  style={{ objectFit: 'cover', width: '30%' }}
                  src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
                  alt=""
                />
              </figure>
            </div>
            <div className="card-body w-2/3">
              <div className="card-title text-sm">{disease.title}</div>
            </div>

          </div>
        )}
      </div>
    </div>

  )
}

