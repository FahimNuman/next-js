'use client'
import RightSideComponents from '@/components/sidebar_scroll/rightSideComponents/page'
import Sidebar_scroll from '@/components/sidebar_scroll/scroll/page'
import SidebarMenuComponent from '@/components/sidebar_scroll/sidebarMenuComponent/page'
import React, { useState } from 'react'

const Page = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Attach scroll event listener
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className=" flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3">
            <Sidebar_scroll />
          </div>

          <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
            <SidebarMenuComponent />
          </div>

          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <RightSideComponents />
          </div>
        </div>
      </section>

      {showBackToTop && (
        <button
          className="fixed bottom-8 right-8 bg-green-400 text-white px-4 py-2 rounded-full shadow-md hover:bg-green-700 transition duration-300"
          onClick={scrollToTop}
        >
          <img
            alt=""
            src="/allmedicinproductdetails/upperarrow.png"
            width="20"
            height="20"
          />
        </button>
      )}
    </div>
  )
}

export default Page
