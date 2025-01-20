import { useRef } from 'react';
import { Radiators } from '../../../constants';
import styles from '../../../utils/styles';
import CardTilt from '../../blocks/CardTilt';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

const ProductRange = () => {
  const carouselItems = [
    {
      image: Radiators[0],
      title: 'charge air coolers',
    },
    {
      image: Radiators[1],
      title: 'cooling modules',
    },
    {
      image: Radiators[2],
      title: 'Condensers',
    },
    {
      image: Radiators[3],
      title: 'Radiator',
    },
    {
      image: Radiators[4],
      title: 'Core & spare parts',
    },
  ];


  const titleRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);

gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(titleRef.current, {
      opacity: 0,
      duration: 1.2,
      y: -100,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: cardContainerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.from(cardContainerRef.current, {
      opacity: 0,
      duration: 1.2,
      y: 100,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: cardContainerRef.current,
        start: 'top 90%',
        end: 'bottom 20%',
        toggleActions: 'play reverse play reverse',
      } 
    });
  });

  return (
    <section className={'bg-gradient-radial ' + styles.padding}>
      <h2 ref={titleRef} className="bg-gradient-linear text-2xl font-bebas text-center font-bold text-transparent bg-clip-text">
        product range
      </h2>
      <div ref={cardContainerRef} className="relative mt-5 grid grid-cols-2 md:grid-cols-5 gap-4">
        {carouselItems.map((item, index) => (
          <div className="h-full " key={index}>
            <CardTilt key={index}>
              <div className="w-full h-full flex flex-wrap justify-center  border  rounded-lg p-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full drop-shadow transition-shadow shadow-blue-800"
                />
                <h4 className="w-full self-end text-center font-bebas ">{item.title}</h4>
                {/* <p className='w-full self-end text-center text-xs' >High intensity</p> */}
              </div>
            </CardTilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
