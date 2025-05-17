import { useRef } from 'react';
import { factroy400, factroy500, factroy600, factroy700, fan1, fan2 } from '../../../constants';
import styles from '../../../utils/styles';
import ImagesRowSection from '../../blocks/ImagesRowSection';
import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TechincalCollebration = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
      ease: 'power2.inOut',
    });

    const rowItems = Array.from(rowRef.current?.children || []);
    rowItems.forEach((item) => {
      tl.fromTo(
        item,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.2,
        }
      );
    });
  });
  return (
    <section ref={containerRef} className={'bg-accent-900 ' + styles.padding}>
      <div ref={rowRef} className="grid mx-auto max-w-7xl grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-around justify-center md:col-span-2 gap-4 md:px-12">
          <h3 className="text-5xl font-bold text-white font-bebas md:text-8xl">Technical Collaboration</h3>
          <p className="text-white  md:text-2xl">
            Our technical collaboration with our strategic partner Sutton Stromart Canada enhanced our experience and
            supported us in bring a unique mix of world class technological advancements that lives up to our clients
            standards & specifications
          </p>
        </div>
        <div className="w-full">
          <img className="w-full" src={fan2} alt="fan" />
        </div>
        <div className="w-full">
          <img className="w-full" src={fan1} alt="fan" />
        </div>
      </div>
      <ImageContentSection image={factroy400} padding >
        <h2 className="text-4xl font-bold text-white font-bebas md:text-7xl">
          Heavy Duty, Industrial Applications & Genets
        </h2>
        <p className="text-white  md:text-2xl">
          All custom engineered heat transfer products are designed and manufactured in Toronto by Sutton Stromart
        </p>
      </ImageContentSection>

      <ImagesRowSection images={[factroy500, factroy600, factroy700]} />
    </section>
  );
};

export default TechincalCollebration;
