import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ButtonHTMLAttributes, useRef } from 'react';
import clsx from 'clsx';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  rounded?: 'rounded' | 'rounded-full' | 'none';
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  outlined?: boolean;
  children: React.ReactNode;
};

const Button = ({
  children,
  rounded = 'rounded',
  className = '',

  outlined = false,
  ...props
}: ButtonProps) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(btnRef.current, {
      scale: 1.1,
      boxShadow: '0px 4px 15px rgba(0,0,0,0.2)',
      duration: 0.25,
      ease: 'power1.inOut',
    });

    const mouseEnterHandler = () => tl.play();
    const mouseLeaveHandler = () => tl.reverse();

    btnRef.current?.addEventListener('mouseenter', mouseEnterHandler);
    btnRef.current?.addEventListener('mouseleave', mouseLeaveHandler);

    return () => {
      btnRef.current?.removeEventListener('mouseenter', mouseEnterHandler);
      btnRef.current?.removeEventListener('mouseleave', mouseLeaveHandler);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className={clsx(
        'btn',
        rounded,
        {
          'border-white text-white bg-transparent': outlined,
        },
        className
      )}
      {...props}
    > 
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;
