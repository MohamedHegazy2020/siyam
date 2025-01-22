import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { logo, tabs } from '../../constants';
import { Link } from 'react-router-dom';


const Navbar = () => {
 
  




  return (
    <nav className="fixed w-full z-[100]">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icon icon="line-md:menu" width="24" height="24" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {tabs.map((tab, index) => (
                <li key={index}>
                  <Link to={tab.path}>{tab.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="navbar-brand lg:w-24 w-20 hover:scale-105 transition-transform duration-300">
            <img src={logo} alt="logo" className="w-full" />
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
      <div className="h-2 w-full bg-neutral justify-center flex">
        <span  className='bg-primary w-2 '></span>
      </div>
    </nav>
  );
};

export default Navbar;
