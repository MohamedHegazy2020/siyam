import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { logo, tabs } from '../../constants';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const Navbar = () => {
  const [active, setActive] = useState('/');
  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setActive(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useGSAP(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.to(nav, {
      y: 0,
      autoAlpha: 1,
      ease: 'power2.inOut',
      paused: true,
    });

    ScrollTrigger.create({
      trigger: nav,
      start: 'top top',
      end: '+=100vh',
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(nav, { y: 0, autoAlpha: 1, backgroundColor: 'white' });
        } else {
          gsap.to(nav, { y: -100, autoAlpha: 0, backgroundColor: 'transparent' });
        }
      },
      onUpdate: (self) => {
        if (self.direction === -1 && !scrolling) {
          gsap.to(nav, { y: -100, autoAlpha: 0, backgroundColor: 'transparent' });
        } else if (self.direction === 1 && !scrolling) {
          gsap.to(nav, { y: 0, autoAlpha: 1, backgroundColor: 'white' });
        }
      },
    });
  }, [scrolling]);

  return (
    <header
      ref={navRef}
      className="fixed w-full py-5 sm:px-10 px-5 flex items-center justify-between z-20"
    >
      <nav className="flex items-center w-full screen-max-width">
        <img src={logo} alt="logo" className="w-[60px] md:w-[80px]" />
        <div className="flex flex-1 justify-center gap-4 max-sm:hidden">
          {tabs.map((nav, i) => (
            <Link
              to={nav.path}
              key={i}
              className={`font-montserrat font-medium text-[16px] leading-[22px] text-black hover:text-primary ${
                active === nav.path && 'text-primary'
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <Icon icon="material-symbols:search-rounded" width={24} height={24} />
          <Icon icon="solar:cart-line-duotone" width="24" height="24" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

