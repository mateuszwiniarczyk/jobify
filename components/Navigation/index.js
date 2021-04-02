import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex items-center flex-wrap container mx-auto py-3">
        <Link href="/">
          <a className="p-2 mr-4 inline-flex items-center">
            <span className="text-xl text-black font-bold tracking-wide">Jobify</span>
          </a>
        </Link>
        <button
          onClick={toggleMenu}
          className="text-black inline-flex p-3 rounded lg:hidden ml-auto outline-none">
          Menu
        </button>
        <ul
          className={classNames('w-full lg:inline-flex lg:flex-grow lg:w-auto', {
            hidden: !isOpen
          })}>
          <li className="lg:inline-flex lg:ml-auto lg:w-auto w-full flex lg:h-auto">
            <Link href="/">
              <a className="lg:w-auto w-full px-3 py-2">Submit offer</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
