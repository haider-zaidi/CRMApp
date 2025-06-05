import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="bg-[#fef9f6] min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-16 text-gray-900">

      {/* Left Side */}
      <div className="lg:w-1/2 w-full mb-12 lg:mb-0 text-center lg:text-left">
        <span className="text-md md:text-lg font-semibold px-4 py-2 bg-orange-200 text-orange-700 rounded-full shadow-sm inline-block mb-6 tracking-wide">
          🚀 CRMApp
        </span>

        <h1 className="font-classy text-[2.5rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4rem] leading-tight tracking-tight text-gray-900 mb-6 transition-all duration-300">
          <span className="block">Powerful CRM Software</span>
          <span className="block">Built for Growing Teams</span>
        </h1>



        <p className="text-lg text-gray-700 mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
          CRMApp helps you organize, track, and build better relationships with leads and customers.
          It's completely free and perfect for teams of any size. Automate campaigns, manage customer
          data, and scale your business — all in one place.
        </p><br/>

        <Link
          to="/signin"
          className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3 rounded-lg shadow-lg transition-all duration-200"
        >
          Get Started for Free
        </Link>
      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src="https://www.hubspot.com/hs-fs/hubfs/crm-free-hero-asset-winter-25@2x.webp?width=1120&height=918&name=crm-free-hero-asset-winter-25@2x.webp"
          alt="CRM Dashboard Preview"
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default Landing;
