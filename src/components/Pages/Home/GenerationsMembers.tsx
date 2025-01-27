import styles from '../../../utils/styles';
import { AbeerSyam, ibrahimSyam, walidSiyam, yazanSiyam } from '../../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const MemberCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRrf = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
    });
    tl.fromTo(
      imageRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      titleRrf.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      '-=0.5'
    );

    tl.fromTo(
      descriptionRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      '-=0.5'
    );
  });
  return (
    <div ref={containerRef} className="card   ">
      <figure>
        <img ref={imageRef} src={image} alt={title} />
      </figure>
      <div className="card-body pt-4 bg-transparent">
        <h2 ref={titleRrf} className="text-2xl  text-center w-full font-bebas text-primary">
          {title}
        </h2>
        <p ref={descriptionRef} className="text-center font-montserrat  text-bold text-primary text-sm capitalize">
          {description}
        </p>
      </div>
    </div>
  );
};
const GenerationsMembers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart pause',
      },
    });
  

    tl.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      subTitleRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      },
      '-=0.5'
    );

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
  });

  return (
    <>
      <div ref={containerRef} className={'bg-section-300 bg-center bg-cover bg-no-repeat' + styles.padding}>
        <div className="flex flex-col items-center justify-center py-4 gap-4">
          <p ref={subTitleRef} className="text-center text-sm text-white font-light">
            Generations Members
          </p>
          <h2 ref={titleRef} className="text-center text-2xl font-semibold text-white">
            Meet our professional
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
          <MemberCard image={ibrahimSyam} title={'Ibrahim Syam'} description={'founder'} />
          <MemberCard image={AbeerSyam} title={'Abeer Syam'} description={'CEO'} />
          <MemberCard image={yazanSiyam} title={'Yazan Syam'} description={'North American Operations'} />
          <MemberCard image={walidSiyam} title={'Walid Syam'} description={'General Manager'} />
        </div>
      </div>
    </>
  );
};

export default GenerationsMembers;
