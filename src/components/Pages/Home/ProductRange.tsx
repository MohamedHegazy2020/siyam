import { Radiators } from '../../../constants';
import styles from '../../../utils/styles';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
import { Link } from 'react-router-dom';
import Button from '../../blocks/Buttons';

const ProductRange = () => {
  const carouselItems = [
    {
      image: Radiators[0],
      title: 'charge air coolers',
      desc: 'Charge air coolers are heat exchangers that cool the compressed air from the turbocharger before it enters the engine. They help improve engine efficiency and performance by reducing intake air temperature.',
      url: '/products/charge-air-coolers',
    },
    {
      image: Radiators[1],
      title: 'cooling modules',
      desc: 'Cooling modules are integrated systems that include radiators, fans, and other components designed to efficiently cool the engine and other critical parts of a vehicle. They play a crucial role in maintaining optimal operating temperatures.',
      url: '/products/cooling-modules',
    },
    {
      image: Radiators[2],
      title: 'Condensers',
      desc: 'Condensers are heat exchangers that cool and condense refrigerant gas into a liquid state in air conditioning systems. They help remove heat from the refrigerant, allowing it to cool the cabin air.',
      url: '/products/condensers',
    },
    {
      image: Radiators[3],
      title: 'Radiator',
      desc: 'Radiators are heat exchangers that dissipate heat from the engine coolant to the surrounding air. They help maintain the engine at a safe operating temperature by transferring excess heat away from the engine.',
      url: '/products/radiators',
    },
    {
      image: Radiators[4],
      title: 'Core & spare parts',
      desc: 'Core and spare parts refer to the essential components of cooling systems, including radiators, condensers, and charge air coolers. These parts are crucial for maintaining the efficiency and performance of vehicles.',
      url: '/products/core-spare-parts',
    },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause  ',
      },
    });

    tl.fromTo('.product-item', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, stagger: 0.5 });
  }, []);

  return (
    <section ref={sectionRef} className={'bg-gradient-radial ' + styles.padding}>
      <h2 className="bg-gradient-linear mb-10 text-4xl font-bebas text-center font-bold text-transparent bg-clip-text">
        our products
      </h2>
      <div>
        {carouselItems.map((item, index) => (
          <ImageContentSection padding imageLast={index % 2 === 0} imageAltText={item.title} key={index} image={item.image}>
            <h2 className="text-3xl font-bebas text-secondary">{item.title}</h2>
            <p className="text-base font-semibold text-gray-700">{item.desc}</p>
            <Link to={item.url} className="flex justify-center w-fit">
              <Button color="secondary" size="md" outline rounded="full" className="mt-4">
                Explore
              </Button> 
            </Link>
          </ImageContentSection>
        ))}
      </div>
    </section>  
  );
};

export default ProductRange;
