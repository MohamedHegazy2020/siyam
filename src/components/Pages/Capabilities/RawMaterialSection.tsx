import { useRef } from 'react';
import { rawMaterial1, rawMaterial2 } from '../../../constants';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const RawMaterialSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
      ease: 'power2.inOut',
    });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

    const images = Array.from(imageContainerRef.current?.children || []);
    images.forEach((image) => {
      tl.fromTo(
        image,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
        }
      );
    });

    tl.fromTo(
      paragraphRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
  });

  return (
    <>
      <section ref={containerRef} className={'bg-section-100 ' + styles.padding}>
        <h2 ref={titleRef} className="font-bebas text-primary text-xl md:text-3xl text-center">
          Raw Material
        </h2>
        <div ref={imageContainerRef} className="grid grid-cols-1 my-10 md:grid-cols-2 gap-4">
          <div>
            <img src={rawMaterial1} alt="raw material" className="w-full" />
          </div>
          <div>
            <img src={rawMaterial2} alt="raw material" className="w-full" />
          </div>
        </div>
        <p ref={paragraphRef} className="text-center">
          Our Quality Policy ensures that the best raw material is used. We evaluate suppliers and ensure they meet the
          international standards as well as our industrial group technical specifications
        </p>
      </section>
    </>
  );
};

export default RawMaterialSection;
