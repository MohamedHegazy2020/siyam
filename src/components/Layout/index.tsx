import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';


const Layout = () => {


  return (
    <>
      <Navbar />
      <main className="min-h-screen text-[#2a2a2a] font-montserrat font-normal text-[16px] md:text-[18px] ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
