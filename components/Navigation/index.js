import Link from 'next/link';
import ROUTES from 'constants/routes';
import NavList from 'components/NavList';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container flex items-center flex-wrap mx-auto p-3 lg:px-0 lg:py-6">
        <Link href={ROUTES.HOME}>
          <a className="text-blue-500 text-xl font-bold tracking-wide lg:text-3xl mr-auto ">
            Jobify
          </a>
        </Link>

        <NavList />
      </div>
    </nav>
  );
};

export default Navigation;
