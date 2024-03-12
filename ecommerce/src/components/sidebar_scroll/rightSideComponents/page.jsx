'use client'
import React from 'react'

const RightSideComponents = () => {
  const updateSummaryText = (text) => {
    document.getElementById('dropdown-summary').textContent = text
  }

  return (
    <div>
      <>
        <div className="overflow-hidden rounded-lg bg-white text-slate-500 shadow-md shadow-slate-200 ">
          <div className="bg-teal-100 sm:p-3 text-sm flex items-center">
            <img
              src="/allmedicinproductdetails/shape.png"
              alt=""
              className="mr-1"
            />
            <span className="text-sm">5,967 people viewed this recently</span>
          </div>

          <div className="p-6 ">
            <header className="mb-4 ">
              <p className="text-sm">
                {' '}
                MRP{' '}
                <span className=" line-through dark:text-gray-600">
                  27768
                </span>{' '}
              </p>
              <h3 className="text-xl font-medium font-bold text-black flex items-center">
                টা 1000
              </h3>
            </header>
            <p>Inclusive of all taxes</p>
            <details id="dropdown" className="dropdown grid-rows-2 ">
              <summary id="dropdown-summary" className="m-1 border rounded ">
                0 Vial
              </summary>
              <p className="bg-teal-100">1.0 Injection in 1 vial</p>
              <ul className="p-1 shadow menu dropdown-content z-[1] bg-base-100 rounded w-32">
                <li>
                  <a
                    onClick={() => updateSummaryText('Item 1')}
                    className="text-xs px-2 py-1"
                  >
                    1 vial
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => updateSummaryText('Item 2')}
                    className="text-xs px-2 py-1"
                  >
                    2 vials
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => updateSummaryText('Item 3')}
                    className="text-xs px-2 py-1"
                  >
                    3 vials
                  </a>
                </li>
              </ul>
            </details>
          </div>

          <div className="flex justify-end p-6 pt-0">
            <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cuTkor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Add to card</span>
            </button>
          </div>
          <div className="flex justify-end p-6 pt-0 text-sm text-slate-500">
            Online payment only
          </div>
          <div className="flex justify-end p-6 pt-0 text-sm text-slate-500">
            Not returnable <span className="text-orange-400">Read policy</span>
          </div>
        </div>
      </>
      <br></br>
      <>
        <div className="overflow-hidden bg-white rounded-lg shadow-md text-slate-500 shadow-slate-200 ">
          <div className="p-6 text-xl  font-bold text-slate-600 ">
            Earliest delivery by{' '}
            <span className="text-green-400">Tomorrow</span>
            <span className="text-sm font-bold text-black">
              {' '}
              Delivering to:
            </span>
            <span className="text-sm text-slate-500 shadow-slate-200">
              110010, New Fortis{' '}
            </span>{' '}
            <span>
              <button
                className=""
                onClick={() =>
                  document.getElementById('my_modal_3').showModal()
                }
              >
                {' '}
                <img
                  alt="Down Arrow Icon"
                  src="https://onemg.gumlet.io/jj74lyp3teqhlxoo1qkz.svg"
                />
              </button>
            </span>
          </div>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* Close button */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="font-bold text-lg">Choose delivery location</h3>

              <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex justify-between p-4">
                  <div className="flex space-x-4">
                    {/* Input field and button */}
                    <div className="col-span-full sm:col-span-3 flex items-center">
                      <input
                        id="fiTktname"
                        type="text"
                        placeholder="Enter Pincode"
                        className="w-full rounded-md border border-slate-300 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-400 dark:border-gray-700 dark:text-gray-900 bg-white px-4 py-2 mr-2"
                      />
                      <button className="bg-green-400 text-white px-3 py-2 rounded-md focus:outline-none">
                        CHECK
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="/allmedicinproductdetails/a8qedeetavlucpi0c9tv.webp"
                    alt=""
                    className="h-6 w-6 mr-1"
                  />
                  <span className="font-bold text-xs">
                    Use my current location
                  </span>
                </div>

                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                  <p>
                   <img src="/allmedicinproductdetails/v1hnwuh4ofamf5t9gr7m.webp" alt="" />
                  </p>
                  <p className="text-center text-black text-xl font-bold">
                    Sign in to view saved addresses
                  </p>
                  <p className="text-sm">
                    Saved addresses provide a more accurate estimate of this
                    product’s arrival{' '}
                  </p>
                  <button className="btn btn-outline btn-success text-green-300 btn-wide btn-sm px-2 items-center">
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </>
      <br></br>

      <>
        <section className="text-black">
          <div className="overflow-hidden bg-white rounded shadow-md text-black shadow-slate-200 border-dashed border-2 border-indigo-950">
            <div className="space-y-4">
              <details className="w-full border rounded-lg text-xs">
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-400 text-xs font-medium">
                  <span className="font-bold">Amazon Pay Later:</span> Pay with
                  Amazon Pay Later on Tata 1mg for Tk. 499 and more and earn
                  cashback up to Tk. 300 with minimum cashback of Tk. 15. Offer
                  ends 31st March 24.
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-xs">
                  <img
                    src="https://onemg.gumlet.io/vibatg4xwiuep6bhonzs.svg"
                    alt=""
                  />{' '}
                  <span className="font-bold">
                    Get 10% instant discount with IDFC First Bank Credit and
                    Debit Cards:
                  </span>{' '}
                  Get 10% instant discount (up to টা300) on medicines and health
                  products on payment using IDLC CITY Bank Credit and Debit
                  Cards. Minimum cart value to avail the offer is টা1999..
                </p>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-xs">
                  <img
                    src="https://onemg.gumlet.io/vibatg4xwiuep6bhonzs.svg"
                    alt=""
                  />{' '}
                  <span className="font-bold">Airtel Payments Bank:</span> Pay
                  with Airtel Payments Bank and get 10% cashback up to টা200
                  cashback on a minimum transaction of ₹1000. Valid only for
                  first-time users of Airtel Payments Bank wallet..
                </p>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-xs">
                  <img
                    src="https://onemg.gumlet.io/vibatg4xwiuep6bhonzs.svg"
                    alt=""
                  />{' '}
                  <span className="font-bold">CredPay UPI: Get up to Rs.</span>{' '}
                  250 cashback on paying via CRED UPI. Minimum cart value to
                  avail the offer is Tk. 900..
                </p>
              </details>
            </div>
          </div>
        </section>
      </>

      <br></br>

      <>
        <div className="overflow-hidden rounded bg-white text-center text-slate-500 shadow-md shadow-slate-200">
          <figure className="p-6 pb-0">
            <div className="flex items-center -mx-4 space-x-2   sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-violet-400 dark:text-gray-50"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 dark:border-gray-700 dark:text-gray-400"
              ></a>
            </div>
          </figure>

          <div className="p-6">
            <header className="mb-4">
              <p className="text-slate-400">Question 1</p>
              <p className="text-sm font-medium text-slate-600">
                What are you using this medicine for?
              </p>
            </header>
          </div>

          <div className="flex justify-end gap-2 p-6 pt-0">
            <button className="inline-flex h-10 flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded bg-emerald-50 px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cuTkor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-100 disabled:text-emerald-400 disabled:shadow-none">
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
  )
}

export default RightSideComponents
