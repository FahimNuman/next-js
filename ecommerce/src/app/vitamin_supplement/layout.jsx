/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import Banner from '@/components/Banner/page'
import Slider from '@/components/Slider/page'
import Link from 'next/link'

const SidebarMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`collapse collapse-plus mb-4 ${isOpen ? 'open' : ''}`}>
      <input
        type="checkbox"
        id={title}
        defaultChecked={isOpen}
        onChange={handleToggle}
      />
      <div className="collapse-title text-sm font-semibold font-medium ">
        <label htmlFor={title}>{title}</label>
      </div>
      <div className="search-input border">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {isOpen && (
        <div className="collapse-content" style={{ maxHeight: '200px', overflowY: 'auto', position: 'sticky', top: '0' }}>
        <ul className="list-none text-sm font-light">
          {filteredItems.map((item, index) => (
            <li key={index}>
              <input type="checkbox" id={`${title}-${index}`} />
              <label htmlFor={`${title}-${index}`}>{item.label}</label>
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      
      )}
    </div>
  )
}

const VitaminSupplementlayout = ({ children }) => {
  const vitaminData = [
    {
      title: 'BRANDS',
      items: [
        { label: 'Multivitamins', link: '/vitamin_supplement/1' },
        { label: 'Vitamin D3', link: '/vitamin_supplement/2' },
        { label: 'Vitamin D4', link: '/vitamin_supplement/3' },
        { label: 'Vitamin D5', link: '/vitamin_supplement/4' },
        { label: 'Vitamin D6', link: '/vitamin_supplement/5' },
        { label: 'Vitamin B2', link: '/vitamin_supplement/6' },
        { label: 'Vitamin C7', link: '/vitamin_supplement/7' },
        { label: 'Cerelac', link: '/vitamin_supplement/8' },
        { label: 'Vitamin D6', link: '/vitamin_supplement/9' },
        { label: 'Vitamin D6', link: '/vitamin_supplement/10' },
      ],
    },
    {
      title: 'PRODUCT FROM',
      items: [
        {
          label: 'Human Insulin Premix',
          link: '/vitamin_supplement_classes/3',
        },
        { label: 'Human Insulin Basal', link: '#' },
      ],
    },
    {
      title: 'Vitamin 3',
      items: [
        { label: 'Human Insulin Premix', link: '#' },
        { label: 'Human Insulin Basal', link: '#' },
      ],
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = vitaminData.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <div className="flex">
        <div className="card bg-slate-50 p-4 w-3/3">
          <div className="bg-white w-3/2">
            <div className="font-bold">CATEGORIES</div>
            {currentItems.map((vitamin, index) => (
              <SidebarMenu
                key={index}
                title={vitamin.title}
                items={vitamin.items}
              />
            ))}
          </div>
        </div>
        <div className="w-2/3 p-4">
          {children}
          <div className="w-6/3 p-4 h-24">
            <Slider />
          </div>
          <div className="w-3/1  h-24 ">
         {/** 
          *  <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
              <div className="container p-4 mx-auto space-y-16 sm:p-10">
                <div className="space-y-4">
                  
                  
                </div>
                <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                        src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljaW5lfGVufDB8fDB8fHww"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                       
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                        src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lZGljaW5lfGVufDB8fDB8fHww"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                       
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                        src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/adc09b9c486249038166125a58c6e558/revital-h-for-woman-tablet-with-multivitamins-calcium-zinc-natural-ginseng-for-daily-immunity-strong-bones-and-enhances-energy-level.jpg"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                      
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                        src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/adc09b9c486249038166125a58c6e558/revital-h-for-woman-tablet-with-multivitamins-calcium-zinc-natural-ginseng-for-daily-immunity-strong-bones-and-enhances-energy-level.jpg"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                        
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                        src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/adc09b9c486249038166125a58c6e558/revital-h-for-woman-tablet-with-multivitamins-calcium-zinc-natural-ginseng-for-daily-immunity-strong-bones-and-enhances-energy-level.jpg"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                        
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                    <img
                        src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/adc09b9c486249038166125a58c6e558/revital-h-for-woman-tablet-with-multivitamins-calcium-zinc-natural-ginseng-for-daily-immunity-strong-bones-and-enhances-energy-level.jpg"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                        
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                      <img
                        src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/adc09b9c486249038166125a58c6e558/revital-h-for-woman-tablet-with-multivitamins-calcium-zinc-natural-ginseng-for-daily-immunity-strong-bones-and-enhances-energy-level.jpg"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                       
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="max-w-xs p-2 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
                      <img
                        src="https://onemg.gumlet.io/images/f_auto,q_auto,w_150,c_fit,h_150/adc09b9c486249038166125a58c6e558/revital-h-for-woman-tablet-with-multivitamins-calcium-zinc-natural-ginseng-for-daily-immunity-strong-bones-and-enhances-energy-level.jpg"
                        alt=""
                        className="object-cover object-center w-40 rounded-md h-50 dark:bg-gray-500"
                      />
                      <div className="mt-6 mb-2">
                        
                      </div>
                      <p className="dark:text-gray-100">
                      Product
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>**/}  
          </div>
          {/* Pagination */}
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(vitaminData.length / itemsPerPage) },
              (_, i) => (
                <li key={i} className="page-item place-items-center">
                  <button onClick={() => paginate(i + 1)} className="page-link">
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  )
}

export default VitaminSupplementlayout
