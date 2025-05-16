import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import clsx from 'clsx';
import { useRef } from 'react';

export type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
  color?: 'neutral' | 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outline?: boolean;
  rounded?: 'full' | 'medium' | 'small' | 'none';
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  wide?: boolean;
  className?: string;
};

const Button = ({
  children,
  color = 'primary',
  size = 'md',
  outline = false,
  rounded = 'medium',
  active = false,
  disabled = false,
  block = false,
  wide = false,
  className = '',
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

        {
          'btn-active': active,
          'btn-disabled': disabled,
          'btn-block': block,
          'btn-wide': wide,
        },
        rounded === 'full' ? 'rounded-full' : rounded === 'medium' ? 'rounded-md' : rounded === 'small' ? 'rounded-sm' : '',
        color ? `btn-${color}` : '',
        size ? `btn-${size}` : '',
        outline ? 'btn-outline' : '',
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

