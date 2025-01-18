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
  gsap.registerPlugin(TextPlugin);
  const container = useRef<HTMLDivElement>(null);
  const imageEle = useRef<HTMLDivElement>(null);
  const textEle = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 90%',
        end: 'bottom 50%',
        scrub: true,
        
       
        toggleActions: 'restart pause reset',
      },
      defaults: {
        ease: 'power2.out',
      },
    });

    if (container.current) {
      tl.fromTo(
        container.current,
        { opacity: 0, y: -50, rotation: 0 },
        { opacity: 1, y: 0, rotation: 0, duration: 1.2, ease: 'power2.out' ,stagger: 0.1}
      );
    }

    if (textEle.current) {
      const childrenArray = Array.from(textEle.current.children);

      childrenArray.forEach((child, index) => {
        const direction = index % 2 === 0 ? '<' : '>';
        const grandchildChildrenArray = Array.from(child.children);
        const grandchildDelay = grandchildChildrenArray.length > 0 ? 0.1 : 0;

        tl.fromTo(
          child,
          { opacity: 0, y: 20, x: direction === '<' ? -50 : 50 },
          { opacity: 1, y: 0, x: 0, duration: 1.5, delay: index * 0.2 + grandchildDelay, ease: 'power1.out', stagger: 0.2 },
          `<${index * 0.2}`
        );

        grandchildChildrenArray.forEach((grandchild, grandIndex) => {
          const grandchildDelay = grandIndex * 0.05;
          tl.fromTo(
            grandchild,
            { opacity: 0, y: 10, x: direction === '<' ? -50 : 50 },
            { opacity: 1, y: 0, x: 0, duration: 0.8, delay: grandchildDelay, ease: 'power3.out' },
            `<${grandchildDelay}`
          );
        });
      });
    }

    return () => {
      if (container.current) {
        ScrollTrigger.killAll();
      }
    };
  }, []);
  return (
    <div
      ref={container}
      className={styles.padding + '  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10  ' + backgroundClassName}
    >
      <div
        ref={imageEle}
        className={`flex items-center    order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}
      >
        <img className='w-full' src={image} alt={title} />
      </div>
      <div ref={textEle} className="flex flex-col gap-4">
        {introduction && (
          <span className="text-transparent bg-gradient-to-r  from-[0%] to-[25%] from-secondary  to-primary bg-clip-text font-bebas  font-bold">
            {introduction}
          </span>
        )}
        <h2 className={titleClassName + ' font-bold text-2xl md:text-3xl font-bebas text-primary'}>{title}</h2>
        <div className="font-light  ">{children}</div>
      </div>
    </div>
  );
}
