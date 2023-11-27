// import React, { useState } from 'react';

// const MultiStepForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     companyName: '',
//     address: '',
//     additionalUsers: [{}],
//   });
//   const [currentStep, setCurrentStep] = useState(1);

//   const handleNext = () => {
//     setCurrentStep(currentStep + 1);
//   };

//   const handlePrevious = () => {
//     setCurrentStep(currentStep - 1);
//   };

//   const handleSubmit = () => {
//     console.log(formData); // Log the form data to the console
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
//       <div className="flex mb-4">
//         <div
//           className={`w-1/3 text-center cursor-pointer ${
//             currentStep === 1 ? "text-blue-500" : "text-gray-500"
//           }`}
//           onClick={() => setCurrentStep(1)}
//         >
//           Profile Info
//         </div>
//         <div
//           className={`w-1/3 text-center cursor-pointer ${
//             currentStep === 2 ? "text-blue-500" : "text-gray-500"
//           }`}
//           onClick={() => setCurrentStep(2)}
//         >
//           Business Info
//         </div>
//         <div
//           className={`w-1/3 text-center cursor-pointer ${
//             currentStep === 3 ? "text-blue-500" : "text-gray-500"
//           }`}
//           onClick={() => setCurrentStep(3)}
//         >
//           Additional Users
//         </div>
//       </div>
//       {currentStep === 1 && (
//         <div>
//           {/* Step 1: Profile Info */}
//           <input
//             type="text"
//             value={formData.name}
//             onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//             placeholder="Name"
//             className="mb-4 p-2 border rounded w-full"
//           />
//           {/* Other profile info fields */}
//           <button
//             onClick={handleNext}
//             className="bg-blue-500 text-white px-4 py-2 rounded"
//           >
//             Next Step
//           </button>
//         </div>
//       )}
//       {currentStep === 2 && (
//         <div>
//           {/* Step 2: Business Information */}
//           <input
//             type="text"
//             value={formData.companyName}
//             onChange={(e) =>
//               setFormData({ ...formData, companyName: e.target.value })
//             }
//             placeholder="Company Name"
//             className="mb-4 p-2 border rounded w-full"
//           />
//           {/* Other business info fields */}
//           <div className="flex justify-between">
//             <button
//               onClick={handlePrevious}
//               className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded"
//             >
//               Previous Step
//             </button>
//             <button
//               onClick={handleNext}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Next Step
//             </button>
//           </div>
//         </div>
//       )}
//       {currentStep === 3 && (
//         <div>
//           {/* Step 3: Additional Users */}
//           {formData.additionalUsers.map((user, index) => (
//             <div key={index}>
//               <input
//                 type="text"
//                 value={user.name || ""}
//                 onChange={(e) => {
//                   const newUsers = [...formData.additionalUsers];
//                   newUsers[index] = { ...user, name: e.target.value };
//                   setFormData({ ...formData, additionalUsers: newUsers });
//                 }}
//                 placeholder="Name"
//                 className="mb-4 p-2 border rounded w-full"
//               />
//               <input
//                 type="email"
//                 value={user.email || ""}
//                 onChange={(e) => {
//                   const newUsers = [...formData.additionalUsers];
//                   newUsers[index] = { ...user, email: e.target.value };
//                   setFormData({ ...formData, additionalUsers: newUsers });
//                 }}
//                 placeholder="Email"
//                 className="mb-4 p-2 border rounded w-full"
//               />
//             </div>
//           ))}
//           <div className="flex justify-between">
//             <button
//               onClick={handlePrevious}
//               className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded"
//             >
//               Previous Step
//             </button>
//             <button
//               onClick={handleSubmit}
//               className="bg-blue-500 text-white px-4 py-2 rounded"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiStepForm;

import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, handleNext }) => (
  <div>
    {/* Step 1: Profile Info */}
    <input
      type="text"
      value={formData.name}
      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      placeholder="Name"
      className="mb-4 p-2 border rounded w-full"
    />
    {/* Other profile info fields */}
    <button
      onClick={handleNext}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
      Next Step
    </button>
  </div>
);

const Step2 = ({ formData, setFormData, handlePrevious, handleNext }) => (
  <div>
    {/* Step 2: Business Information */}
    <input
      type="text"
      value={formData.companyName}
      onChange={(e) =>
        setFormData({ ...formData, companyName: e.target.value })
      }
      placeholder="Company Name"
      className="mb-4 p-2 border rounded w-full"
    />
    {/* Other business info fields */}
    <div className="flex justify-between">
      <button
        onClick={handlePrevious}
        className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded"
      >
        Previous Step
      </button>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Next Step
      </button>
    </div>
  </div>
);

const Step3 = ({ formData, setFormData, handlePrevious, handleSubmit }) => (
  <div>
    {/* Step 3: Additional Users */}
    {formData.additionalUsers.map((user, index) => (
      <div key={index}>
        <input
          type="text"
          value={user.name || ''}
          onChange={(e) => {
            const newUsers = [...formData.additionalUsers];
            newUsers[index] = { ...user, name: e.target.value };
            setFormData({ ...formData, additionalUsers: newUsers });
          }}
          placeholder="Name"
          className="mb-4 p-2 border rounded w-full"
        />
        <input
          type="email"
          value={user.email || ''}
          onChange={(e) => {
            const newUsers = [...formData.additionalUsers];
            newUsers[index] = { ...user, email: e.target.value };
            setFormData({ ...formData, additionalUsers: newUsers });
          }}
          placeholder="Email"
          className="mb-4 p-2 border rounded w-full"
        />
      </div>
    ))}
    <div className="flex justify-between">
      <button
        onClick={handlePrevious}
        className="mr-4 bg-gray-300 text-gray-700 px-4 py-2 rounded"
      >
        Previous Step
      </button>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  </div>
);

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    address: '',
    additionalUsers: [{}],
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log(formData); // Log the form data to the console
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
      <div className="flex mb-4">
        <div
          className={`w-1/3 text-center cursor-pointer ${
            currentStep === 1 ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setCurrentStep(1)}
        >
          Profile Info
        </div>
        <div
          className={`w-1/3 text-center cursor-pointer ${
            currentStep === 2 ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setCurrentStep(2)}
        >
          Business Info
        </div>
        <div
          className={`w-1/3 text-center cursor-pointer ${
            currentStep === 3 ? 'text-blue-500' : 'text-gray-500'
          }`}
          onClick={() => setCurrentStep(3)}
        >
          Additional Users
        </div>
      </div>

      {currentStep === 1 && (
        <Step1 formData={formData} setFormData={setFormData} handleNext={handleNext} />
      )}
      {currentStep === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
      {currentStep === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          handlePrevious={handlePrevious}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default MultiStepForm;
