import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navigation />

    <main className="container mx-auto flex-grow flex flex-col px-3 lg:px-0 py-5 lg:py-10">
      {children}
    </main>

    <Footer className="container mx-auto mt-auto">© {new Date().getFullYear()}</Footer>
  </div>
);

export default Layout;
