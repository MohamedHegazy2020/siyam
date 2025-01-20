import { ReactNode, useRef } from 'react';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export interface ImageContentSectionProps {
  image: string;
  imageLast?: boolean;
  children: ReactNode;
  title: string;
  titleClassName?: string;
  backgroundClassName?: string;
  introduction?: string;
}

export default function ImageContentSection({
  image,
  children,
  title,
  imageLast,
  backgroundClassName,
  titleClassName,
  introduction,
}: ImageContentSectionProps) {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement>(null);
  const imageEle = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollTriggerConfig = {
      start: 'top 90%',
      end: 'bottom 20%',
      toggleActions: 'play reverse play reverse',
    };

    gsap.from(container.current, {
      opacity: 0,
      duration: 1.2,
      y: 100,
      backfaceVisibility: 'hidden',
      backgroundPosition: '20% 20%',
      ease: 'power2.out',
      scrollTrigger: {
        ...scrollTriggerConfig,
        trigger: container.current,
      },
    });

    gsap.from(imageEle.current, {
      opacity: 0,
      scale: 0.5,
      duration: 2,
      x: 100,
      delay: 0.5,
     
      ease: 'power2.out',
      scrollTrigger: {
        ...scrollTriggerConfig,
        trigger: imageEle.current,
      },
    });

    gsap.from([titleRef.current, introductionRef.current, childrenRef.current], {
      opacity: 0,
      duration: 2,
      delay: 0.5,
      x: -100,
      y: 100,
      stagger: 0.75,
      ease: 'power2.out',
      scrollTrigger: {
        ...scrollTriggerConfig,
        trigger: titleRef.current,
        scroller: container.current,
      },
    });
  });
console.log(titleRef.current);

  return (
    <div className={backgroundClassName + ' ' + styles.padding}>
      <div ref={container} className={'  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-center '}>
        <div
          ref={imageEle}
          className={`flex items-center max-w-md   order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}
        >
          <img className="w-full" src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {introduction && (
            <span
              ref={introductionRef}
              className="text-transparent bg-gradient-to-r  from-[0%] to-[25%] from-secondary  to-primary bg-clip-text font-bebas  font-bold"
            >
              {introduction}
            </span>
          )}
          <h2 ref={titleRef} className={titleClassName + ' font-bold text-2xl md:text-3xl font-bebas text-primary'}>
            {title}
          </h2>
          <div ref={childrenRef} className="font-light  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
