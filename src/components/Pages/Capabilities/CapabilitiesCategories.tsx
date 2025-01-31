import { useRef } from 'react';
import { assemblyLine, heavyMachinery, manufacturing, smartHouse } from '../../../constants';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const CapabilitiesCategories = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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

    const childs = Array.from(containerRef.current?.children || []);

    childs.forEach((child, index) => {
      tl.from(child, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.inOut',
        delay: index * 0.1   ,
      });
    });
  });

  return (
    <section
      ref={containerRef}
      className={'bg-gradient-radial grid grid-cols-2 md:grid-cols-4 gap-6 ' + styles.padding}
    >
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="bg-vector-star-sharp bg-contain bg-no-repeat bg-center max-w-sm flex justify-center items-center p-6">
          <img src={assemblyLine} alt="assembly Line" className="w-full" />
        </div>
        <h6 className=" font-bebas text-center">5S Production Lines</h6>
      </div>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="bg-vector-star-sharp bg-contain bg-no-repeat bg-center max-w-sm flex justify-center items-center p-6">
          <img src={smartHouse} alt="smart home" className="w-full" />
        </div>{' '}
        <h6 className=" font-bebas text-center">Fully Automatic Machinery</h6>
      </div>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="bg-vector-star-sharp bg-contain bg-no-repeat bg-center max-w-sm flex justify-center items-center p-6">
          <img src={manufacturing} alt="" className="w-full" />
        </div>
        <h6 className=" font-bebas text-center">A to Z Manufacturing </h6>
      </div>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="bg-vector-star-sharp bg-contain bg-no-repeat bg-center max-w-sm flex justify-center items-center p-6">
          <img src={heavyMachinery} alt="heavyMachinery" className="w-full" />
        </div>{' '}
        <h6 className=" font-bebas text-center text-nowrap">ATEQ Leak Testing Machinery</h6>
      </div>
    </section>
  );
};

export default CapabilitiesCategories;
