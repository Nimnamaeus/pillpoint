import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';

const SignUpRole = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState('');
  const [pharmacyName, setPharmacyName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex h-screen">
      {/* Left side - Role selection form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <img className="h-12 w-auto mb-6" src="/images/PillLogo.svg" alt="PillPoint Logo" />
          <h2 className="text-3xl font-extrabold text-pill-purple mb-4">Role Preference</h2>
          <p className="text-sm text-gray-600 mb-8">Select your role in the website</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setSelectedRole('buyer')}
                className={`w-full flex items-center justify-between px-4 py-3 border ${
                  selectedRole === 'buyer' 
                    ? 'border-pill-blue bg-blue-50' 
                    : 'border-gray-300'
                } rounded-md shadow-sm hover:border-pill-blue focus:outline-none transition-colors`}
              >
                <div className="flex items-center">
                  <FaUser className="h-5 w-5 mr-3 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">A Buyer</span>
                </div>
                <div className={`h-4 w-4 rounded-full border ${
                  selectedRole === 'buyer'
                    ? 'border-pill-blue bg-pill-blue'
                    : 'border-gray-300'
                }`}>
                  {selectedRole === 'buyer' && (
                    <div className="h-2 w-2 m-1 rounded-full bg-white" />
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedRole('seller')}
                className={`w-full flex items-center justify-between px-4 py-3 border ${
                  selectedRole === 'seller'
                    ? 'border-pill-blue bg-blue-50'
                    : 'border-gray-300'
                } rounded-md shadow-sm hover:border-pill-blue focus:outline-none transition-colors`}
              >
                <div className="flex items-center">
                  <MdLocalPharmacy className="h-5 w-5 mr-3 text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">A Seller</span>
                </div>
                <div className={`h-4 w-4 rounded-full border ${
                  selectedRole === 'seller'
                    ? 'border-pill-blue bg-pill-blue'
                    : 'border-gray-300'
                }`}>
                  {selectedRole === 'seller' && (
                    <div className="h-2 w-2 m-1 rounded-full bg-white" />
                  )}
                </div>
              </button>
            </div>

            {selectedRole === 'seller' && (
              <div className="mt-4">
                <label htmlFor="pharmacy" className="block text-sm font-medium text-gray-700">
                  Pharmacy Name
                </label>
                <input
                  id="pharmacy"
                  type="text"
                  value={pharmacyName}
                  onChange={(e) => setPharmacyName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pill-blue focus:border-pill-blue sm:text-sm"
                  placeholder="Enter your pharmacy name"
                  required
                />
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={!selectedRole || (selectedRole === 'seller' && !pharmacyName)}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pill-blue hover:bg-pill-teal focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pill-blue disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Create an Account
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="text-sm text-gray-600 hover:text-pill-blue"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Background image */}
      <div className="hidden md:block w-1/2 bg-img-signup">
        <div className="flex h-full items-center justify-center text-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-white text-shadow-lg shadow-black">Join PillPoint!</h1>
            <p className="text-xl text-white text-shadow shadow-black">Your Health, Your Way</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpRole;