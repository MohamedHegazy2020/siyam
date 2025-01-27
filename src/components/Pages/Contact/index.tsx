/* eslint-disable @typescript-eslint/ban-ts-comment */
import GoogleMapReact from 'google-map-react';
import styles from '../../../utils/styles';
import ContactForm from '../../blocks/ContactForm';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

const ContactCards = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div className="flex gap-4 items-center">
          <div>
            <Icon icon="line-md:phone-call-loop" width="32" height="32" />
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold uppercase">Phone</h6>
            <Link className="text-red-400" to="tel:+03 5432 1234">
              03 5432 1234
            </Link>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <Icon icon="la:fax" width="32" height="32" />
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold uppercase">Phone</h6>
            <Link className="text-red-400" to="tel:+03 5432 1234">
              03 5432 1234
            </Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div>
            <Icon icon="line-md:email-opened-twotone" width="32" height="32" />
          </div>
          <div className="flex flex-col">
            <h6 className="font-bold uppercase">email</h6>
            <Link className="text-red-400" to="mailto:info@marcc.com.au">
              info@marcc.com.au
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
        end: 'bottom 10%',

        toggleActions: 'restart pause restart pause',
      },
    });
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      subtitleRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
    tl.fromTo(
      formRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
    tl.fromTo(
      contactCardsRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      mapRef.current,
      {
        opacity: 0,
        x: -50,
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
      <section ref={containerRef} className={styles.padding + ' bg-[#CFDBE4] font-light min-h-screen'}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col justify-center">
            <h1 ref={titleRef} className="font-bebas text-4xl md:text-6xl">
              Get in <span className="text-red-700">Touch</span>
            </h1>
            <p ref={subtitleRef} className="my-8 font-bold">
              Have questions or need assistance? Reach out to us—we’re here to help!
            </p>
            <div ref={formRef}>
              <ContactForm inputsTransParent />
            </div>
            <div ref={contactCardsRef} className="p-5 mt-10">
              <ContactCards />
            </div>
          </div>
          <div ref={mapRef} className=" w-full h-full p-6">
            <GoogleMapReact
              bootstrapURLKeys={{ key: '' }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {/* @ts-ignore */}
              <div lat={59.955413} lng={30.337844} />
            </GoogleMapReact>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
