import React, { useRef } from 'react'
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import StarsCanvas from '../../canvas/Stars';

const CounterSection = () => {
  return (
    <div
      className={
        ' grid grid-cols-2 md:grid-cols-4 gap-4 bg-cover relative bg-center bg-[#000000e0] ' + styles.padding
      }
    >
      <StarsCanvas/>
      <Counter maxNumber={1500} label={'Products'} />
      <Counter label={'experiance'} maxNumber={15} />
      <Counter label={'cliens'} maxNumber={1200} />
      <Counter label={'users'} maxNumber={1100} />
    </div>
  );
}


interface CounterProps {
  maxNumber: number; // Maximum number to count to
  label: string; // Label for the counter
}

export const Counter: React.FC<CounterProps> = ({ maxNumber, label }) => {
  const numberRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      numberRef.current,
      { innerText: 0 },
      {
        innerText: maxNumber,
        duration: 4,
        ease: 'power1.inOut',
        snap: { innerText: 1 },

        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = `+${Math.ceil(parseFloat(numberRef.current.innerText))}`;
          }
        },
      }
    );
  }, [maxNumber]);

  return (
    <div className="flex flex-col items-center justify-center gap-2 text-white">
      <span ref={numberRef} className="text-white text-base md:text-4xl" />
      <span className="text-white text-sm md:text-base">{label}</span>
    </div>
  );
};


export default CounterSection