import { ReactNode, useRef } from 'react';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
    });

    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      },
      '-=0.5'
    );
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      '-=0.5'
    );

    tl.fromTo(
      introRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      '-=0.5'
    );
    tl.fromTo(
      childrenRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: {
          each: 0.2,
        },
      },
      '-=0.5'
    );
  });

  return (
    <div ref={containerRef} className={backgroundClassName + ' ' + styles.padding}>
      <div className={'  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-center '}>
        <div className={`flex items-center w-full   order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}>
          <img className="w-full max-w-xl" ref={imageRef} src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {introduction && (
            <span
              ref={introRef}
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
