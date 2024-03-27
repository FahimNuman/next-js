/* eslint-disable @next/next/no-img-element */
import ProductIndex from '../product_index/page';
import getAllMedicine from '@/lib/allMedicineData';
import Link from 'next/link';
import React from 'react'
export default async function Posts() {
  const getMedicine = await getAllMedicine();
  return (
    <div>
      <ProductIndex />
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
  {getMedicine.map(medicine =>
    <div key={medicine.CategoryID} className="card card-side bg-base-100 shadow-xl rounded " style={{ display: 'flex', height: '120px', borderRadius: '5px', overflow: 'hidden' }}>
      <div className='w-1/4'>
        <figure style={{ height: '80%', width: '90%' }}>
          <img
            style={{ objectFit: 'cover', height: '50%', width: '50%', maxWidth: '50%' }}
            src={`http://localhost:5047/${medicine.SkuImage}`}
            alt=""
          />
        </figure>
      </div>
      <div className="card-body w-2/3 flex flex-col justify-between p-4">
        <div className="text-left">
          <Link href={`/all_medicine/id`} className="card-title text-xs text-slate-600 font-bold">{medicine.SkuName.toUpperCase()}</Link>
        </div>
        <div className='text-left mt-2'>
          <p className="text-xs text-slate-600">{medicine.Remark}</p>
        </div>
      </div>
    </div>
  )}
</div>

    </div>
  )
}
