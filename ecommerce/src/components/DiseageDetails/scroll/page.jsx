/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { scroller } from 'react-scroll'

const Sidebar_scroll = () => {
  const [activeLink, setActiveLink] = useState('reflecting')

  const handleSetActive = (to) => {
    setActiveLink(to)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = scroller.getActiveLink() || 'reflecting'
      if (currentSection !== activeLink) {
        setActiveLink(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeLink])
  return (
    <div className='flex flex-col w-1/4 bg-gray-200 dark:bg-gray-800'>
      <div
        className="drawer lg:drawer-open shadow-xl"
        style={{
          position: '-webkit-sticky',
          position: 'sticky',
          top: '0',
        }}
      >
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center md:sticky">
          {/* Content Here */}
        </div>
        <div
          className="drawer-side"
          style={{ overflowY: 'auto', maxHeight: 'calc(120vh - 4rem)' }}
        >
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content divide-y divide-slate-200 text-clip overflow-hidden">
            {/* Sidebar content here */}
            <li className="hover:text-emerald-400">
              <Link
                className={`${
                  activeLink === 'Symptoms'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#Symptoms"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Symptoms </span>
              </Link>
            </li>
            <li className="hover:text-emerald-400">
              <Link
                className={`${
                  activeLink === 'Causes'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#Causes"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Causes</span>
              </Link>
            </li>
            <li className="hover:text-emerald-400">
              <Link
                className={`${
                  activeLink === 'risk_factors'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#risk_factors"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Risk factors </span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'howdrugworks'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#howdrugworks"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Diagnosis</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'safetyadvice'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#safetyadvice"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Celebs affected</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'allsubstitutes'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#allsubstitutes"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Celebs affected</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'allsubstitutes'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#quicktips"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Prevention </span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'factbox'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#factbox"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Specialist to visit</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'treatment'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#treatment"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Treatment</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'feedback'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#feedback"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Home-care</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'feedback'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#feedback"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Complications</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'feedback'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#feedback"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Complications</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'feedback'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#feedback"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Alternatives therapies</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'feedback'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#feedback"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Living with</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar_scroll
