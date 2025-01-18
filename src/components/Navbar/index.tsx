import { useEffect, useState } from 'react';
import { logo } from '../../assets';
import styles from '../../utils/styles';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import { tabs } from './tabs';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
  const [activeTab, setActiveTab] = useState<string>('/');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    setActiveTab(path);
  }, []);

  useGSAP(() => {
    const timeline = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.5,
        ease: 'power2.out',
      },
    });

    timeline.fromTo(
      '.navbar-center ul li',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2 }
    );

    timeline.fromTo(
      '.navbar-end a',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 }
    );

    timeline.fromTo(
      '.dropdown-content li',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.2 }
    );

    timeline.play().then(() => setIsAnimating(false));
  }, [isAnimating]);

  const handleTabClick = (path: string) => {
    setIsAnimating(true);
    setActiveTab(path);
  };

  return (
    <div className={"navbar bg-base-100 "+styles.paddingX}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {tabs.map((tab) => (
              <li key={tab.path}>
                <Link to={tab.path} className={activeTab === tab.path ? 'active' : ''} onClick={() => handleTabClick(tab.path)}>
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className=" text-xl"><img  className='w-full' src={logo} alt="logo" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {tabs.map((tab) => (
            <li key={tab.path}>
              <Link to={tab.path} className={activeTab === tab.path ? 'active' : ''} onClick={() => handleTabClick(tab.path)}>
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default Navbar;

