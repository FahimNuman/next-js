import React from 'react'

const TextCarousel = () => {
  return (
    <div className='flex flex-col justify-center w-2/3 mx-auto gap-4'>
      <div className='font-bold text-2xl'>
        <h1>Our Happy Customers</h1>
      </div>

      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full items-center">
          <h1>Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Tata</h1>
          <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full items-center">
          <h1>Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Tata</h1>
          <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full items-center">
          <h1>Spending hours in a queue at a diagnostic lab or a hospital is now a thing of the past. With Tata</h1>
          <div className="absolute flex justify-between transform left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center gap-3'>
        <h1 className='font-bold text-2xl'>Want to book lab tests in bulk?</h1>
        <h2>Get customized health packages at best prices</h2>
        <button className='btn bg-[#ff6f61] text-white hover:bg-white hover:text-[#ff6f61]'>CONTACT US</button>
      </div>

      <div className='flex'>

        <div>
          <img src="	https://onemg.gumlet.io/image/upload/v1572602488/store_creatives_mccvjq.png" alt="" />
        </div>

        <div className='flex flex-col gap-16 items-start justify-center'>

          <div className='flex flex-col gap-4 text-start justify-center'>
            <h1 className='font-bold text-xl'>Download the TATA 1mg APP</h1>
            <p className='text-sm'>Book diagnostics tests online with certified labs at best prices</p>
          </div>

          <div className='flex gap-2 w-fit'>
            <img className='h-10 w-32' alt="play-store-img" src="https://onemg.gumlet.io/search_widget/google-badge_3x.png?format=auto" />
            <img className='h-10 w-32' alt="app-store-img" src="https://onemg.gumlet.io/search_widget/appstore-badge_3x.png?format=auto"></img>
          </div>

        </div>

      </div>

      <div className='my-8'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum laboriosam eligendi a quod consequuntur aut voluptate at expedita quam, rem quasi nulla officiis similique officia deserunt excepturi iure tempora quidem.</p>

      </div>
      <hr />

      <div className='mb-4'>
        <div className='text-center font-base text-2xl mb-8'>INDIA’S LARGEST HEALTHCARE PLATFORM</div>
        <div className='flex gap-48 justify-center'>
          <div className='grid grid-cols-1 justify-center gap-4'>
            <h1 className='font-extrabold text-3xl'>260m+</h1>
            <p>Visitors</p>
          </div>
          <div className='grid grid-cols-1 justify-center gap-4'>
            <h1 className='font-extrabold text-3xl'>260m+</h1>
            <p>Visitors</p>
          </div>
          <div className='grid grid-cols-1 justify-center gap-4'>
            <h1 className='font-extrabold text-3xl'>260m+</h1>
            <p>Visitors</p>
          </div>
        </div>
      </div>

      <br />
      <div className='flex justify-center gap-4 mb-4 items-center'>
        <div className='text-xl'>Get the link to download App</div>
        <div className='flex gap-4'>
          
          <input type="text" placeholder="Enter Phone Number" className="input input-ghost w-full max-w-xs bg-base-200" />
          <button className='btn bg-[#ff6f61] text-white hover:text-[#ff6f61] hover:bg-white'>Send Link</button>
        </div>
      </div>
    </div>
  )
}

export default TextCarousel
