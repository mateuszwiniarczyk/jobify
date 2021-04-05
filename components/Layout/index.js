import Navigation from 'components/Navigation';

const Layout = ({ children }) => (
  <div className="flex flex-col justify-start">
    <Navigation />
    <main className="container mx-auto">{children}</main>

    <footer className="container mx-auto mt-auto">© {new Date().getFullYear()}</footer>
  </div>
);

export default Layout;
