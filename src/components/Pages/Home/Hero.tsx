import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import styles from '../../../utils/styles';
import { Link } from 'react-router-dom';
import PrimaryGradientBtn from '../../blocks/Buttons/PrimaryGradientBtn';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import videoSrc from '../../../assets/videos/28032023 Website 01 (1).mp4';
export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollPos = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    // Initial Animation: Small to Full Screen
    gsap.fromTo(
      video,
      {
        width: "200px",
        height: "200px",
        opacity: 0,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      },
      {
        width: "100vw",
        height: "100vh",
        opacity: 1,
        top: "0",
        left: "0",
        transform: "translate(0, 0)",
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          video.play().then(() => {
            // You can add additional code here if needed
          });
        }
      }
    );

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;
      const windowBottom = window.scrollY + window.innerHeight;

      if (windowBottom >= sectionBottom + 150) {
        // When scrolling past the bottom of the section -> Shrink Video
        gsap.to(video, {
          width: "200px",
          height: "200px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          duration: 1,
          ease: "power2.out",
          onUpdate: () => video.pause(),
        });
      } else if (window.scrollY <= sectionBottom - window.innerHeight) {
        // When scrolling back up before leaving -> Expand Video
        gsap.to(video, {
          width: "100vw",
          height: "100vh",
          top: "0",
          left: "0",
          transform: "translate(0, 0)",
          duration: 1,
          ease: "power2.out",
          onUpdate: () => {
            video.play().then(() => {
              // You can add additional code here if needed
            });
          }
        });
      }

      scrollPos.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div ref={sectionRef} className="flex bg-cover bg-center min-h-screen items-end relative">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
        src={videoSrc}
        muted
        loop
      />
        <div
          className={
            'w-full rounded-t-lg bg-gradient-to-b from-[#000000] to-[#00000000] flex md:flex-row flex-col items-center justify-around ' +
            styles.paddingY
          }
        >
          <p className="text-white font-light text-sm uppercase font-montserrat text-wrap max-w-sm">
            Leaders In Manufacturing Engine Cooling Products
          </p>
          <div className="flex md:flex-row flex-col  gap-4 ">
            <PrimaryGradientBtn >Explore</PrimaryGradientBtn>
            <button className="btn btn-outline text-white" >More Info</button>
          </div>
          <div className="grid grid-flow-col gap-4 mt-6">
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:facebook-fill" width="24" height="24" />
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:instagram-fill" width="24" height="24" />{' '}
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:youtube-fill" width="24" height="24" />
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon icon="mingcute:tiktok-fill" width="24" height="24" />
            </Link>
            <Link className="link link-hover text-white " to="#">
              <Icon  icon="prime:twitter" width="24" height="24" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
