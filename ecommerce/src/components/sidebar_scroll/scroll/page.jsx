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
    <div>
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
          style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 4rem)' }}
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
                  activeLink === 'reflectizsng'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#reflecting"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Uses and benefits </span>
              </Link>
            </li>
            <li className="hover:text-emerald-400">
              <Link
                className={`${
                  activeLink === 'details'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#details"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Side effects</span>
              </Link>
            </li>
            <li className="hover:text-emerald-400">
              <Link
                className={`${
                  activeLink === 'howtouse'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#howtouse"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>How to use </span>
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
                <span>How drug works</span>
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
                <span>Safety advice</span>
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
                <span>All Substitutes</span>
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
                <span>Quick tips </span>
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
                <span>Fact box</span>
              </Link>
            </li>
            <li className="">
              <Link
                className={`${
                  activeLink === 'concerns'
                    ? 'bg-[#fc1c26] text-white border-l-[2px] border-[#2544b8]'
                    : ''
                }`}
                href="#concerns"
                spy={true}
                smooth={true}
                offset={-5}
                duration={500}
                onSetActive={handleSetActive}
              >
                <span>Patient concerns</span>
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
                <span>User feedback </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar_scroll
