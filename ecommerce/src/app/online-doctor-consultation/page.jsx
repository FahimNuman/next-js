
import DoctorConCarousel from '@/components/OnlineDocCarousues/page'
import custom from './custom.module.css';
import React from 'react'

export default function page() {

  return (
    <div className='container-fluid widget-container'>
      <div className="bg-[#fef7ef]">
        <div className="flex items-center mt-5">
          <div>
            <img className="" src="http://onemg.gumlet.io/marketing/5e7341e1-0637-4703-a7dc-aa8ea920769b.png" alt="Care Plan Image" />
          </div>
          <div>
            <div>
              Free consultation and more benefits with Care Plan membership.
            </div>
            <div>
              <button className=" " style={{}}>
                <img src="https://onemg.gumlet.io/marketing/b9af5a3d-cfb3-43c3-a37f-d5b982882a51.svg" className="" alt="Icon" title="textButton" />
                Join now!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-7xl">
        <div class="m-10">
          <div class="flex items-center justify-between">
            <div>
              <div class="container-fluid">
                <div className={`${custom.l1SemiBold} mt-2`}>Online doctor consultation with qualified doctors</div>
                <div className={`${custom.l3Regular} ${custom.textSecondary}`}>Starting at ₹199</div>
                <div className={`flex mt-6 ${custom.PageTitleLanding__flexGap___IOaZ3}`}>
                  <div class="flex">
                    <div class="flex items-center"><img src="https://onemg.gumlet.io/marketing/e7391473-ce45-403b-ae9e-04f25674874c.svg" alt="" title="" width="50px" /></div>
                    <div class="flex items-center ml-2">Talk within 30 min</div>
                  </div>
                  <div class="flex">
                    <div class="flex items-center"><img src="https://onemg.gumlet.io/marketing/7df1fb1e-dc1e-4d1d-9031-bb05955710fa.svg" alt="" title="" width="50px" /></div>
                    <div class="flex items-center ml-2">Free follow up for 3 days</div>
                  </div>
                  <div class="flex">
                    <div class="flex items-center"><img src="https://onemg.gumlet.io/marketing/a420ec3a-01da-40f8-95f2-db07e89c1421.svg" alt="" title="" width="50px" /></div>
                    <div class="flex items-center ml-2">Get a valid prescription</div>
                  </div>
                </div>
                <div class="flex mt-6">
                  <div class="col-3">
                    <button className={custom.PrimaryButton__button___2SpZs}>
                      <span class={` ${custom.bodySemiBold}  ${custom.PrimaryButton__btnText___1hefF} `}>Consult now</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
            <img src="https://onemg.gumlet.io/marketing/793368e4-7232-45b3-9690-2fc81da12287.svg" alt="" title="" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white p-4 shadow-lg rounded-lg">
          <div class="text-3xl font-bold">30L+</div>
          <div class="text-sm">Total Consultations</div>
        </div>
        <div class="bg-white p-4 shadow-lg rounded-lg">
          <div class="text-3xl font-bold">3k+</div>
          <div class="text-sm">Daily Consultations</div>
        </div>
        <div class="bg-white p-4 shadow-lg rounded-lg">
          <div class="text-3xl font-bold">22+</div>
          <div class="text-sm">Specialities</div>
        </div>
      </div>

      <DoctorConCarousel />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className={custom.LandingPage__feature___1ExkC}>
          <div className="flex justify-center ">
            <img style={{ width: '80px' }} src="https://www.1mg.com/images/confidential.svg" alt="100% confidential discussion" />
          </div>
          <div class="font-bold text-center my-6">100% Confidential</div>
          <div className={`${custom.LandingPage__text___1rYkw} text-center`}>All advice & consultations are completely confidential. You can also delete chats whenever you want.</div>
        </div>

        <div className={custom.LandingPage__feature___1ExkC}>
          <div className="flex justify-center ">
            <img style={{ width: '80px' }} src="https://www.1mg.com/images/certified.svg" alt="100% confidential discussion" />
          </div>
          <div class="font-bold text-center my-6">Certified Doctors</div>
          <div className={`${custom.LandingPage__text___1rYkw} text-center`}>All advice & consultations are completely confidential. You can also delete chats whenever you want.</div>
        </div>
        <div className={custom.LandingPage__feature___1ExkC}>
          <div className="flex justify-center ">
            <img style={{ width: '80px' }} src="https://www.1mg.com/images/costEffective.svg" alt="100% confidential discussion" />
          </div>
          <div class="font-bold text-center my-6">Convenience</div>
          <div className={`${custom.LandingPage__text___1rYkw} text-center`}>All advice & consultations are completely confidential. You can also delete chats whenever you want.</div>
        </div>
        <div className={custom.LandingPage__feature___1ExkC}>
          <div className="flex justify-center ">
            <img style={{ width: '80px' }} src="https://www.1mg.com/images/confidential.svg" alt="100% confidential discussion" />
          </div>
          <div class="font-bold text-center my-6">Cost Effective</div>
          <div className={`${custom.LandingPage__text___1rYkw} text-center`}>All advice & consultations are completely confidential. You can also delete chats whenever you want.</div>
        </div>
      </div>

      <div>
        <div className='font-bold text-2xl text-center my-16'>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div class="">
          <div class="text-left text-slate-600 mb-2" >
            <div>When will I get an answer to my query? What happens if I don’t get a response?</div>
          </div>
          <div class="text-left text-slate-300 mb-4" >If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours.
            In case of a paid consult, you will receive a reply within 2-4 business hours.
            However, if you do not get any response within the stipulated time,
            we will refund your money back into your account.
          </div>
          <hr />
        </div>
        <div class="">
          <div class="text-left text-slate-600 mb-2" >
            <div>When will I get an answer to my query? What happens if I don’t get a response?</div>
          </div>
          <div class="text-left text-slate-300 mb-4" >If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours.
            In case of a paid consult, you will receive a reply within 2-4 business hours.
            However, if you do not get any response within the stipulated time,
            we will refund your money back into your account.
          </div>
          <hr />
        </div>
        <div class="">
          <div class="text-left text-slate-600 mb-2" >
            <div>When will I get an answer to my query? What happens if I don’t get a response?</div>
          </div>
          <div class="text-left text-slate-300 mb-4" >If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours.
            In case of a paid consult, you will receive a reply within 2-4 business hours.
            However, if you do not get any response within the stipulated time,
            we will refund your money back into your account.
          </div>
          <hr />
        </div>
        <div class="">
          <div class="text-left text-slate-600 mb-2" >
            <div>When will I get an answer to my query? What happens if I don’t get a response?</div>
          </div>
          <div class="text-left text-slate-300 mb-4" >If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours.
            In case of a paid consult, you will receive a reply within 2-4 business hours.
            However, if you do not get any response within the stipulated time,
            we will refund your money back into your account.
          </div>
        </div>

      </div>

      <div class={custom.LandingPage__join_us_wrapper___2DKaM}>
        <div class={custom.LandingPage__image___1aIIW}><img alt="Online Doctor Consultation Icon" src="https://www.1mg.com/images/oc_doctor.svg" /></div>
        <div class={custom.LandingPage__text___1rYkw}>
          <div class={custom.LandingPage__heading___2FXrb}>Are you a doctor ?</div>
          <div class={custom.LandingPage__desc___uA8nC}>Be a part of our panel of specialists and connect with your patients from anywhere.</div>
          <button className={`${custom.PrimaryButton__button___2SpZs} w-1/2`}>JOIN US</button>
        </div>
      </div>


      <div class={custom.style__top_bar___5ZPPN}>
        <div className={`${custom.style__top_head___2h8g} flex justify-center font-bold`}>
          <h2>Bangladeshi LARGEST HEALTHCARE PLATFORM</h2>
        </div>
        <div class={`${custom.style__flex_box____V1Y1} ${custom.style__stats_bar___w397H}`} >
          <div>
            <div class={custom.style__stats_num___3Ns_4}>260m+</div>
            <div class={custom.style__stats_text___DUvDf}>Visitors</div>
          </div>
          <div>
            <div class={custom.style__stats_num___3Ns_4}>31m+</div>
            <div class={custom.style__stats_text___DUvDf}>Orders Delivered</div>
          </div>
          <div>
            <div class={custom.style__stats_num___3Ns_4}>1800+</div>
            <div class={custom.style__stats_text___DUvDf}>Cities</div>
          </div>
        </div>
        <div class={custom.style__border_btm___1wdot}></div>
        <div class={`${custom.style__flex_box____V1Y1} ${custom.style__down_bar___3FV6g}`} >
          <div class={`${custom.style__free_text___3jZ7n} ${custom.style__f20___2opYM}`}>Get the link to download App</div>
          <div class="style__input-box___7akGm">
            <form className={custom.input_box_style}>
              <input  id="phoneNumber" className="border-none bg-slate-50 p-2" type="tel" placeholder="Enter Phone Number" maxlength="10" autocomplete="off" pattern="[6-9]\d{9}" title="Please enter valid 10 digits" required="" value="" />
              <button type="submit" class={custom.style__next_button___3J4Nx}>
                Send Link
              </button>
            </form>
          </div>
          <div class="style__cap-wrap___38IWm"></div>
        </div>
      </div>


    </div>
  )
}
