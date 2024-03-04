import getAllDiseases from '@/lib/allDiseageData';
import React from 'react'
import ProductIndex from '../product_index/page';
export default async function Posts() {
const getDiseases = await getAllDiseases();
  return (
    <div>
      <ProductIndex/>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {getDiseases.map(diseases =>
      
          <div key={diseases.id} className="card card-side bg-base-100 shadow-xl" style={{ height: '300px' }}>
          <figure style={{ height: '60%', overflow: 'hidden' }}>
            <img
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              src="https:encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtELB6BLBdGNjRrLnSK3G8fkX9m4FVF3yWlsqhBG2HCmg-Leoh-OuFCscijxBeMc87ZMo&usqp=CAU"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{diseases.title}</h2>
            <p>{diseases.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div> 
        )}
        </div>
       </div>  

  )
}

