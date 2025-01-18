import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { logo_1 } from '../../assets';
import styles from '../../utils/styles';
import { Link } from 'react-router-dom';
import { tabs } from '../Navbar/tabs';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const footerChildren = footerRef.current?.children;
      if (!footerChildren) return;

      const footerChildrenArray = Array.from(footerChildren);
      footerChildrenArray.forEach((child) => {
        const childChildren = child.children;
        const childChildrenArray = Array.from(childChildren);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'restart pause reset',
          },
        });

        tl.fromTo(
          childChildrenArray,
          {
            opacity: 0,
            y: -50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.4,
          }
        );
      });
    },
    [footerRef]
  );

  return (
    <footer
      ref={footerRef}
      className={
        styles.padding +
        ' bg-accent bg-footer-texture   footer md:grid-cols-5  font-montserrat text-base-100  font-normal p-10'
      }
    >
      <aside className="md:col-span-2 px-5">
        <img src={logo_1} alt="logo" />
        <p>
          is specialized in developing and manufacturing OE, customized, and aftermarket, core and complete cooling
          products, radiators, charge air coolers, condensers, and cooling modules for all types of applications.
        </p>
        <div className="grid grid-flow-col gap-4 mt-6">
          <a className="link link-hover " href="#">
            <Icon icon="mingcute:facebook-fill" width="24" height="24" />
          </a>
          <a className="link link-hover " href="#">
            <Icon icon="mingcute:instagram-fill" width="24" height="24" />{' '}
          </a>
          <a className="link link-hover " href="#">
            <Icon icon="mingcute:youtube-fill" width="24" height="24" />
          </a>
          <a className="link link-hover " href="#">
            <Icon icon="mingcute:tiktok-fill" width="24" height="24" />
          </a>
          <a className="link link-hover " href="#">
            <Icon icon="prime:twitter" width="24" height="24" />
          </a>
        </div>
      </aside>
      <div className="md:col-span-2">
        <h6 className="footer-title text-secondary font-bebas ">Stay in touch with us</h6>

        <p>Join our newsletter to stay up to date with the latest news and updates.</p>
        <div className="form-control w-full max-w-xs  ">
          <label className="label text-secondary ">Email</label>
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

        <ul className="grid  grid-cols-1   gap-4">
          {tabs.map((tab, i) => (
            <li key={i} className="flex flex-nowrap items-center link link-hover gap-2 ">
              <Icon icon="weui:arrow-outlined" width="12" height="24" />
              <Link to={tab.path} key={tab.name}>
                {tab.name}
              </Link>{' '}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}

