import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { usersIcon } from '../../../assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
export default function AboutHero() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  const container = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);
  const heroSubText = useRef<HTMLDivElement>(null);
  const heroGredientText = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(container.current, {
      opacity: 0,
      duration: 1.2,
      scale: 0.8,
      ease: 'bounce',
    });
    gsap.from(heroText.current, {
      delay: 0.6,
      duration: 2,
      text: 'Syam Industrial Group',
      ease: 'bounce',
    });
    gsap.from(heroSubText.current, {
      delay: 0.5,
      duration: 3,
      text: 'This is the new text',
      ease: 'bounce',
    });
    gsap.from(heroGredientText.current, {
      delay: 1.2,
      duration: 2,
      text: 'This is the new text',
      ease: 'bounce',
    });
  }, []);
  return (
    <div ref={container} className="hero min-h-screen bg-property-1">
      <div className="hero-overlay bg-black  bg-opacity-70"></div>
      <div className="hero-content text-white text-center ">
        <div className="max-w-6xl">
          <h1 ref={heroText} className="mb-5 text-4xl md:text-5xl font-bold">
            Siyam Industrial Group is specialized in{' '}
            <span
              ref={heroGredientText}
              className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text"
            >
              Developing Career Experts
            </span>
          </h1>
          <p ref={heroSubText} className="mb-5">
            core and complete cooling products, radiators, charge air coolers, condensers, and cooling modules for all
            types of applications. For over 30 years, we have distinguished ourselves by providing high quality
            products, with superior services, delivered on-time and at a competitive price.
          </p>
          <button className="btn text-white    bg-gradient-to-r from-[#0099F7] to-[#12F1E4] ">
            <Icon icon="lets-icons:video-fill" width="24" height="24" />
            Get Started
          </button>
          <div className="flex items-center justify-center mt-5">
            <img src={usersIcon} alt="user icons" className="" />
            <p className="text-white ml-2 text-2xl font-bold">+100k Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
