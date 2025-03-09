import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import {  logoFull, tabs } from '../../constants';
import { Link, useLocation } from 'react-router-dom';
import useScrollProgress from '../../hooks/useScrollProgress';
import {  useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Navbar = () => {
  const complition = useScrollProgress()
  const scrollIndicatorRef = useRef(null)
  const location = useLocation();
  const tl = useRef<gsap.core.Timeline | null>(null)
  console.log(location.pathname)
  
  useGSAP(() => {
   
      tl.current = gsap.timeline()
        .to(scrollIndicatorRef.current, {
          // x: () => (100 - complition) + '%',
          width: () => (complition) + '%',
          duration: 1,
          ease: 'power2.inOut',
        })
  
    
  }, [complition])

  return (
    <div className={`${location.pathname === "/contact" || location.pathname === "/products"?"sticky":'fixed'} top-0 w-full z-[100]  `}>
      <div className="navbar bg-base-100 backdrop-blur-md bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icon icon="line-md:menu" width="24" height="24" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content top-0 left-0 transition translate-x-1/2 bg-base-100 z-[200] rounded-box  mt-3 w-52 p-2 shadow"
            >
              {tabs.map((tab, index) => (
                <li key={index}>
                  <Link to={tab.path}>{tab.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="navbar-brand lg:w-36 w-20 hover:scale-105 transition-transform duration-300">
            <img src={logoFull} alt="logo" className="w-full" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {tabs.map((tab, index) => (
              <li key={index}>
                <Link to={tab.path}>{tab.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn btn-ghost">
            <Icon icon="line-md:search" width="24" height="24" />
          </Link>
          <Link to="/login" className="btn btn-ghost">
            <Icon icon="solar:cart-linear" width="24" height="24" />
          </Link>
        </div>
      </div>
      <span ref={scrollIndicatorRef} className="bg-primary absolute h-1 w-full bottom-0" />
    </div>
  );
};

export default Navbar;
