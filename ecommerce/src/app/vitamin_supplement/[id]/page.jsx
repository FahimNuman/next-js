'use client';
import { useSearchParams } from 'next/navigation';
import getAllTherapeuticData from '@/lib/allTherapeuticData';


export default async function therapeuticMedicine({params}) {
  const therapeuticMedicine = await getAllTherapeuticData();

  const filteredData = therapeuticMedicine.filter(item => item.id === parseInt(params.id, 10));
  console.log(filteredData);
  return (
    <div>
      <div className="grid grid-cols-1 mt-3 ml-4">
      
        {filteredData.map(index =>
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
                  Human Insulatard 40IU/ml Suspension for Injection
                </span>
                <span>
                  MRP : 100tk
                </span>
              </div>
              <small>
                Prescription Required
              </small>
              <div className="text-xs">
                vial of 10 ml Suspension for Injection
              </div>
              <div className="text-xs">
                Novo Nordisk India Pvt Ltd
              </div>
              <div className="text-xs flex justify-between">
                <div >Insulin Isophane (40IU)</div>
                <div className="font-semibold text-[#ff6f61]">ADD</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


