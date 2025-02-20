import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ImagesRowSection = ({ images }: { images: string[] }) => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const imgs = Array.from(imagesRef.current?.children || []);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
      ease: 'power2.inOut',
      delay: 1,
    });

    imgs.forEach((img) => {
      tl.fromTo(
        img,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.5 }
      );
    });
  }, [imagesRef, images]);

  return (
    <div
      ref={imagesRef}
      className={`grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-${
        images.length >= 4 ? 4 : images.length
      } gap-4`}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            loading="lazy"
            src={image}
            alt="image"
            className="w-full max-w-xl"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagesRowSection;

