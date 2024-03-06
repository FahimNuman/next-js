import HealthCheckup from '@/components/HealthCheckup/page'
import Health_Checkup from '@/components/Health_Checkup/page'
import { faCalendarPlus, faCreditCard, faHandPeace, faHospital, faLightbulb, faMagnifyingGlass, faNotesMedical, faPaperPlane, faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import TextCarousel from './TextCarousel'

const lab_Test = () => {
  return (
    <div className=''>
      <div className="hero bg-[#f7f9fc] h-[425px] pb-20">
        <div className="hero-content flex-col lg:flex-row ">

          <div className=' flex-1 flex justify-center'>
            <div className=''>
              <div className="carousel rounded-box w-96">
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" />
                </div>
                <div className="carousel-item w-1/2">
                  <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-6'>
            <div className='flex flex-col w-76 gap-2'>
              <h1 className='font-bold text-xl'>Lab Test From The Comfort Of Your Home</h1>
              <h4>Trusted by 40 Lakhs+ satisfied customers | 1 Crore+ lab tests booked</h4>
            </div>
            <div className='grid grid-cols-5 gap-4 '>
              <div className='flex flex-col items-center text-center border-r-2'>
                <FontAwesomeIcon icon={faSquarePlus} className='w-12 h-12' />
                <h3>100% Safe & Hygienic</h3>
              </div>
              <div className='flex flex-col items-center text-center border-r-2'>
                <FontAwesomeIcon icon={faHandPeace} className='w-12 h-12' />
                <h3>Home Sample Pick Up</h3>
              </div>
              <div className='flex flex-col items-center text-center border-r-2'>
                <FontAwesomeIcon icon={faPaperPlane} className='w-12 h-12' />
                <h3>View Reports Online</h3>
              </div>
              <div className='flex flex-col items-center text-center border-r-2'>
                <FontAwesomeIcon icon={faHospital} className='w-12 h-12' />
                <h3>Free Doctor Consultation</h3>
              </div>
              <div className='flex flex-col items-center text-center'>
                <FontAwesomeIcon icon={faCreditCard} className='w-12 h-12' />
                <h3>Best Prices Guaranteed</h3>
              </div>
            </div>
            <div>
              <button className='btn bg-[#ff6f61] text-white hover:text-[#ff6f61] hover:bg-white'>View Popular Packages</button>
            </div>

          </div>
        </div>
      </div>

      <div className='w-2/3 mx-auto relative hidden lg:block md:bottom-16'>
        <h1 className='font-bold text-2xl mb-4'>Popular lab tests & profiles</h1>
        <div className='flex mt-2 justify-center gap-2 p-4 text-sm border-2 bg-white'>
          <div className='flex flex-col border-r px-2 gap-3'>
            <div className='font-bold text-md'>HEALTH TEST AT YOUR HOME</div>
            <div className='grid grid-cols-3 md:grid-cols-2 gap-6'>
              <div>+ CBC (Complete Blood Count)</div>
              <div>+ LFT (Liver Function Test)</div>
              <div>+ Lipid Profile</div>
              <div>+ Thyroid Profile Total (T3, T4 & TSH)</div>
              <div>+ Diabetes Screening (HbA1C & Fasting Sugar)</div>
              <div>+ COVID- RTPCR </div>
            </div>
          </div>
          <div className='flex flex-col px-2 gap-3'>
            <div className='font-bold text-md'>VISIT A LAB NEAR YOU</div>
            <div className='grid grid-cols-2 gap-6 mb-2'>
              <div>+ CBC (Complete Blood Count)</div>
              <div>+ LFT (Liver Function Test)</div>
              <div>+ Lipid Profile</div>
              <div>+ Thyroid Profile Total (T3, T4 & TSH)</div>
              <div>+ Diabetes Screening (HbA1C & Fasting Sugar)</div>
              <div>+ COVID- RTPCR </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'><button className='text-[#ff6f61] bg-white rounded-3xl border-2 px-4 py-2 font-bold relative bottom-4 flex items-center gap-2 text-xs'> <FontAwesomeIcon icon={faMagnifyingGlass} className='w-4 h-4' />FIND YOUR TESTS</button></div>
      </div>

      <div className='w-2/3 mx-auto grid grid-cols-1 gap-2'>
        <h1 className='font-semibold text-2xl'>Popular health checkups</h1>
        <Health_Checkup/>
      </div>

      <div className='w-2/3 mx-auto flex gap-8 my-12'>
      <div className='flex-1'>
        <h1 className='font-bold'>UNCOMPROMISED QUALITY. RELIABLE RESULTS. ALWAYS.</h1>
        <p className='text-sm'>Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Tata 1mg you can get your lab tests done from the comfort of your home. Our highly qualified phlebotomist will collect the samples at your preferred time. Watch this video to see steps taken by us to ensure quality and hygiene in sample collection. Book your next lab test with Tata 1mg at the lowest price guaranteed!</p>
      </div>
      <div className='flex-1'>
      <iframe width="400" height="200" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
      </div>
      </div>

      <div className='text-start'>
        
          <TextCarousel/>
        
      </div>

    </div>
  )
}

export default lab_Test
