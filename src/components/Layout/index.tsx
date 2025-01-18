import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen  font-montserrat font-light text-[16px] md:text-[18px] '>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
