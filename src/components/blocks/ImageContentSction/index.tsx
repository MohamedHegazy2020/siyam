import { ReactNode, useRef } from 'react';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';


export interface ImageContentSectionProps {
  image: string;
  imageLast?: boolean;
  children: ReactNode;
  title: string;
  backgroundClassName?: string;
  introduction?: string;
}

export default function ImageContentSection({
  image,
  children,
  title,
  imageLast,
  backgroundClassName ,
  introduction,
}: ImageContentSectionProps) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(TextPlugin)
  const container = useRef<HTMLDivElement>(null)
  const imageEle = useRef<HTMLDivElement>(null)
  const textEle = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom 80%',
          scrub: true,
        },
      });

      tl.fromTo(
        imageEle.current,
        {
          opacity: 0,
          x: imageLast ? -(window.innerWidth - 100) : window.innerWidth - 20,
          skewX: 10,
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          ease: 'power2.out',
        }
      ).fromTo(
        textEle.current,
        {
          opacity: 0,
          x: imageLast ? window.innerWidth - 20 : -(window.innerWidth - 100),
          skewX: -10,
        },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          stagger: {
            amount: 0.5,
            from: 'start',
            grid: 'auto',
            ease: 'power2.out',
          },
        },
        '<'
      );
      return () => {
        if (container.current) {
          ScrollTrigger.killAll();  
        }
        }
    },
    []
  );
  return (
    <div ref={container}
      className={
        styles.padding + '  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  ' + ( backgroundClassName )
      }
    >
      <div
       ref={imageEle}
        className={`flex  items-center justify-center  order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}
      >
        <img src={image} alt={title} />
      </div>
      <div  ref={textEle} className="flex flex-col gap-4">
        {introduction && (
          <span
           
            className="text-transparent bg-gradient-to-r  from-[0%] to-[25%] from-secondary  to-primary bg-clip-text font-bebas  font-bold"
          >
            {introduction}
          </span>
        )}
        <h2 className="font-bold text-2xl md:text-3xl font-bebas text-primary" >
          {title}
        </h2>
        <div className="font-normal  ">
          {children}
        </div>
      </div>
    </div>
  );
}
