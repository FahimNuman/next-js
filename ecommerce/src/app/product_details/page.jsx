'use client'
import Comment_Secion from '@/components/Ui/comment'
import FrequentlyBoughtTogether from '@/components/Ui/frequentlyBought'
import PictureGallery from '@/components/Ui/pictureGallery'
import Rating from '@/components/Ui/rating'
import React, { useState } from 'react'

const page = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <div className='mx-4 md:mx-16 pb-4 px-2'>
        {/* <Breadcrumb_custom /> */}
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-1/3 flex justify-center items-start mt-8'>
            <PictureGallery />
          </div>
          <div className='w-fit md:w-1/3 flex flex-col p-8 gap-4'>
            <div className='flex flex-col gap-4'>
              <h1 className='font-semibold text-2xl'>Swisse Beauty Vegan Collagen Builder | With Biotin & Vitamin C for Skin & Antioxidant Benefits | Tablet</h1>
              <p className='text-sm text-[#ff766b]'>Swisse Wellness</p>
            </div>
            <div className=''>
              <h1>Product highlights</h1>
              <ul>
                <li>Promotes formation of natural collagen which vitally improves skin health and reduce wrinkles</li>
                <li>Provides antioxidant support and reduce free radicals formed in the body
                </li>
              </ul>
            </div>
          </div>
          <div className='w-fit md:w-1/3  flex flex-col gap-4'>
            <div className="card bg-base-100 shadow">
              <div className="card-body flex gap-4">
                <div>
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio radio-error mr-2"
                    value="option1"
                    checked={selectedValue === "option1"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="option1"><span className='mr-4 text-2xl font-semibold'>$10</span>+ 8% off</label>

                </div>
                <div>
                  <input
                    type="radio"
                    name="radio-8"
                    className="radio radio-error mr-2"
                    value="option2"
                    checked={selectedValue === "option2"}
                    onChange={handleRadioChange}
                  />
                  <label htmlFor="option2"><span className='mr-4 text-2xl font-semibold'>$10</span>+ free shipping</label>

                </div>
                <h2 className="text-xs">Inclusive of all taxes</h2>
                <div className="flex items-center">
                  <select className="mr-4 border border-gray-300 rounded px-2 py-1 hover:border-gray-500 focus:outline-none focus:border-blue-500">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                  <p className="text-gray-700 hover:text-blue-500 cursor-pointer">of 50 gm Gel</p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn bg-[#ff766b] text-white hover:bg-white hover:text-[#ff766b] w-full">ADD TO CART</button>
                </div>
              </div>

            </div>
            <div className="card bg-base-100 shadow">
              <div className="card-body">
                <h2 className="card-title">Earliest delivery by <span className='text-green-500'>1pm, Today</span> </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#f8f8f8] flex flex-col md:flex-row'>
        <div className='bg-white md:w-2/3 m-8 flex flex-col items-start h-fit p-4'>
          <div className='flex flex-col p-4'> <iframe src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
            <div className='mt-4'>
              <h1 className='text-xl font-semibold'>Information about Photostable Gold Matte Finish Sunscreen Gel | PA+++ SPF 55</h1>
              <p className='text-sm'>Photostable Gold Sunscreen Gel Spf 55 provides protection from the sun’s harmful rays. The sunscreen gel is suitable for acne-prone oily skin and is dermatologically tested. It aids in protecting the skin from sunburn and premature ageing.</p>
              <br />
              <h1 className='text-base font-semibold'> Key Ingredients:</h1>
              <p className='text-sm'>Cyclopentasiloxane, Dimethicone Crosspolymer, Dimethicone, Dimethicone Crosspolymer, Caprylyl Methicone, PEG-12 Dimethicone, PPG-20 Crosspolymer, Ethylhexyl Methoxycinnamate, Cyclopentasiloxane, PPG​18 Dimethicone, Methylene Bis-Benzotriazolyl Tetramethylbutylphenol, C12-C15 Alkyl Benzoate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Silica, Lauryl Laurate, Ethylhexyl Triazone, Propylene Glycol (And), Diazolidinyl Urea (And), Iodopropynyl Butylcarbamate, Butylated Hydroxytoluene.
              </p>
              <br />
              <h1 className='text-base font-semibold'> Key Benefits:</h1>
              <div className='text-sm'>
                <ul>
                  <li>Enriched with antioxidants and Vitamin E that nourish the skin</li>
                  <li>Provides broad-spectrum skin protection against tanning and sunburns</li>
                  <li>Helps delay premature skin ageing</li>
                  <li>Sweat-resistant formula does not alter the natural pH level of the skin</li>
                </ul>
              </div>
              <br />
              <h1 className='text-base font-semibold'> Good to Know:</h1>
              <p className='text-sm'>Provides PA+++ protection
              </p>
              <br />
              <h1 className='text-base font-semibold'> Best Suited For:</h1>
              <p className='text-sm'>Oily, acne-prone skin
              </p>
              <br />
              <h1 className='text-base font-semibold'> Product Form:</h1>
              <p className='text-sm'>Gel
              </p>
              <br />
              <h1 className='text-base font-semibold'> Area of Application:</h1>
              <p className='text-sm'>Exposed body parts
              </p>
              <br />
              <h1 className='text-base font-semibold'> Concern:</h1>
              <p className='text-sm'>Suntan and sunburn
              </p>
              <br />

              <h1 className='text-base font-semibold'> Directions for Use:</h1>
              <div className='text-sm'>
                <ul>
                  <li>Apply a thin film evenly on the face, neck, and exposed areas of the skin 20-30 minutes before sun exposure</li>
                  <li>Re-apply after swimming and excessive sweating or as advised by the expert</li>
                  <li>Helps delay premature skin ageing</li>
                  <li>Sweat-resistant formula does not alter the natural pH level of the skin</li>
                </ul>
              </div>
              <br />

              <h1 className='text-base font-semibold'>Safety Information:</h1>
              <div className='text-sm'>
                <ul>
                  <li>Store at a temperature not exceeding 30°C. Do not freeze</li>
                  <li>Replace cap tightly after use</li>
                  <li>Avoid contact with eyes. Wash immediately with water in case of accidental contact</li>
                  <li>Do not swallow</li>
                  <li>Discontinue use if signs of irritation or rash appear</li>
                  <li>Do not apply on broken skin</li>
                </ul>
              </div>
              <br />

              <h1 className='text-base font-semibold'>Quick Tips:</h1>
              <p className='text-sm'>Approximately 4-5 FTU (Finger Tip Unit) is sufficient to form a thin film on the face and neck.
              </p>
              <br />
            </div>
          </div>

          <div className='w-full'>
            <div className='rating-div w-full md:w-2/5'>
              <Rating />
            </div>
            <Comment_Secion />
          </div>
        </div>

        <div className='md:flex flex-col md:w-1/3 m-8 md:gap-4 lg:visible lg:flex gap-4'>
          <div className='bg-white hidden lg:visible'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-32 h-32 mx-auto rounded-full" src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/labs.png" alt="Logo" />
              <div className="px-6 py-4">
                <div className="text-xl font-semibold mb-2">Card Title</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="px-6 pb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Click me
                </button>
              </div>
            </div>
          </div>

          <div className='bg-white hidden lg:visible'>

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <img className="w-32 h-32 mx-auto rounded-full" src="https://onemg.gumlet.io/Doctor_xqon4h.png" alt="Logo" />
              <div className="px-6 py-4">
                <div className="text-xl font-semibold mb-2">Card Title</div>
                <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="px-6 pb-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Click me
                </button>
              </div>
            </div>
          </div>

          <div className='bg-white p-4 flex flex-col gap-4 shadow'>
            <h1 className='font-semibold text-xl'>Frequently bought together</h1>
            <FrequentlyBoughtTogether />
          </div>

          <div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex flex-col">

                <div className="p-8 flex flex-col gap-4">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Content Details</div>
                  <p className="mt-2 text-gray-500">Last updated 29 Nov 2023 | 07:00 PM (IST). <br />
                  </p>
                  <div className='flex gap-4 items-center'>
                    <img className='h-16 w-16' src="https://onemg.gumlet.io/hpmev62q0ukad0pyv31g.png" alt="" />
                    <p>We provide you with authentic, trustworthy and relevant information
                      <br />
                      <span className='text-[#ff766b]'>Want to know more</span> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card flex w-full items-center p-4 bg-white shadow'>
            <div className='flex w-fit'>
              <div className='flex flex-col items-center'>
                <div className='h-16 w-16'><img src="https://1mgstaticfiles.s3.amazonaws.com/skuicons/star.png" alt="" /></div>
                <div className='text-center w-1/2'>Authentic Products</div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='h-16 w-16'><img src="	https://1mgstaticfiles.s3.amazonaws.com/skuicons/group.png" alt="" /></div>
                <div className='text-center w-1/2'>Great Savings</div>
              </div>

              <div className='flex flex-col items-center'>
                <div className='h-16 w-16'><img src="	https://1mgstaticfiles.s3.amazonaws.com/skuicons/delivery.png" alt="" /></div>
                <div className='text-center w-1/2'>Home Delivery</div>
              </div>

            </div>

          </div>

        
        </div>
      </div>
    </div>
  )
}

export default page
