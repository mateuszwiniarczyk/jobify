import React from 'react';
import Link from 'next/link';

const Offer = ({ id, companyLogo, companyName, location, salary, title, type }) => (
  <Link href={`/offers/${id}`}>
    <a className="flex items-center bg-white rounded-xl shadow p-5 lg:py-8 lg:px-10">
      <picture className="w-16 h-16">
        <img src={companyLogo} alt="logo" className="object-cover rounded-full w-100" />
      </picture>

      <div className="ml-6 flex flex-col lg:flex-row w-full lg:items-center">
        <div>
          <div className="flex items-center mb-3">
            <h2 className="lg:text-2xl leading-none font-medium line-clamp-2 mr-3">{title}</h2>
            <span className="ml-auto lg:ml-6 text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-200 min-w-max capitalize">
              {type}
            </span>
          </div>
          <ul className="hidden lg:flex lg:gap-6">
            <li className="text-blue-600 font-semibold">{companyName}</li>
            <li>{location}</li>
          </ul>
        </div>
        <div className="lg:ml-auto flex flex-row items-center justify-between lg:justify-start lg:flex-col lg:items-end gap-3">
          <span className="inline-block text-blue-600 lg:text-2xl leading-none">${salary}</span>
          <span className="text-sm text-gray-500">3 hours ago</span>
        </div>
      </div>
    </a>
  </Link>
);

export default Offer;
