import React from 'react'
import CarouselOne from '../carouselOne/page'

const SidebarMenuComponent = () => {
  return (
    <div>
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
          <a href="www.google.com" className="text-xs underline">
            Abbott
          </a>
          <p className="font-bold text-sm">SALT COMPOSITION</p>
          <a href="www.google.com" className="text-xs underline">
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
            Amoxyclav 625 Tablet is an antibiotic that helps your body fight
            infections caused by bacteria. It is used to treat infections of the
            lungs (e.g., pneumonia), ear, nasal sinus, urinary tract, skin, and
            soft tissue. It will not work for viral infections such as the
            common cold.
          </p>
          <br />
          <p className="text-sm text-salt-400">
            Amoxyclav 625 Tablet is best taken with a meal to reduce the chance
            of a stomach upset. You should take it regularly at evenly spaced
            intervals as per the schedule prescribed by your doctor. Taking it
            at the same time daily will help you remember to take it. The dose
            will depend on what you are being treated for, but you should always
            complete an entire couTke of this antibiotic as your doctor
            prescribes. Please do not stop taking it until you have finished,
            even when you feel better. If you stop taking it early, some
            bacteria may survive, and the infection may return or woTken.
          </p>
          <br />
          <p className="text-sm text-salt-400">
            The most common side effects of Amoxyclav 625 Tablet include
            vomiting, nausea, and diarrhea. These are usually mild, but let your
            doctor know if they bother you or will not go away.
          </p>
          <br />
          <p className="text-sm text-salt-400">
            Before taking it, let your doctor know if you are allergic to any
            antibiotics or have kidney or liver problems. You should also inform
            your healthcare team about all other medicines you are taking as
            they may affect or be affected by Amoxyclav 625 Tablet. This
            medicine is generally considered safe to use during pregnancy and
            breastfeeding if prescribed by a doctor.
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
          <p className="text-sm font-bold">BENEFITS OF AMOXYCLAV TABLET</p>
          <br />
          <p className="text-sm text-salt-400">
            In Treatment of Bacterial infections
          </p>
          <br />
          <p className="text-sm text-salt-400">
            Amoxyclav 625 Tablet contains two medicines, Amoxycillin and
            Clavulanic Acid, that work together to kill the bacteria that cause
            infections. Amoxycillin works by stopping the growth of bacteria.
            Clavulanic Acid reduces resistance and enhances the activity of
            Amoxycillin against bacteria.
          </p>
          <p className="text-sm text-salt-400">
            Amoxyclav 625 Tablet can treat many bacterial infections such as
            ear, sinus, throat, lung, urinary tract, skin, teeth, joints, and
            bones. It usually makes you feel better within a few days, but you
            should continue taking it as prescribed even when you feel better to
            ensure all bacteria are killed and do not become resistant.
          </p>
        </div>

        <div
          id="details"
          className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100"
        >
          <p className="text-sm font-bold">SIDE EFFECTS OF AMOXYCLAV TABLET</p>
          <br />
          <p className="text-sm text-salt-400">
            Amoxyclav 625 Tablet contains two medicines, Amoxycillin and
            Clavulanic Acid, that work together to kill the bacteria that cause
            infections. Amoxycillin works by stopping the growth of bacteria.
            Clavulanic Acid reduces resistance and enhances the activity of
            Amoxycillin against bacteria.
          </p>
          <br />

          <button className="btn rounded-full" disabled="disabled">
            Common side effects of Amoxyclav
          </button>
        </div>
        <article className="px-[40px]">
          <section id="howtouse">
            <h1 className="text-sm font-bold">HOW TO USE AVASTIN INJECTION</h1>
            <p className="text-xs text-slate-500">
              {' '}
              Your doctor or nurse will give you this medicine. Kindly do not
              self administer..
            </p>
          </section>
        </article>

        <div
          id="safetyadvice"
          className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100"
        >
          <h1 className="text-sm font-bold">SAFETY ADVICE</h1>
          <div className="text-xs text-slate-500 flex items-center">
            <img
              src="https://onemg.gumlet.io/w_50,h_50/q_auto,f_auto/alcohol.png"
              alt=""
              className="w-12 h-13 mr-1"
            />
            <span className="font-bold text-black">Alcohol</span>
            <span className="rounded-lg border bg-emerald-200 px-1 ml-1">
              CONSULT YOUR DOCTOR
            </span>
          </div>
          <p className="text-xs text-slate-500">
            It is not known whether it is safe to consume alcohol with Avastin
            100mg Injection. Please consult your doctor.
          </p>

          <div className="text-xs text-slate-500 flex items-center">
            <img
              src="https://onemg.gumlet.io/w_50,h_50/q_auto,f_auto/pregnancy.png"
              alt=""
              className="w-12 h-13 mr-1"
            />
            <span className="font-bold text-black">Pregnancy</span>
            <span className="rounded-lg border bg-emerald-200 px-1 ml-1">
              CONSULT YOUR DOCTOR
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Avastin 100mg Injection may be unsafe to use during pregnancy.
            Although there are limited studies in humans, animal studies have
            shown harmful effects on the developing baby. Your doctor will weigh
            the benefits and any potential risks before prescribing it to you.
            Please consult your doctor.
          </p>

          <div className="text-xs text-slate-500 flex items-center">
            <img
              src="https://onemg.gumlet.io/w_50,h_50/q_auto,f_auto/lactation.png"
              alt=""
              className="w-12 h-13 mr-1"
            />
            <span className="font-bold text-black">Breast feeding</span>
            <span className="rounded-lg border bg-emerald-200 px-1 ml-1">
              CONSULT YOUR DOCTOR
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Avastin 100mg Injection is probably unsafe to use during
            breastfeeding. Limited human data suggests that the drug may pass
            into the breastmilk and harm the baby.
          </p>

          <div className="text-xs text-slate-500 flex items-center">
            <img
              src="https://onemg.gumlet.io/w_50,h_50/q_auto,f_auto/driving.png"
              alt=""
              className="w-12 h-13 mr-1"
            />
            <span className="font-bold text-black">Driving</span>
            <span className="rounded-lg border bg-rose-100 px-1 ml-1">
              UNSAFE
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Avastin 100mg Injection may be unsafe to use during pregnancy.
            Although there are limited studies in humans, animal studies have
            shown harmful effects on the developing baby. Your doctor will weigh
            the benefits and any potential risks before prescribing it to you.
            Please consult your doctor. Please consult your doctor.
          </p>

          <div className="text-xs text-slate-500 flex items-center">
            <img
              src="https://onemg.gumlet.io/w_50,h_50/q_auto,f_auto/kidney.png"
              alt=""
              className="w-12 h-13 mr-1"
            />
            <span className="font-bold text-black">Kidney</span>
            <span className="rounded-lg border bg-emerald-200 px-1 ml-1">
              SAFE IF PRESCRIBED
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Avastin 100mg Injection is probably safe to use in patients with
            kidney disease. Limited data available suggests that dose adjustment
            of Avastin 100mg Injection may not be needed in these patients.
            Please consult your doctor.
          </p>

          <div className="text-xs text-slate-500 flex items-center">
            <img
              src="https://onemg.gumlet.io/w_50,h_50/q_auto,f_auto/liver.png"
              alt=""
              className="w-12 h-13 mr-1"
            />
            <span className="font-bold text-black">Liver</span>
            <span className="rounded-lg border bg-emerald-200 px-1 ml-1">
              SAFE IF PRESCRIBED
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Avastin 100mg Injection is probably safe to use in patients with
            liver disease. Limited data available suggests that dose adjustment
            of Avastin 100mg Injection may not be needed in these patients.
            Please consult your doctor.
          </p>
        </div>

        <div
  id="allsubstitutes"
  className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100 flex"
>
  <div className="flex-1">
    <h1 className="text-sm font-bold">QUICK TIPS</h1>
    <div className="text-xs text-slate-500 items-center">
      <div className="mb-2">
        <li>
          Avastin 100mg Injection is an effective, first-line option when used
          together with other medicines for certain types of cancers such as
          colorectal, lung, cervical, and kidney cancers.
        </li>
      </div>
      <div className="mb-2">
        <li>
          Avastin 100mg Injection is given as an infusion. Your doctor or nurse
          will monitor you for signs of an infusion reaction such as high blood
          pressure and trouble breathing.
        </li>
      </div>
      <div className="mb-2">
        <li>
          It can lower your wound healing ability. Inform your doctor that you
          are taking this medication before undergoing any surgical procedure.
        </li>
      </div>
      <div className="mb-2">
        <li>
          It can increase the risk of bleeding. Inform your doctor if you
          notice any unusual bleeding or bleeding that doesn't stop easily.
        </li>
      </div>
      <div>
        <li>
          Your doctor may regularly check your blood pressure and levels of
          protein in your urine while you are on Avastin 100mg Injection.
        </li>
      </div>
    </div>
  </div>

  <div className="flex-1 ml-4">
    <video
      src="https://youtu.be/5wyvUqpZw_c?si=eDyLdMu2ER35_AQJ"
      controls
      className="w-full h-auto"
    />
  </div>
</div>

        
        <div
          id="quicktips"
          className="border-b-2 p-6 dark:bg-gray-800 dark:text-gray-100 text-slate-500 font-bold "
        >
          Patient concerns
       <CarouselOne/>
        </div>
        
      </div>
    </div>
  )
}

export default SidebarMenuComponent
