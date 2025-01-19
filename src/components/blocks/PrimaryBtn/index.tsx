import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ReactNode, useRef } from 'react';

interface PrimaryBtnProps {
  children: ReactNode;
  rounded?: boolean;
  outlined?: boolean;
}

export default function PrimaryBtn({ children, rounded ,outlined }: PrimaryBtnProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  useGSAP(() => {
    if (!btnRef.current) return;

    btnRef.current.addEventListener('mouseenter', () => {
      gsap.to(btnRef.current, {
        scale: 1.2,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    });

    btnRef.current.addEventListener('mouseleave', () => {
      gsap.to(btnRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      });
    });

    return () => {
      btnRef.current?.removeEventListener('mouseenter', () => {});
      btnRef.current?.removeEventListener('mouseleave', () => {});
    };
  });

  return (
    <>
      <button
        ref={btnRef}
        className={`btn text-white ${outlined ? 'btn-outline btn-primary' : 'bg-gradient-to-r from-[#0099F7] to-[#12F1E4]'}   ${
          rounded ? 'rounded-full ':'rounded-none'
        }`}
      >
        {children}
      </button>
    </>
  );
}
