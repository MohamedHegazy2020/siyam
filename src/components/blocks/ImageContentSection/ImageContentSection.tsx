import { ReactNode, useRef } from 'react';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';

export interface ImageContentSectionProps {
  image: string;
  imageAltText?: string;
  imageClassName?: string;
  imageLast?: boolean;
  children: ReactNode;
  

  backgroundClassName?: string;
 
  padding?: boolean;
  animationDelay?: number;
}

export default function ImageContentSection({
  image,
  imageAltText = 'Image',

  children,

  imageLast,
  backgroundClassName,

  padding,
  animationDelay = 0,
}: ImageContentSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const childrenRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
      delay: animationDelay,
    });

    tl.fromTo(imageRef.current, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 });
    tl.fromTo(titleRef.current, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 }, '-=0.5');

    tl.fromTo(
      childrenRef.current?.childNodes || [],
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2 },
      '-=0.5'
    );
  }, [children, animationDelay]);

  return (
    <div
      ref={containerRef}
      className={clsx({
        backgroundClassName: `${backgroundClassName} bg-cover bg-center`,
        padding: padding ? styles.padding : '',
      })}
    >
      <div className={'  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-center '}>
        <div className={`flex items-center w-full   order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}>
          <img ref={imageRef} className="w-full max-w-xl" src={image} alt={imageAltText} />
        </div>
        <div ref={childrenRef} className="flex flex-col justify-center gap-4">
          {children}
        </div>
      </div>
    </div>
  );
}
