import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from '../../../utils/styles';
import videoSrc from '../../../assets/videos/28032023 Website 01 (1).mp4';
import { socialMediaIcons } from '../../../constants';
import Button from '../../blocks/Buttons';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const gradientDevRef = useRef<HTMLDivElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: 'power2.out' },
    });

    tl.fromTo(gradientDevRef.current, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1 });

    tl.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1 },
      '-=0.5'
    );

    tl.fromTo(
      buttonsRef.current?.children || [],
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.2 },
      '-=0.5'
    );

    tl.fromTo(
      '[data-gsap="icon"]',
      { opacity: 0, y: 100, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.1 },
      '-=0.5'
    );
  }, []);

  return (
    <div className="flex bg-cover bg-center min-h-screen items-end relative">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" src={videoSrc} muted loop autoPlay />
      <div
        ref={gradientDevRef}
        className={`w-full rounded-t-lg bg-gradient-to-b from-[#000000] to-[#00000000] flex md:flex-row flex-col items-center justify-around ${styles.paddingY}`}
      >
        <p ref={paragraphRef} className="text-white font-light text-sm uppercase font-montserrat text-wrap max-w-sm">
          Leaders In Manufacturing Engine Cooling Products
        </p>
        <div ref={buttonsRef} className="flex md:flex-row flex-col gap-4">
          <Button className=" bg-gradient-linear-100 text-white">Explore</Button>
          <Button className="bg-transparent border border-white text-white" color="neutral" outline>
            More Info
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-4 max-w-[400px]">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-2xl text-white duration-500 hover:scale-150 hover:text-primary"
            >
              <Icon icon={icon.icon} className="w-full" data-gsap="icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
