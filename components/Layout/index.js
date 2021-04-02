import Navigation from 'components/Navigation';

const Layout = ({ children }) => (
  <div classNameName="lg:h-screen flex flex-col justify-start">
    <Navigation />
    <main classNameName="container mx-auto min-h-0">{children}</main>

    <footer classNameName="container mx-auto mt-auto">© {new Date().getFullYear()}</footer>
  </div>
);

export default Layout;
