import Navigation from 'components/Navigation';

const Layout = ({ children }) => (
  <div>
    <Navigation />
    <main className="container mx-auto">{children}</main>

    <footer className="container mx-auto">© {new Date().getFullYear()}</footer>
  </div>
);

export default Layout;
