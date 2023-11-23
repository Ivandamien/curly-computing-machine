import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const isLastStep = step === 3;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div className="flex w-full">
            <div
              className={`w-1/3 text-center ${
                step >= 1
                  ? step >= 2
                    ? "text-blue-500 bg-black"
                    : "text-blue-500 bg-black rounded-r-xl"
                  : "text-gray-500"
              }`}
            >
              Step 1
            </div>
            <div
              className={`w-1/3 text-center ${
                step >= 2
                  ? step >= 3
                    ? "text-blue-500 bg-black"
                    : "text-blue-500 bg-black rounded-r-xl"
                  : "text-gray-500"
              }`}
            >
              Step 2
            </div>
            <div
              className={`w-1/3 text-center ${
                step >= 3
                  ? "text-blue-500 bg-black rounded-r-xl"
                  : "text-gray-500"
              }`}
            >
              Step 3
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
            <h2 className="text-center text-2xl font-bold">Your Profile</h2>
            <p className="text-center mb-4">
              Please fill in your profile information
            </p>
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
          <div>{/* ... (content for step 2) ... */}</div>
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
            {/* ... (content for step 3) ... */}
            {isLastStep && (
              <button className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
                Submit
              </button>
            )}
          </div>
        </Transition>
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <a href="#" onClick={prevStep}>
              &lt; Back to Login
            </a>
          )}
          {!isLastStep && <button onClick={nextStep}>Next Step </button>}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
