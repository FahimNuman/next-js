'use client';
import { useState } from 'react';
import Link from 'next/link';
import getAllTherapeuticData from '@/lib/allTherapeuticData';
// import { getTherepeuticMedicing } from '@/lib/allMedicineData';


const Accordion = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse collapse-plus mb-4 ${isOpen ? 'open' : ''}`}>
      <input type="checkbox" id={title} defaultChecked={isOpen} onChange={handleToggle} />
      <div className="collapse-title text-xl font-medium">
        <label htmlFor={title}>{title}</label>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <ul className="list-none">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default async function therapeuticMedicine() {
  const therapeuticMedicine = await getAllTherapeuticData();

  therapeuticMedicine.map((index) => {
    console.log(index.title)
  })

  const accordionData = [
    {
      title: 'Accordion 1',
      items: [
        { label: 'Human Insulin Premix', link: '#' },
        { label: 'Human Insulin Basal', link: '#' },
      ],
    },
    {
      title: 'Accordion 2',
      items: [
        { label: 'Human Insulin Premix', link: '#' },
        { label: 'Human Insulin Basal', link: '#' },
      ],
    },
    {
      title: 'Accordion 3',
      items: [
        { label: 'Human Insulin Premix', link: '#' },
        { label: 'Human Insulin Basal', link: '#' },
      ],
    },
  ];

  return (

    <div>
      <div className='flex'>
        <div className="card bg-slate-50 p-4 w-1/3">
          <div className="font-bold">
            THERAPEUTIC CLASSES
          </div>
          {accordionData.map((accordion, index) => (
            <Accordion key={index} title={accordion.title} items={accordion.items} />
          ))}
        </div>

        <div className="w-2/3">
          <div className="grid grid-cols-1 mt-3 ml-4">
            <div>
              <h1 className='font-bold'>
                HUMAN INSULIN BASAL
              </h1>
              <h5 className='font-normal text-sm'>
                Human insulin basal are types of insulin that are prescribed to treat both type 1 and type 2 diabetes mellitus. These are slower to act and last longer than regular human insulin. Such insulins help to control the blood sugar levels while fasting, in between meals and overnight.
              </h5>
            </div>
            {therapeuticMedicine.map(index =>
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

      </div>
    </div>
  );
};


