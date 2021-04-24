import { useState } from 'react';
import { useSession } from 'next-auth/client';
import classNames from 'classnames';
import navLinks from 'data/navigation';
import NavItem from 'components/NavItem';

const NavList = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [session, loading] = useSession();

  const renderNavItems = (link) => {
    switch (link.visible) {
      case 'always':
        return <NavItem {...link} key={link.label} />;
      case 'logged_out':
        if (!session && !loading) return <NavItem {...link} key={link.label} />;
        break;

      case 'logged_in':
        if (session) return <NavItem {...link} key={link.label} />;
        break;

      case 'admin':
        if (session && session.user.role === 'admin') return <NavItem {...link} key={link.label} />;
        break;

      default:
        return 'Not proper case';
    }
  };

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        className="py-2 px-3 rounded outline-none bg-gray-100 lg:hidden">
        Menu
      </button>

      <ul
        className={classNames(
          'flex flex-col gap-3 w-full py-2 lg:flex lg:flex-row lg:gap-6 lg:w-auto lg:py-0',
          {
            hidden: !isNavOpen
          }
        )}>
        {navLinks.map((link) => {
          return renderNavItems(link);
        })}
      </ul>
    </>
  );
};

export default NavList;
