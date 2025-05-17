import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Button from '../../blocks/Buttons';

export default function AboutHero() {
  gsap.registerPlugin(ScrollTrigger);
  const container = useRef<HTMLDivElement | null>(null);
  const heroText = useRef<HTMLHeadingElement | null>(null);
  const heroSubText = useRef<HTMLParagraphElement | null>(null);
  const userIconRef = useRef<HTMLDivElement | null>(null);
  const heroBtn = useRef<HTMLDivElement | null>(null);
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);


  // Define background images and messages
  const content = [
    {
      image: '/src/assets/images/property1.png',
      text: 'Developing Career Experts',
    },
    {
      image: '/src/assets/images/Property1=Variant2.png',
      text: 'Talent customized Experts',
    },
    {
      image: '/src/assets/images/Property1=Variant3.png',
      text: 'Talent Career aftermarket',
    },
  ];

  useGSAP(() => {
    // Initial entrance animation
    const entranceTimeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
    });

    entranceTimeline
      .fromTo(heroText.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2 })
      .fromTo(heroSubText.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 }, '-=0.8')
      .fromTo(heroBtn.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.6')
      .fromTo(userIconRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');

    // Start the content rotation
    startContentRotation();
  }, []);

  const startContentRotation = () => {
    let currentIndex = 0;
    let isAnimating = false;
    let rotationTimeline: gsap.core.Timeline | null = null;
    let intervalId: number | null = null;

    const rotateContent = () => {
      if (isAnimating || !textContainerRef.current || !backgroundRef.current || !overlayRef.current) return;
      isAnimating = true;

      const nextIndex = (currentIndex + 1) % content.length;

      // Kill any existing animation and clear interval
      if (rotationTimeline) {
        rotationTimeline.kill();
      }
      if (intervalId) {
        clearInterval(intervalId);
      }

      // Create new timeline
      rotationTimeline = gsap.timeline({
        onComplete: () => {
          currentIndex = nextIndex;
          isAnimating = false;
          // Restart interval after animation completes
          intervalId = window.setInterval(rotateContent, 5000);
        },
      });

      // Prepare next state
      const nextContent = content[nextIndex];

      // Animate the transition
      rotationTimeline
        // Phase 1: Fade out current state
        .to(textContainerRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: 'power2.in',
        })
        .to(
          overlayRef.current,
          {
            opacity: 0.85,
            duration: 0.4,
            ease: 'power2.inOut',
          },
          '-=0.3'
        )

        // Phase 2: Update content
        .set(backgroundRef.current, {
          backgroundImage: `url(${nextContent.image})`,
        })
        .set(textContainerRef.current, {
          innerText: nextContent.text,
          y: 20,
        })

        // Phase 3: Fade in new state
        .to(textContainerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        })
        .to(
          overlayRef.current,
          {
            opacity: 0.7,
            duration: 0.4,
            ease: 'power2.inOut',
          },
          '-=0.3'
        );
    };

    // Set initial content
    if (textContainerRef.current) {
      textContainerRef.current.innerText = content[0].text;
    }
    if (backgroundRef.current) {
      backgroundRef.current.style.backgroundImage = `url(${content[0].image})`;
    }

    // Start initial rotation
    intervalId = window.setInterval(rotateContent, 8000);

    // Cleanup function
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (rotationTimeline) {
        rotationTimeline.kill();
      }
    };
  };

  return (
    <div ref={container} className="hero min-h-screen relative overflow-hidden">
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
      />

      {/* Overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-black opacity-70 transition-opacity duration-500" />

      
      <div className="hero-content text-white text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
          <span className='font-bebas '>Innovation Meets Reliability</span>
          <h1 ref={heroText} className="mb-5 text-4xl md:text-6xl font-bold">
            Siyam Industrial Group is specialized in
            <div className="h-[1.6em] overflow-hidden">
              <span
                ref={textContainerRef}
                className="text-transparent block bg-gradient-to-r my-2 from-secondary to-primary bg-clip-text"
              >
                {content[0].text}
              </span>
            </div>
          </h1>

          <p ref={heroSubText} className="mb-5 text-lg font-normal">
            Core and complete cooling products, radiators, charge air coolers, condensers, and cooling modules for all
            types of applications. For over 30 years, we have distinguished ourselves by providing high-quality
            products, with superior services, delivered on time and at a competitive price.
          </p>

          <div ref={heroBtn}>
            <Button className="bg-gradient-linear-100 border-white  text-2xl px-8">
              <Icon icon="lets-icons:video-fill" width="24" height="24" />
              Start Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
