import getAllDiseases from '@/lib/allDiseageData';
import React from 'react'
import ProductIndex from '../product_index/page';
import Link from 'next/link';

export default async function Posts() {
  const getDiseases = await getAllDiseases();
 // console.log(getDiseases);
  
  return (
    <div>
      <ProductIndex />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
  {getDiseases.map(disease =>
    <div key={disease.CategoryID} className="card card-side bg-base-100 shadow-xl rounded " style={{ display: 'flex', height: '120px', borderRadius: '5px', overflow: 'hidden' }}>
      <div className='w-1/4'>
        <figure style={{ height: '80%', width: '90%' }}>
          <img
            style={{ objectFit: 'cover', height: '50%', width: '50%', maxWidth: '50%' }}
            src={`http://localhost:5047/${disease.AllDiseaseImage}`}
            alt=""
          />
        </figure>
      </div>
      <div className="card-body w-2/3 flex flex-col justify-between p-4">
        <div className="text-left">
          <Link href={`/all_diseases/id`} className="card-title text-xs text-slate-600 font-bold">{disease.AllDiseaseName.toUpperCase()}</Link>
        </div>
        <div className='text-left mt-2'>
          <p className="text-xs text-slate-600">{disease.Remark}</p>
        </div>
      </div>
    </div>
  )}
</div>

    </div>
  )
}
