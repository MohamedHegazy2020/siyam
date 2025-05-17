import styles from '../../../utils/styles';
import { genartionMembers } from '../../../constants';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const MemberCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="card">
      <figure>
        <img loading="lazy" src={image} alt={title} data-gsap="genration-image" />
      </figure>
      <div className="card-body pt-4 bg-transparent">
        <h2 className="text-3xl font-light text-center w-full font-bebas text-primary" data-gsap="genration-title">
          {title}
        </h2>
        <p
          className="text-center font-montserrat  text-semibold text-primary text-xl capitalize"
          data-gsap="genration-desc"
        >
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
        toggleActions: 'play none none none',
      },
    });
    tl.fromTo(
      subTitleRef.current,
      {
        opacity: 0,
        x: -100,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      },
      '-=0.5'
    );
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      }
    );
    tl.fromTo(
      '[data-gsap="genration-image"]',
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
      },
      '-=0.5'
    );
    tl.fromTo(
      '[data-gsap="genration-title"]',
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
      },
      '-=0.5'
    );
    tl.fromTo(
      '[data-gsap="genration-desc"]',
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
      },
      '-=0.5'
    );
  });

  return (
    <>
      <div ref={containerRef} className={'bg-section-300  bg-cover bg-no-repeat' + styles.padding}>
        <div className="flex flex-col items-center justify-center py-4 gap-4">
          <p ref={subTitleRef} className="text-center text-xl text-white font-normal">
            Generations Members
          </p>
          <h2 ref={titleRef} className="text-center text-3xl font-semibold  text-white leading-tight">
            Meet our professional
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-2">
          {genartionMembers.map((member, index) => (
            <MemberCard key={index} image={member.image} title={member.name} description={member.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GenerationsMembers;
