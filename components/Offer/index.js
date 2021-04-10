import React from 'react';
import Link from 'next/link';

const Offer = () => (
  <Link href="/offer">
    <a className="flex items-center bg-white rounded-xl shadow p-5 lg:py-8 lg:px-10">
      <picture className="w-12 h-12">
        <img
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="logo"
          className="object-cover"
        />
      </picture>

      <div className="ml-6 flex flex-col lg:flex-row w-full lg:items-center">
        <div>
          <div className="flex items-center mb-3">
            <h2 className="lg:text-2xl leading-none font-medium line-clamp-2 mr-3">
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
        <div className="lg:ml-auto flex flex-row items-center justify-between lg:justify-start lg:flex-col lg:items-end gap-3">
          <span className="inline-block text-blue-600 lg:text-2xl leading-none">$66,000</span>
          <span className="text-sm text-gray-500">3 hours ago</span>
        </div>
      </div>
    </a>
  </Link>
);

export default Offer;
