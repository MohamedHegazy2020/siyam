import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ImagesRowSection = ({ images }: { images: string[] }) => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imagesRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
      ease: 'power2.inOut',
      delay: 1,
    });
    if (imagesRef.current?.childNodes.length) {
      tl.fromTo(
        imagesRef.current.childNodes,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2 }
      );
    }
  }, [imagesRef, images]);

  return (
    <div
      ref={imagesRef}
      className={`grid grid-cols-2 max-w-7xl mx-auto md:grid-cols-${images.length >= 4 ? 4 : images.length} gap-4`}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img decoding="async" loading="lazy" src={image} alt="image" className="w-full max-w-xl" />
        </div>
      ))}
    </div>
  );
};

export default ImagesRowSection;
