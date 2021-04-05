import Navigation from 'components/Navigation';

const Layout = ({ children }) => (
  <div className="flex flex-col justify-start">
    <Navigation />

    <main className="container mx-auto px-3 lg:px-0 py-5 lg:py-10">{children}</main>

    <footer className="container mx-auto mt-auto">© {new Date().getFullYear()}</footer>
  </div>
);

export default Layout;
