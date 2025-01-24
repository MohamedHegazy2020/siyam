import { useRef } from 'react';

import styles from '../../../utils/styles';
import { AbeerSyam, ibrahimSyam, walidSiyam, yazanSiyam } from '../../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

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

const MemberCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="card   ">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body pt-4 bg-transparent">
        <h2 className="text-2xl text-center w-full font-bebas text-primary">{title}</h2>
        <p className="text-center font-montserrat  text-bold text-primary text-sm capitalize">{description}</p>
      </div>
    </div>
  );
};
const GenerationsMembers = () => {
  return (
    <>
      <div className={'bg-section-300 ' + styles.padding}>
        <div className="flex flex-col items-center justify-center py-14 gap-4">
          <p className="text-center text-sm text-white font-light">Generations Members</p>
          <h2 className="text-center text-2xl font-semibold text-white">Meet our professional</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
          <MemberCard image={ibrahimSyam} title={'Ibrahim Syam'} description={'founder'} />
          <MemberCard image={AbeerSyam} title={'Abeer Syam'} description={'CEO'} />
          <MemberCard image={yazanSiyam} title={'Yazan Syam'} description={'North American Operations'} />
          <MemberCard image={walidSiyam} title={'Walid Syam'} description={'General Manager'} />
        </div>
      </div>
      <div
        className={
          'bg-footer-texture grid grid-cols-2 md:grid-cols-4 gap-4 bg-cover bg-center bg-[#000000e0] ' + styles.padding
        }
      >
        <Counter maxNumber={1500} label={'Products'} />
        <Counter label={'experiance'} maxNumber={15} />
        <Counter label={'cliens'} maxNumber={1200} />
        <Counter label={'users'} maxNumber={1100} />
      </div>
    </>
  );
};

export default GenerationsMembers;
