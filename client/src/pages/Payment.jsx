import React, { useState } from 'react';
import Card from '../components/Card'; // Importing the Card component
import { default_dp } from "../assets"; // Assuming default_dp is the path to your image asset

function Payment() {
  // State variables for profile name and billing address
  const [profileName, setProfileName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [isProfileNameEntered, setIsProfileNameEntered] = useState(false);

  // Function to handle the submission of the profile name
  const handleProfileNameSubmit = () => {
    setIsProfileNameEntered(true);
  };

  // Sample data for the payment page
  const paymentData = [
    {
      title: "Payment Details",
      imgUrl: default_dp, // Example image
      description: "Enter your profile name and billing address to complete the payment process.",
    }
  ];

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex flex-col items-center justify-center">
        <h1 className='font-extrabold text-[#222328] text-[32px]'>
          Payment Details
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentData.map((payment, index) => (
          <Card
            key={index} // Make sure to provide a unique key for each card
            title={payment.title}
            ilink={payment.imgUrl}
            description={payment.description}
            // In this case, link, location, rating, difficulty, and distance props are not used
          />
        ))}
      </div>
      {/* Form for entering profile name and billing address */}
      <div className="mt-8 text-center">
        {!isProfileNameEntered ? (
          <div className="mb-4">
            <label htmlFor="profileName" className="block text-sm font-medium text-gray-700">Enter Profile Name:</label>
            <input
              type="text"
              id="profileName"
              name="profileName"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
            <button onClick={handleProfileNameSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
          </div>
        ) : (
          <div className="flex flex-col items-end">
            <label htmlFor="billingAddress" className="block text-sm font-medium text-gray-700">Enter Billing Address:</label>
            <textarea
              id="billingAddress"
              name="billingAddress"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              rows={4}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  )
}

export default Payment;
