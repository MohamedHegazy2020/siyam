import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const PrimaryGradientBtn = ({
  children,
  rounded = 'rounded',
}: {
  children: React.ReactNode;
  rounded?: 'rounded' | 'rounded-full' | 'none';
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      paused: true,
    });

    tl.to(btnRef.current, {
      scale: 1.1,
      boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
      duration: 0.25,
      ease: 'power1.inOut',
    });

    btnRef.current?.addEventListener('mouseenter', () => {
      console.log('Mouse Enter', btnRef.current, tl);
      tl?.play();
    });

    btnRef.current?.addEventListener('mouseleave', () => {
      tl?.reverse();
    });
  });

  return (
    <button ref={btnRef} className={`btn border-white bg-gradient-linear-100 text-white ${rounded} `}>
      {children}
    </button>
  );
};

export default PrimaryGradientBtn;
