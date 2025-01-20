import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from '../../../utils/styles';
import { AbeerSyam, ibrahimSyam, walidSiyam, yazanSiyam } from '../../../constants';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);



interface CounterProps {
  maxNumber: number; // Maximum number to count to
  label: string; // Label for the counter
}

export const Counter: React.FC<CounterProps> = ({ maxNumber, label }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prevValue) => prevValue + 1);
    }, 1/maxNumber);

    if (value === maxNumber) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [maxNumber, value]);

  return (
    <Container>
      <Stat>
        <span className="text-white">+{value}</span> {/* Display the value */}
      </Stat>
      <Blurb>
        <p className="text-white">{label}</p> {/* Display the label */}
      </Blurb>
    </Container>
  );
};

const MemberCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  const card = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (card.current) {
      const children = card.current.children ?? [];
      gsap.from(children, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power2.out',
        stagger: {
          grid: [1, children.length],
          from: 'end',
        },
        scrollTrigger: {
          trigger: card.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      });
    }
  }, [card]);

  return (
    <div ref={card} className="card   ">
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
  const section = useRef(null);

  useGSAP(
    () =>
      gsap.from(section.current, {
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
        },
      }),
    []
  );

  return (
    <>
      <div ref={section} className={'bg-section-300 ' + styles.padding}>
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
          'bg-footer-texture grid grid-cols-2 md:grid-cols-4  bg-cover bg-center bg-[#000000e0] ' + styles.padding
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
