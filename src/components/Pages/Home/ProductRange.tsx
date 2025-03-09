import { Radiators } from '../../../constants';
import styles from '../../../utils/styles';
import { Model3DCanvas } from '../../canvas/Model3D';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Tilt from 'react-parallax-tilt';

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
      <h2 className="bg-gradient-linear mb-10 text-2xl font-bebas text-center font-bold text-transparent bg-clip-text">
        product range
      </h2>

      <div className="relative mt-5 grid grid-cols-2 md:grid-cols-5 gap-4 lg:px-20 mx-auto transition-all">
        {carouselItems.map((item, index) => (
          <Tilt
            key={index}
            tiltReverse
            scale={1.05}
            className=" product-item w-full h-full card shadow-2xl flex flex-col items-center justify-between p-4"
          >
            <LazyLoadImage
              src={item.image}
              alt={item.title}
              effect="blur"
              className="w-full transition-shadow shadow-blue-800 flex-1 object-contain"
            />
            <div className="w-full flex flex-col items-center justify-center gap-2 self-end">
              <div className="w-full self-end h-5 flex justify-center items-center bg-gradient-radial-100 rounded-[50%] backdrop-blur-4xl" />
              <h4 className="w-full self-end text-center font-bebas text-sm lg:text-lg">{item.title}</h4>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="h-full product-item py-2">
          <Model3DCanvas path="./GLB/PT-011/PT-011.glb" />
        </div>
        <div className="h-full product-item py-2">
          <Model3DCanvas path="./GLB/IC-052/IC-052.glb" />
        </div>
        <div className="h-full product-item py-2">
          <Model3DCanvas path="./GLB/12364/12364.glb" />
        </div>
      </div>
    </section>
  );
};

export default ProductRange;
