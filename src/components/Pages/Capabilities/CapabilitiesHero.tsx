import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';
import Button from '../../blocks/Buttons';

const CapabilitiesHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const HeroBtn = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(TextPlugin);
    const tl = gsap.timeline({
      ease: 'back.out(1.7)',
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',

        toggleActions: 'restart pause restart pause',
      },
    });

    tl.from(
      titleRef.current,
      {
        text: {
          value: '',
          newClass: 'bg-gradient-linear bg-clip-text text-transparent',
          delimiter: '',
        },
        duration: 2,
        ease: 'linear',
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      },
      '-=0.75'
    );

    tl.fromTo(
      subTitleRef.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      '+=0.75'
    );

    tl.fromTo(
      HeroBtn.current,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      },
      '+=0.75'
    );
  });

  return (
    <div ref={containerRef} className="hero min-h-screen bg-capabilities-hero bg-cover bg-center">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 ref={titleRef} className="mb-5 text-5xl font-bold  font-bebas">
            Quality and testing laboratory
          </h1>
          <p ref={subTitleRef} className="mb-5 text-white">
            All custom engineered heat transfer products are designed and manufactured in Toronto by Sutton Stromart
          </p>
          <div ref={HeroBtn}>
            <Button className="btn btn-primary">Expolre</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesHero;
