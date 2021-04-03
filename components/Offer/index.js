import React from 'react';

const Offer = () => (
  <div className="flex items-center bg-white rounded-xl py-8 px-5 lg:px-10 shadow mb-6">
    <picture className="w-12 h-12">
      <img
        src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
        alt="logo"
        className="object-cover"
      />
    </picture>

    <div className="ml-6 flex flex-col lg:flex-row lg:items-center w-full">
      <div>
        <div className="flex items-center mb-3">
          <h2 className="text-xl lg:text-2xl leading-none font-medium line-clamp-2">
            Fullstack .NET Developer
          </h2>
          <span className="ml-auto lg:ml-6 text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 min-w-max">
            Full time
          </span>
        </div>
        <ul className="hidden lg:flex lg:gap-6">
          <li className="text-blue-600 font-semibold">Facebook</li>
          <li>Warsaw</li>
        </ul>
      </div>
      <div className="lg:ml-auto flex flex-row items-center lg:flex-col lg:items-end gap-3">
        <span className="inline-block text-blue-600 text-xl lg:text-2xl leading-none">$66,000</span>
        <span>3 hours ago</span>
      </div>
    </div>
  </div>
);

export default Offer;
