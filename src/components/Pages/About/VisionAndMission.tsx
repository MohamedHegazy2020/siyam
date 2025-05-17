import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { group1, group2 } from '../../../constants';
import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import styles from '../../../utils/styles';
export default function VisionAndMission() {
  const tailingDivRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tailingDivRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
    });
  
    const childs = Array.from(tailingDivRef.current?.children || []);
    childs.forEach((child) => {
      tl.from(child, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.inOut',
        stagger: 0.5,
      });
    });
  });

  return (
    <section>
      <div className="bg-section-200 bg-cover">
        <ImageContentSection image={group1} padding imageLast>
          <h2 className="text-5xl font-bebas text-white">Our Mission</h2>
          <p className="text-white font-normal font-montserrat text-base">
            Our Mission is to add value to our customers, suppliers and employees by providing superior products and
            services on time and at a competitive price, whilst practicing honesty and fairness throughout our
            corporation.
          </p>
        </ImageContentSection>
        <ImageContentSection image={group2} padding>
          <h2 className="text-5xl font-bebas text-white">Our Vision</h2>
          <p className="text-white font-normal font-montserrat text-base">
            Our vision is to become a leading developer and manufacturer of OE, customized, and aftermarket, core and
            complete radiators.
          </p>
        </ImageContentSection>
      </div>
      <div className={"bg-section-100 bg-cover" + styles.padding}>
        <h2 className='text-5xl font-bebas  text-center mb-4 text-black'>Our Values</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 ">
          <div className="flex justify-center items-start">
            <div className="p-4 w-96  bg-vector-star bg-contain bg-no-repeat bg-center flex items-center justify-center">
              <Icon icon="solar:hand-stars-linear" className="text-white" width="48" height="48" />
            </div>
            <div className="px-4 flex flex-col gap-2">
              <h5 className="font-bold text-xl">Customer Satisfaction</h5>
              <p className="text-sm lg:text-lg font-normal">
                We believe that the improvement in the industry starts with developing the skills of the employees.
                Therefore, along developing products and technology, we continuously invest in developing the skills of
                our employees.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start ">
            <div className="p-4 w-96  bg-vector-star bg-contain bg-no-repeat bg-center flex items-center justify-center">
              <Icon icon="stash:people-group" className="text-white" width="48" height="48" />
            </div>
            <div className="px-4 flex flex-col gap-2">
              <h5 className="font-bold text-xl">Developing People</h5>
              <p className="text-sm lg:text-lg font-normal">
                We believe that the improvement in the industry starts with developing the skills of the employees.
                Therefore, along developing products and technology, we continuously invest in developing the skills of
                our employees.
              </p>
            </div>
          </div>{' '}
          <div className="flex justify-center items-start ">
            <div className="p-4 w-96  bg-vector-star bg-contain bg-no-repeat bg-center flex items-center justify-center">
              <Icon icon="lets-icons:lamp-light" className="text-white" width="48" height="48" />
            </div>
            <div className="px-4 flex flex-col gap-2">
              <h5 className="font-bold text-xl">Continous Improvement</h5>
              <p className="text-sm lg:text-lg font-normal">
                We believe that the improvement in the industry starts with developing the skills of the employees.
                Therefore, along developing products and technology, we continuously invest in developing the skills of
                our employees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
