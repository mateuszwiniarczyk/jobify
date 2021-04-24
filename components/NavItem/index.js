import Link from 'next/link';
import { signOut } from 'next-auth/client';

const NavItem = ({ path, label, isButton }) => (
  <li className="w-full flex lg:w-auto">
    {!isButton ? (
      <Link href={path}>
        <a className={`w-full py-2 lg:w-auto lg:py-0 hover:text-blue-500`}>{label}</a>
      </Link>
    ) : (
      <button
        onClick={signOut}
        className="w-full text-left py-2 focus:outline-none hover:text-blue-500 lg:py-0 lg:w-auto">
        Logout
      </button>
    )}
  </li>
);

export default NavItem;
