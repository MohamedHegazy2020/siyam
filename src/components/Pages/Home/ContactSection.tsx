import { useRef } from 'react';
import { factory100, factory200, factory300 } from '../../../constants';
import styles from '../../../utils/styles';
import ContactForm from '../../blocks/ContactForm';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ContactSection = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

useGSAP(
  () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',
        toggleActions: 'play none none none',
      },
    });
const cards = Array.from(cardsRef.current?.children || []);

cards.forEach((card, index) => {
  tl.fromTo(
    card,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay: index * 0.2,
    }
  );
});
    

})
  return (
    <section ref={containerRef} className={'bg-gradient-radial grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 ' + styles.padding}>
      <div>
        <ContactForm />
      </div>
      <div className=" bg-vector-200 bg-no-repeat bg-center bg-contain md:p-6  order-first  md:order-last ">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-5 md:gap-4 gap-2  ">
          {/* Main card on the left */}
          <div  className="max-w-full md:col-span-2">
            <div className="flex flex-col justify-between  p-4 border border-blue-400 rounded-lg bg-white shadow-md gap-3  ">
              <span className=" badge text-blue-600 badge-info bg-opacity-30 text-sm font-semibold uppercase">
                Popular
              </span>
              <h2 className="text-lg font-bold ">Design for how people think</h2>
              <p className="text-gray-600 text-sm ">
                Aliquam euismod condimentum elementum ultricies volutpat sit non.
              </p>
              <button className="mt-4 px-4 py-2 btn-info border border-info bg-white btn-outline text-info  rounded-md hover:text-white focus:outline-none">
                Take Lesson
              </button>
            </div>
          </div>

          {/* Images on the right */}

          <div  className="  pt-6 min-h-full max-w-full  md:col-span-2 flex items-end ">
            <img
              src={factory100} // Replace with your image URL
              alt="Example 1"
              className="w-full md:w-3/4 object-cover"
            />
          </div>
          <div  className=" md:pb-4 md:col-span-3 flex justify-end min-h-full max-w-full   ">
            <img
              src={factory200} // Replace with your image URL
              alt="Example 2"
              className="w-full  object-cover"
            />
          </div>
          <div  className=" min-h-full max-w-full md:col-span-2 ">
            <img
              src={factory300} // Replace with your image URL
              alt="Example 3"
              className="w-full  object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
