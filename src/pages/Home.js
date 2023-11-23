import React, { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import Profile from '../components/Profile';
import { PiNumberCircleOneFill, PiNumberCircleThreeFill, PiNumberCircleTwoFill } from "react-icons/pi";
import { Transition } from "@headlessui/react";
const Home = () => {
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep(step + 1);
      };
    
      const prevStep = () => {
        setStep(step - 1);
      };
    
      const isLastStep = step === 3;
  return (
      <div className='box'>
          <div className="head">
              <h2 className="logo">Co Logo</h2>
              <p className="title">Create an Account</p>
              <p className="contact">Contact Us</p>
          </div>
          {/* <Profile/> */}
          <div className=" w-full  bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex w-full bg-[#c5c6ca] rounded-t-xl">
            <div
              className={`w-1/3 text-center flex items-center justify-center text-xl p-2 rounded-tl-xl ${
                step >= 1
                  ? step >= 2
                    ? "text-white bg-[#475ED9]"
                    : "text-white bg-[#475ED9] rounded-r-3xl"
                  : "text-gray-500"
              }`}
            >
            <PiNumberCircleOneFill  className='mr-3' size={32} />
              Your Profile
            </div>
            <div
              className={`w-1/3 text-center flex items-center justify-center text-xl p-2 ${
                step >= 2
                  ? step >= 3
                    ? "text-white bg-[#475ED9]"
                    : "text-white bg-[#475ED9] rounded-r-3xl"
                  : "text-gray-500"
              }`}
                      >
            <PiNumberCircleTwoFill  className='mr-3' size={32} />
              Business Information
            </div>
            <div
              className={`w-1/3 text-center flex items-center justify-center text-xl p-2 ${
                step >= 3
                  ? "text-white bg-[#475ED9] rounded-tr-xl"
                  : "text-gray-500"
              }`}
             >
            <PiNumberCircleThreeFill  className='mr-3' size={32} />
              Additional User
            </div>
          </div>
        </div>
        <Transition
          show={step === 1}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <div className="mb-4">
            <p className="text-center text-gray-500">
              Step 1
            </p>
            <h2 className="text-center text-2xl font-bold">Your Profile</h2>
            <p className="text-center  text-gray-500">
              Please fill in your profile information
            </p>
                
            </div>
            {/* ... (input fields for step 1) ... */}
          </div>
        </Transition>
        <Transition
          show={step === 2}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <div className="mb-4">
                
          <p className="text-center text-gray-500">
              Step 2
            </p>
            <h2 className="text-center text-2xl font-bold">Business Information</h2>
            <p className="text-center  text-gray-500">
              Please enter information about your company
            </p>
            </div>
            {/* ... (content for step 2) ... */}
          </div>
        </Transition>
        <Transition
          show={step === 3}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div>
            <div className="mb-4">
          <p className="text-center text-gray-500">
              Step 3
            </p>
            <h2 className="text-center text-2xl font-bold">Additional Users</h2>
            <p className="text-center  text-gray-500">
              Please fill in any additional users
            </p>
                
            </div>
            {/* ... (content for step 3) ... */}
            {isLastStep && (
              <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
                Submit
              </button>
            )}
          </div>
        </Transition>
        {/* <div className="flex justify-between mt-8">
          {step > 1 && (
            <a href="#" onClick={prevStep}>
              &lt; Back to Login
            </a>
          )}
          {!isLastStep && <button onClick={nextStep}>Next Step </button>}
        </div> */}
      </div>
          {/* <Profile/> */}

          <div className="bottom">
              <div className="login">
                  {
                      step >= 1 && (
                          <a href="#" className='flex items-center justify-center' onClick={prevStep}> <BsChevronLeft className="chevron" /> Back To Login</a>
                   )
                  }
              </div>
              <div className="next">
                  {
                      !isLastStep &&
                  <button onClick={nextStep}>Next Step  <BsChevronRight  className="chevron"/></button>
                  }
              </div>
          </div>
    </div>
  )
}

export default Home