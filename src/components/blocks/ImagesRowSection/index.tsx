import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const ImagesRowSection = ({
  images,
  
}: {
  images: string[];
}) => {
  const imagesRef = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
        },
        ease: 'power2.inOut',
    });

    const imgs = Array.from(imagesRef.current?.children || []);
    imgs.forEach((img) => {
      tl.fromTo(
        img,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
         x: 0,
          duration: 0.75,
          stagger:0.2
        }
      );
    });
  });
  return (
    <div ref={imagesRef} className={`grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-${images.length>=4?4:images.length} gap-4`}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="image" className="w-full max-w-xl " />
        </div>
      ))}
    </div>
  );
};

export default ImagesRowSection;
