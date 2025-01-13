import { useEffect, useState } from 'react';
import { logo } from '../../assets';
import styles from '../../utils/styles';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { tabs } from './tabs';

function Navbar ()  {
  const [activeTab, setActiveTab] = useState<string>('/');
 
  
useEffect(() => {
  const path = window.location.pathname;
  setActiveTab(path);
}, [])

  
  return (
    <>
      <div className={`navbar  bg-white/60 backdrop-blur-md  ${styles.paddingX}   `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Icon icon="mingcute:menu-fill" width="24" height="24" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
             
            >
              {tabs.map((tab) => (
                <li key={tab.name}>
                  <Link
                    to={tab.path}
                    className={`link  link-hover ${activeTab === tab.path ? 'text-primary' : ''}`}
                    onClick={() => setActiveTab(tab.path)}
                  >
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            <img src={logo} alt="logo" className="w-24" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1">
            {tabs.map((tab) => (
              <li key={tab.name}>
                <Link
                  to={tab.path}
                  className={`link  link-hover ${activeTab === tab.path ? 'text-primary' : ''}`}
                  onClick={() => setActiveTab(tab.path)}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex gap-2 ">
          <Link to="/contact">
            <Icon icon="mingcute:search-line" width="24" height="24" />
          </Link>

          <Link to="/contact">
            <Icon icon="solar:cart-linear" width="24" height="24" />{' '}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
