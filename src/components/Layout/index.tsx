import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';


const Layout = () => {


  return (
    <>
      <Navbar />
      <main className="min-h-screen  font-montserrat font-light text-[16px] md:text-[18px] ">
        <Outlet />
       
      </main>
      <Footer />
    </>
  );
};

export default Layout;
