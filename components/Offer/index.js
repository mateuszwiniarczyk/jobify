import React from 'react';
import Link from 'next/link';
import timeago from 'epoch-timeago';

const Offer = ({ id, companyLogo, companyName, location, salary, title, type, createdAt }) => (
  <Link href={`/offers/${id}`}>
    <a className="flex items-center bg-white rounded-xl shadow p-5 lg:py-8 lg:px-10">
      <img
        src={companyLogo}
        alt={`Logo of ${companyName}`}
        className="object-cover rounded-full w-12 h-12 lg:w-16 lg:h-16 "
      />

      <div className="flex flex-col w-full ml-6 lg:flex-row">
        <div className="lg:mr-12">
          <div className="flex items-center mb-3">
            <h2 className="lg:text-2xl leading-tight font-medium line-clamp-1 mr-6">{title}</h2>
            <span className="ml-auto text-xs font-semibold inline-block py-1 px-2 rounded text-blue-600 bg-blue-100 min-w-max capitalize lg:ml-6">
              {type}
            </span>
          </div>
          <ul className="hidden lg:flex lg:items-center lg:gap-6">
            <li className="text-blue-600 font-semibold">{companyName}</li>
            <li>{location}</li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-between gap-3 lg:ml-auto lg:flex-col lg:items-end">
          <span className="inline-block text-blue-600 leading-none lg:text-2xl">
            ${salary.toLocaleString('pl-PL')}
          </span>
          <span className="text-sm text-gray-500">{timeago(new Date(createdAt))}</span>
        </div>
      </div>
    </a>
  </Link>
);

export default Offer;
