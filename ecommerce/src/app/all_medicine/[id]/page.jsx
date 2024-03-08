/* eslint-disable @next/next/no-img-element */
'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { scroller } from 'react-scroll'


const Page = () => {
  const [activeLink, setActiveLink] = useState('reflecting')

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

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
      <section className="px-5 py-10 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-12 mx-auto gap-y-6 md:gap-10">
          <div className="flex flex-col justify-between col-span-12 py-2 space-y-8 md:space-y-16 md:col-span-3 ">
            <div className="drawer lg:drawer-open shadow-xl md:sticky">
              <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col items-center justify-center md:sticky">
                
              </div>
              <div className="drawer-side ">
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
                    <span>Allsubstitutes</span>
                  </Link>
                </li>
                <li className="">
                  <Link
                    className={`${
                      activeLink === 'quicktips'
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

          <div className="relative flex col-span-12 bg-center bg-no-repeat bg-cover dark:bg-gray-500 xl:col-span-6 lg:col-span-5 md:col-span-9 min-h-96">
            <div className="md:col-span-9 sm:col-span-12">
              <div className="flex-1 p-6 sm:mx-6 sm:px-0 border-b-2 p-6">
                <header className="flex gap-4 mb-4">
                  <div>
                    <h3 className=" font-medium text-2xl font-bold text-black">
                      Amoxyclav 625 Tablet
                    </h3>
                    <p className="text-xs text-black flex ">
                      {' '}
                      <a
                        href="#"
                        className="relative inline-flex items-center justify-center w-4 h-4 text-white rounded-full"
                      >
                        <img
                          src="https://i.pravatar.cc/48?img=24"
                          alt="user name"
                          title="user name"
                          width="14"
                          height="14"
                          className="max-w-full rounded-full"
                        />
                      </a>
                      Prescription Required
                    </p>
                  </div>
                </header>
                <p className="font-bold text-sm">MARKETER</p>
                <a
                  href="www.google.com"
                  className="text-xs underline"
                >
                  Abbott
                </a>
                <p className="font-bold text-sm">SALT COMPOSITION</p>
                <a
                  href="www.google.com"
                  className="text-xs underline"
                >
                  Amoxycillin (500mg) + Clavulanic Acid (125mg)
                </a>
                <p className="font-bold text-sm">STORAGE</p>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-400 underline"
                >
                  <span className="text-orange-400">
                    <span className="text-xl">Cl</span>ick here to view all
                    substitutes
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100">
                <p className="text-sm font-bold">PRODUCT INTRODUCTION</p>
                <br />
                <p className="text-sm text-salt-400">
                  Amoxyclav 625 Tablet is an antibiotic that helps your body
                  fight infections caused by bacteria. It is used to treat
                  infections of the lungs (e.g., pneumonia), ear, nasal sinus,
                  urinary tract, skin, and soft tissue. It will not work for
                  viral infections such as the common cold.
                </p>
                <br />
                <p className="text-sm text-salt-400">
                  Amoxyclav 625 Tablet is best taken with a meal to reduce the
                  chance of a stomach upset. You should take it regularly at
                  evenly spaced intervals as per the schedule prescribed by your
                  doctor. Taking it at the same time daily will help you
                  remember to take it. The dose will depend on what you are
                  being treated for, but you should always complete an entire
                  course of this antibiotic as your doctor prescribes. Please do
                  not stop taking it until you have finished, even when you feel
                  better. If you stop taking it early, some bacteria may
                  survive, and the infection may return or worsen.
                </p>
                <br />
                <p className="text-sm text-salt-400">
                  The most common side effects of Amoxyclav 625 Tablet include
                  vomiting, nausea, and diarrhea. These are usually mild, but
                  let your doctor know if they bother you or will not go away.
                </p>
                <br />
                <p className="text-sm text-salt-400">
                  Before taking it, let your doctor know if you are allergic to
                  any antibiotics or have kidney or liver problems. You should
                  also inform your healthcare team about all other medicines you
                  are taking as they may affect or be affected by Amoxyclav 625
                  Tablet. This medicine is generally considered safe to use
                  during pregnancy and breastfeeding if prescribed by a doctor.
                </p>
              </div>

              <div
                id="reflecting "
                className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100"
              >
                <p className="text-sm font-bold">USES OF AMOXYCLAV TABLET</p>
                <br />
                <p className="text-xs text-black flex ">
                  {' '}
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center w-4 h-4 text-white rounded-full"
                  >
                    <img
                      src="https://i.pravatar.cc/48?img=24"
                      alt="user name"
                      title="user name"
                      width="4"
                      height="4"
                      className="max-w-full rounded-full"
                    />
                  </a>
                  <span href="www.google.com" className="text-orange-500">
                    Treatment of Bacterial infections
                  </span>
                </p>
                <br />
                <p className="text-sm font-bold">
                  BENEFITS OF AMOXYCLAV TABLET
                </p>
                <br />
                <p className="text-sm text-salt-400">
                  In Treatment of Bacterial infections
                </p>
                <br />
                <p className="text-sm text-salt-400">
                  Amoxyclav 625 Tablet contains two medicines, Amoxycillin and
                  Clavulanic Acid, that work together to kill the bacteria that
                  cause infections. Amoxycillin works by stopping the growth of
                  bacteria. Clavulanic Acid reduces resistance and enhances the
                  activity of Amoxycillin against bacteria.
                </p>
                <p className="text-sm text-salt-400">
                  Amoxyclav 625 Tablet can treat many bacterial infections such
                  as ear, sinus, throat, lung, urinary tract, skin, teeth,
                  joints, and bones. It usually makes you feel better within a
                  few days, but you should continue taking it as prescribed even
                  when you feel better to ensure all bacteria are killed and do
                  not become resistant.
                </p>
              </div>

              <div
                id="details"
                className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100"
              >
                <p className="text-sm font-bold">
                  SIDE EFFECTS OF AMOXYCLAV TABLET
                </p>
                <br />
                <p className="text-sm text-salt-400">
                  Amoxyclav 625 Tablet contains two medicines, Amoxycillin and
                  Clavulanic Acid, that work together to kill the bacteria that
                  cause infections. Amoxycillin works by stopping the growth of
                  bacteria. Clavulanic Acid reduces resistance and enhances the
                  activity of Amoxycillin against bacteria.
                </p>
                <br />

                <button className="btn rounded-full" disabled="disabled">
                  Common side effects of Amoxyclav
                </button>
              </div>
              <article className="px-[40px]">
                <section id="howtouse">
                  <h1 className="text-[50px] font-bold">How To Use</h1>
                  <p>
                    {' '}
                    HOW TO USE DARZALEX INJECTION Your doctor or nurse will give
                    you this medicine. Kindly do not self administer. HOW
                    DARZALEX INJECTION WORKS Darzalex 400mg Injection is a
                    monoclonal antibodies, which are designed to recognise and
                    attach to specific proteins on the surface of cancer cells.
                    It shows its action by binding to specific cancer cells in
                    the body and helps your immune system kills cancer.
                  </p>
                </section>
              </article>
            </div>
          </div>
          
          <div className="hidden py-2 xl:col-span-3 lg:col-span-4 md:hidden lg:block">
            <>
              <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 ">
                <div className="p-6 ">
                <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <div className="p-6">5,967 people viewed this recently</div>
      </div>
                  <header className="mb-4 ">
                    <h3 className="text-xl font-medium text-slate-700">
                      Greek breakfast
                    </h3>
                    <p className=" text-slate-400"> $8.99</p>
                  </header>
                  <p>
                    Blueberry Superpower: Vanilla Greek Yogurt + Fresh
                    Blueberries + Granola + Honey.
                  </p>
                </div>

                <div className="flex justify-end p-6 pt-0">
                  <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                    <span>Add to card</span>
                  </button>
                </div>
              </div>
            </>
            <br></br>
            <>
              <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 ">
                <div className="p-6 text-xl font-medium">
                  Earliest delivery by Tomorrow Delivering to: 110020, New Delhi
                  Down Arrow Icon
                </div>
              </div>
            </>
            <br></br>
            <>
              <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 border-dashed border-2 border-indigo-600">
                <div className="p-6">
                 <span className="text-xl font-medium">Earliest delivery by</span>  Tomorrow Delivering to: 110020, New Delhi
                  Down Arrow Icon
                </div>
              </div>
            </>
            <br></br>

            <>
              <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
                <figure className="p-6 pb-0">
                  <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full text-white">
                    <img
                      src="https://i.pravatar.cc/80?img=22"
                      alt="user name"
                      title="user name"
                      width="80"
                      height="80"
                      className="max-w-full rounded-full"
                    />
                  </span>
                </figure>

                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-xl font-medium text-slate-700">
                      Nichole Jones
                    </h3>
                    <p className=" text-slate-400">Senior Designer</p>
                  </header>
                </div>

                <div className="flex justify-end gap-2 p-6 pt-0">
                  <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
                    <span className="order-2">Send message</span>
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-21 desc-21"
                      >
                        <title id="title-21">Icon title</title>
                        <desc id="desc-21">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page
