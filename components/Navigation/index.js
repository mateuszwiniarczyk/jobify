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
      <div className="container flex items-center flex-wrap mx-auto p-3 lg:px-0 lg:py-6">
        <Link href="/">
          <a className="text-xl font-bold tracking-wide mr-6 lg:text-2xl">Jobify</a>
        </Link>
        <button
          onClick={toggleMenu}
          className="py-2 px-3 text-black rounded ml-auto outline-none bg-gray-100 lg:hidden">
          Menu
        </button>
        <ul
          className={classNames('w-full lg:inline-flex lg:flex-grow lg:w-auto', {
            hidden: !isOpen
          })}>
          <li className="w-full flex lg:inline-flex lg:ml-auto lg:w-auto">
            <Link href="/">
              <a className="w-full py-2 lg:w-auto lg:py-0">Submit offer</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
