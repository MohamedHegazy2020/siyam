import { Radiators } from '../../../constants';
import styles from '../../../utils/styles';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';

const ProductRange = () => {
  const carouselItems = [
    { image: Radiators[0], title: 'charge air coolers' },
    { image: Radiators[1], title: 'cooling modules' },
    { image: Radiators[2], title: 'Condensers' },
    { image: Radiators[3], title: 'Radiator' },
    { image: Radiators[4], title: 'Core & spare parts' },
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
          <ImageContentSection imageLast={index % 2 === 0} imageAltText={item.title} key={index} image={item.image}>
            <h2 className="text-3xl font-bebas text-secondary">{item.title}</h2>
          </ImageContentSection>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
