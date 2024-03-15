'use client'
import RightSideComponents from '@/components/DiseageDetails/rightSideComponents/page'
import Sidebar_scroll from '@/components/DiseageDetails/scroll/page'
import SidebarMenuComponent from '@/components/DiseageDetails/sidebarMenuComponent/page'
import React, { useState } from 'react'

const Page = ({params}) => {
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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}

      <Sidebar_scroll />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Top Bar */}
        <div className="bg-gray-500 dark:bg-gray-700 py-4 px-6">
          {/* Content for top bar */}
        </div>

        {/* Main Content Scrollable Area */}
        <div className="flex-1 px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
          <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
            <div className="col-span-12 md:col-span-3">
              {/* Your content here */}
            </div>

            <div className="col-span-10  xl:col-span-10 lg:col-span-5 md:col-span-9 min-h-96">
              <SidebarMenuComponent id={params.id} />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
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
