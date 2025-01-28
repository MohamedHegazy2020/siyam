import styles from '../../../utils/styles';
import { dermatomeIcon, developmentIcon, documentIcon, medicalReportIcon, shippingIcon, wernchIcon } from '../../../constants';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProductionSets = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const setsContainerRef = useRef<HTMLDivElement>(null); 

useGSAP(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: 'top 90%',
      end: 'bottom 10%',
      toggleActions: 'restart pause restart pause',
    }
  })
  const sets = Array.from(setsContainerRef.current?.children || []);
  sets.forEach((set) => {
    tl.fromTo(
      set,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.25
      }
      
  )
  })

})

  return (
    <section ref={containerRef} className={'bg-section-200 ' + styles.padding}>
      <div ref={setsContainerRef} className="grid grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-white border-l-2 relative py-2 border-dashed px-6">
          <div className="flex justify-center items-center h-8 w-8 bg-white rounded-full border border-secondary border-dashed absolute  left-0 top-0 transform -translate-x-1/2">
            <img src={developmentIcon} alt="ico" />
          </div>
          <h4 className="font-bebas text-2xl pb-3  ">Siyam Development</h4>
          <p className="text-sm/7 font-light">
            Our OEM division, Siyam radiator OEM division guarantees rapid, competent, and efficient development of both
            prototypes and complete solutions. The extensive know-how and R&D, combined with advanced production
            facilities, ensure our customers obtain the optimum solution at all times.
          </p>
        </div>
        <div className="text-white border-l-2 relative py-2 border-dashed px-6">  
          <div className="flex justify-center items-center h-8 w-8 bg-white rounded-full border border-secondary border-dashed absolute left-0 top-0 transform -translate-x-1/2">
            <img src={shippingIcon} alt="ico" />
          </div>
          <h4 className="font-bebas text-2xl pb-3  ">Siyam Material</h4>
          <p className="text-sm/7 font-light">
            To ensure high-quality products, we established an efficient supply chain with the best raw material used by
            our suppliers. Our suppliers – primarily in Europe and North America –are selected carefully to meet the
            Original Equipment Manufacturer's specifications.
          </p>
        </div>
        <div className="text-white border-l-2 relative py-2 border-dashed px-6">
          <div className="flex justify-center items-center h-8 w-8 bg-white rounded-full border border-secondary border-dashed absolute left-0 top-0 transform -translate-x-1/2">
            <img src={dermatomeIcon} alt="ico" />
          </div>
          <h4 className="font-bebas text-2xl pb-3  ">Siyam Dedication</h4>
          <p className="text-sm/7 font-light">
            Our products are our income, not only from high-quality raw materials but also a world-class production and
            testing facilities and a team of dedicated employees with technical skills accumulated for over 30 years of
            producing cooling products.
          </p>
        </div>
        <div className="text-white border-l-2 relative py-2 border-dashed px-6">
          <div className="flex justify-center items-center h-8 w-8 bg-white rounded-full border border-secondary border-dashed absolute left-0 top-0 transform -translate-x-1/2">
            <img src={medicalReportIcon} alt="ico" />
          </div>
          <h4 className="font-bebas text-2xl pb-3  ">Siyam Differentiation</h4>
          <p className="text-sm/7 font-light">
            We develop our own hard tool sets at a competitive price within four to six weeks. This enables us to
            produce a customizable product that satisfies customer requirements.
          </p>
        </div>

        <div className="text-white border-l-2 relative py-2 border-dashed px-6">
          <div className="flex justify-center items-center h-8 w-8 bg-white rounded-full border border-secondary border-dashed absolute left-0 top-0 transform -translate-x-1/2">
            <img src={wernchIcon} alt="ico" />
          </div>
          <h4 className="font-bebas text-2xl pb-3  ">Siyam Tooling</h4>
          <p className="text-sm/7 font-light">
            We develop our own hard tool sets at a competitive price within four to six weeks. This enables us to
            produce a customizable product that satisfies customer requirements.
          </p>
        </div>

        <div className="text-white border-l-2 relative py-2 border-dashed px-6">
          <div className="flex justify-center items-center h-8 w-8 bg-white rounded-full border border-secondary border-dashed absolute left-0 top-0 transform -translate-x-1/2">
            <img src={documentIcon } alt="ico" />
          </div>
          <h4 className="font-bebas text-2xl pb-3  ">Siyam Presence</h4>
          <p className="text-sm/7 font-light">
            Our products are exported to more than 26 countries worldwide, with warehouses and full distribution
            capabilities in North America and the Middle East.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductionSets;
