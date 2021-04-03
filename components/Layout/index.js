import Navigation from 'components/Navigation';

const Layout = ({ children }) => (
  <div className="lg:h-screen flex flex-col justify-start">
    <Navigation />
    <main className="container mx-auto min-h-0">{children}</main>

    <footer className="container mx-auto mt-auto">© {new Date().getFullYear()}</footer>
  </div>
);

export default Layout;
