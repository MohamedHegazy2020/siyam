import { useState } from 'react';
import { logo } from '../../assets';
import styles from '../../utils/styles';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState<string>('');
  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Products', path: '/products' },
    { name: 'Capabilities', path: '/capabilities' },
  ];

  return (
    <nav className={`${styles.padding} w-full z-20  bg-white bg-opacity-30 backdrop-blur-sm`}>
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" className=" object-contain w-[120px]" />
        </Link>

        <div className="flex justify-center ">
          <ul
            className="flex items-center space-x-6 text-lg list-none
            text-gray-800"
          >
            {tabs.map((tab) => (
              <li
                key={tab.name}
                className={
                  activeTab === tab.path
                    ? 'text-primary cursor-default'
                    : 'hover:text-primary transition-colors duration-300 cursor-pointer'
                }
                onClick={() => setActiveTab(tab.path)}
              >
                <Link to={tab.path}>{tab.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link className="hover:text-primary transition-colors duration-300" to="/contact">
            <Icon icon="material-symbols-light:search" width="32" height="32" />
          </Link>
          <Link className="hover:text-primary transition-colors duration-300" to="/contact">
            <Icon icon="solar:cart-broken" width="32" height="32" />{' '}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
