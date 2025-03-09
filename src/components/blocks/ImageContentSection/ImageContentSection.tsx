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
  padding?:boolean
}

export default function ImageContentSection({
  image,
  children,
  title,
  imageLast,
  backgroundClassName,
  titleClassName,
  introduction,
  padding,
}: ImageContentSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elements = useRef<Array<HTMLElement | HTMLImageElement>>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
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

    elements.current.forEach((element, index) => {

      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        `<${index * 0.2}`
      );
    });
  }, [children]);
  return (
    <div ref={containerRef} className={backgroundClassName + ` bg-cover ${styles.paddingY} ${padding ? styles.paddingX : ''}`}>
      <div className={'  max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-center '}>
        <div className={`flex items-center w-full   order-last  ${imageLast ? 'md:order-last' : 'md:order-first'} `}>
          <img className="w-full max-w-xl" ref={(el) => elements.current.push(el as HTMLImageElement)} src={image} alt={title} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          {introduction && (
            <span
              ref={(el) => elements.current.push(el as HTMLParagraphElement)}
              className="text-transparent bg-gradient-to-r  from-[0%] to-[25%] from-secondary  to-primary bg-clip-text font-bebas  font-bold"
            >
              {introduction}
            </span>
          )}
          <h2 ref={(el) => elements.current.push(el as HTMLHeadingElement)} className={titleClassName + ' font-bold text-2xl md:text-3xl font-bebas text-primary'}>
            {title}
          </h2>
          <div ref={(el) => elements.current.push(el as HTMLDivElement)} className="font-light  ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

