
import React from 'react'
import NavSection from '../navigation/page'
import Carousel from '@/components/Carousel/page'
import Banner from '@/components/Banner/page'
import Slider from '@/components/Slider/page'
import Slider2 from '@/components/Slider2/page'

const HomePage = () => {
  return (
    <div>
      <Carousel/>
        <Slider/>
        <Slider2/>
        <Banner/>
    </div>
  )
}

export default HomePage
