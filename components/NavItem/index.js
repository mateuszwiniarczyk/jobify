import Link from 'next/link';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

const NavItem = ({ path, label, isButton }) => {
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };
  return (
    <li className="w-full flex lg:w-auto">
      {!isButton ? (
        <Link href={path}>
          <a className={`w-full py-2 lg:w-auto lg:py-0 hover:text-blue-500`}>{label}</a>
        </Link>
      ) : (
        <button
          onClick={handleSignOut}
          className="w-full text-left py-2 focus:outline-none hover:text-blue-500 lg:py-0 lg:w-auto">
          Logout
        </button>
      )}
    </li>
  );
};

export default NavItem;
