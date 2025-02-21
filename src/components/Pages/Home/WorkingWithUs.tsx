import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from '../../../utils/styles';
import { useRef, useMemo } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const WorkingWithUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement[]>([]);

  const cardContent = useMemo(
    () => [
      {
        icon: 'material-symbols:manage-history',
        title: 'On Time Delivery',
        description:
          'We ensure timely delivery of our products, maintaining efficiency and reliability in every shipment to meet your expectations.',
      },
      {
        icon: 'solar:cup-star-outline',
        title: 'Competitive Prices',
        description:
          'Our competitive pricing strategy offers exceptional value, providing high-quality products at affordable prices tailored to your needs.',
      },
      {
        icon: 'ri:customer-service-2-line',
        title: 'Unique Customer Service',
        description:
          'Our customer service stands out through personalized attention, fast responses, and dedicated support for every inquiry, ensuring your complete satisfaction.',
      },
      {
        icon: 'solar:hand-stars-linear',
        title: 'Building Relationships',
        description:
          'We focus on building long-term relationships by addressing issues quickly and effectively, ensuring customer satisfaction with reliable solutions.',
      },
      {
        icon: 'entypo:lab-flask',
        title: 'Quality Assurance',
        description:
          'Our advanced testing laboratory ensures product quality through rigorous testing, meeting industry standards and exceeding customer expectations.',
      },
    ],
    []
  );

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'restart pause restart reverse',
      },
    });
    tl.fromTo(
      titleRef.current,
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

    cardRef.current.forEach((card, index) => {
      tl.fromTo(
        card,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        `<=${0.5 - index * 0.1}`
      );
    });
  });

  return (
    <>
      <section ref={containerRef} className={'bg-section-200 bg-cover  ' + styles.padding}>
        <h2 ref={titleRef} className="font-bebas text-2xl text-center text-white ">
          working with us Means
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-6 place-content-center justify-center items-center mt-8 gap-4">
          {cardContent.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRef.current[index] = el as HTMLDivElement)}
              className={`bg-white card min-h-full max-w-full md:col-span-2 flex flex-col items-center justify-around gap-5 p-5 md:p-10 ${
                index === 3 ? 'md:col-start-2' : ''
              }`}
            >
              <div className="flex justify-center items-center rounded-full bg-primary w-16 h-16">
                <Icon icon={card.icon} className="text-white" width="36" height="36" />
              </div>
              <h3 className="text-center text-sm md:text-lg font-bebas">{card.title}</h3>
              <p className="text-center text-sm md:text-base font-light">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkingWithUs;
