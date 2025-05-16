import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from '../../utils/styles';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { logoFull, socialMediaIcons, tabs } from '../../constants';
import StarsCanvas from '../canvas/Stars';

export default function Footer() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
    });

    tl.fromTo(
      '.footer',
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      }
    );
    tl.fromTo(
      '.footer-logo ,.footer-logo ~ p, [data-gsap="icon"] ',
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1, 
      },
      '-=0.25'
    );

    tl.fromTo(
      '.footer-title, .footer-title ~ p, .footer-title ~ .form-control >* , .footer-title ~ ul > li',
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1,
      },
      '-=1.25'
    );

    tl.fromTo(
      '[data-gsap="copyright"], [data-gsap="copyright"] > *',
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.1,
      },
      '-=0.75'
    );
  });

  return (
    <footer
      className={
        styles.padding +
        ' bg-accent font-light bg-opacity-90 grid-flow-row  footer md:grid-cols-5 grid-cols-1  font-montserrat text-base-100 relative grid-rows-auto p-10'
      }
    >
      <aside className="md:col-span-2 px-5">
        <img src={logoFull} alt="logo" className="w-1/2 footer-logo" />
        <p>
          is specialized in developing and manufacturing OE, customized, and aftermarket, core and complete cooling
          products, radiators, charge air coolers, condensers, and cooling modules for all types of applications.
        </p>
        <div className="grid grid-flow-col gap-4 mt-6">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-500 hover:scale-150 hover:text-primary"
            >
              <Icon icon={icon.icon} className="text-2xl" data-gsap="icon" />
            </a>
          ))}
        </div>
      </aside>
      <div className="md:col-span-2">
        <h6 className="footer-title text-secondary font-bebas">Stay in touch with us</h6>
        <p>Join our newsletter to stay up to date with the latest news and updates.</p>
        <div className="form-control w-full max-w-xs  ">
          <label className="label text-secondary font-bold font-bebas ">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered border-primary bg-transparent w-full max-w-xs"
          />
          <button className="btn btn-primary rounded-full capitalize text-base-100 mt-4">read more</button>
        </div>
      </div>
      <nav>
        <h6 className="footer-title font-bebas text-secondary capitalize  ">Explore</h6>
        <ul className="grid  grid-cols-1  gap-4">
          {tabs.map((tab, index) => (
            <li key={index} className='flex items-center gap-2'>
              <Icon icon="material-symbols:arrow-right" className="" />
              
              <Link to={tab.path} className="link link-hover capitalize">
                {tab.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t font-bold pt-4 mt-4 w-full md:col-span-5 flex justify-between" data-gsap="copyright">
        <p>
          Copyright &copy; <span className="text-secondary">2024</span>
        </p>
        <p>Siyam Industrial Group. All rights reserved.</p>
      </div>
      <StarsCanvas />
    </footer>
  );
}
