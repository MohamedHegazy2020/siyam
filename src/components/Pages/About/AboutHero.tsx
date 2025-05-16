import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { usersIcon } from '../../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { ScrollTrigger, TextPlugin } from 'gsap/all';
import PrimaryGradientBtn from '../../blocks/Buttons';
export default function AboutHero() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin);
  const container = useRef<HTMLDivElement>(null);
  const heroText = useRef<HTMLDivElement>(null);
  const heroSubText = useRef<HTMLDivElement>(null);
  const heroGredientText = useRef<HTMLDivElement>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  const heroBtn = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = ['Developing Career Experts', 'Talent customized Experts', 'Talent Career aftermarket'];
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
    });

    tl.fromTo(
      heroText.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      heroSubText.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      heroBtn.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      userIconRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    words.forEach((word, index) => {
      tl.fromTo(
        heroGredientText.current,
        {
          text: {
            value: '',
            newClass: 'bg-gradient-linear bg-clip-text text-transparent',
          },
        },
        {
          text: {
            value: word,
            newClass: 'bg-gradient-linear bg-clip-text text-transparent',
          },
          duration: 3,
          ease: 'linear',
          repeat: -1,
          repeatDelay: 1,
        },
        index * 3 // Delay each word by 3 seconds
      );
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
              className="text-transparent block bg-gradient-to-r my-2 from-secondary to-primary bg-clip-text"
            >
              Developing Career Experts
            </span>
          </h1>
          <p ref={heroSubText} className="mb-5">
            core and complete cooling products, radiators, charge air coolers, condensers, and cooling modules for all
            types of applications. For over 30 years, we have distinguished ourselves by providing high quality
            products, with superior services, delivered on-time and at a competitive price.
          </p>
          <div ref={heroBtn}>
            <PrimaryGradientBtn rounded="rounded-full">
              <Icon icon="lets-icons:video-fill" width="24" height="24" />
              Get Started
            </PrimaryGradientBtn>
          </div>
          <div ref={userIconRef} className="flex items-center justify-center mt-5">
            <img src={usersIcon} alt="user icons" className="" />
            <p className="text-white ml-2 text-2xl font-bold">+100k Users</p>
          </div>
        </div>
      </div>
    </div>
  );
}
