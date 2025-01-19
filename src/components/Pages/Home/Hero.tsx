import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import PrimaryBtn from '../../blocks/PrimaryBtn';
import styles from '../../../utils/styles';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'restart pause  restart pause',
        },
      })
      .from(contentRef.current, {
        opacity: 0,
        duration: 1.5,
        y: 100,
        ease: 'power2.inOut',
      })
      .from(
        Array.from(contentRef.current?.children ?? []),
        {
          opacity: 0,
          duration: 1.2,
          stagger: 0.4,
          y: 100,
          ease: 'power2.inOut',
        },
        '-=0.8'
      );
  }, [contentRef]);

  return (
    <>
      <div className="flex bg-cover bg-center min-h-screen items-end bg-bg-home-hero">
        <div
          ref={contentRef}
          className={
            'w-full rounded-t-lg bg-gradient-to-b from-[#000000] to-[#00000000] flex md:flex-row flex-col items-center justify-around ' +
            styles.paddingY
          }
        >
          <p className="text-white font-light text-sm uppercase font-montserrat text-wrap max-w-sm">
            Leaders In Manufacturing Engine Cooling Products
          </p>
          <div className="flex md:flex-row flex-col  gap-4 ">
            <PrimaryBtn>Explore</PrimaryBtn>
            <PrimaryBtn outlined>More Info</PrimaryBtn>
          </div>
          <div className="grid grid-flow-col gap-4 mt-6">
            <a className="link link-hover text-white " href="#">
              <Icon icon="mingcute:facebook-fill" width="24" height="24" />
            </a>
            <a className="link link-hover text-white " href="#">
              <Icon icon="mingcute:instagram-fill" width="24" height="24" />{' '}
            </a>
            <a className="link link-hover text-white " href="#">
              <Icon icon="mingcute:youtube-fill" width="24" height="24" />
            </a>
            <a className="link link-hover text-white " href="#">
              <Icon icon="mingcute:tiktok-fill" width="24" height="24" />
            </a>
            <a className="link link-hover text-white " href="#">
              <Icon icon="prime:twitter" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
