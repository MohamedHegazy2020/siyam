import { Icon } from '@iconify-icon/react/dist/iconify.mjs';
import { yazanSiyam } from '../../../constants';
import Carousel from '../../blocks/Carousel';
import CarouselItem from '../../blocks/Carousel/CarouselItem';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const ClientsFeedBacks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

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
      titleRef.current,
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
       x: 0,
        duration: 1,
      }
    );

    tl.fromTo(
      carouselContainerRef.current,
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
  });
  return (
    <section ref={containerRef} className="bg-section-100  relative  ">
      <div className="  w-full h-full  bg-section-400 p-10">
        <h3 ref={titleRef} className="font-bebas text-2xl my-4 text-center">
          What Our Clients Say About Us
        </h3>
        <div ref={carouselContainerRef}>
          <Carousel>
            <CarouselItem>
              <div className="flex flex-col gap-2  items-center justify-center bg-vector-100 bg-center bg-contain bg-no-repeat py-36 px-10 rounded-lg ">
                <div className="flex  justify-center items-center rounded-full bg-primary w-16 h-16 overflow-clip  transform -translate-y-50">
                  <img className="w-full max-w-md" src={yazanSiyam} alt="Yazan Syam" />
                </div>
                <div className="flex flex-col gap-2 max-w-sm justify-center items-center">
                  <h6 className="text-white text-sm md:text-md text-center ">Hannah Schmitt</h6>
                  <span className="text-white text-center text-xs md:text-base-100">Customer</span>
                  <span className="text-primary ">
                    <Icon icon="raphael:quote" width="24" height="24" />
                  </span>
                  <blockquote className="text-white text-center text-xs md:text-base-100 line-clamp-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                    maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                    venenatis felis id augue sit cursus pellentesque enim{' '}
                  </blockquote>
                </div>
              </div>
            </CarouselItem>{' '}
            <CarouselItem>
              <div className="flex flex-col gap-2  items-center justify-center bg-vector-100 bg-center bg-contain bg-no-repeat py-36 px-10 rounded-lg ">
                <div className="flex  justify-center items-center rounded-full bg-primary w-16 h-16 overflow-clip  transform -translate-y-50">
                  <img className="w-full max-w-md" src={yazanSiyam} alt="Yazan Syam" />
                </div>
                <div className="flex flex-col gap-2 max-w-sm justify-center items-center">
                  <h6 className="text-white text-sm md:text-md text-center ">Hannah Schmitt</h6>
                  <span className="text-white text-center text-xs md:text-base-100">Customer</span>
                  <span className="text-primary ">
                    <Icon icon="raphael:quote" width="24" height="24" />
                  </span>
                  <blockquote className="text-white text-center text-xs md:text-base-100 line-clamp-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                    maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                    venenatis felis id augue sit cursus pellentesque enim{' '}
                  </blockquote>
                </div>
              </div>
            </CarouselItem>{' '}
            <CarouselItem>
              <div className="flex flex-col gap-2  items-center justify-center bg-vector-100 bg-center bg-contain bg-no-repeat py-36 px-10 rounded-lg ">
                <div className="flex  justify-center items-center rounded-full bg-primary w-16 h-16 overflow-clip  transform -translate-y-50">
                  <img className="w-full max-w-md" src={yazanSiyam} alt="Yazan Syam" />
                </div>
                <div className="flex flex-col gap-2 max-w-sm justify-center items-center">
                  <h6 className="text-white text-sm md:text-md text-center ">Hannah Schmitt</h6>
                  <span className="text-white text-center text-xs md:text-base-100">Customer</span>
                  <span className="text-primary ">
                    <Icon icon="raphael:quote" width="24" height="24" />
                  </span>
                  <blockquote className="text-white text-center text-xs md:text-base-100 line-clamp-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                    maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                    venenatis felis id augue sit cursus pellentesque enim{' '}
                  </blockquote>
                </div>
              </div>
            </CarouselItem>{' '}
            <CarouselItem>
              <div className="flex flex-col gap-2  items-center justify-center bg-vector-100 bg-center bg-contain bg-no-repeat py-36 px-10 rounded-lg ">
                <div className="flex  justify-center items-center rounded-full bg-primary w-16 h-16 overflow-clip  transform -translate-y-50">
                  <img className="w-full max-w-md" src={yazanSiyam} alt="Yazan Syam" />
                </div>
                <div className="flex flex-col gap-2 max-w-sm justify-center items-center">
                  <h6 className="text-white text-sm md:text-md text-center ">Hannah Schmitt</h6>
                  <span className="text-white text-center text-xs md:text-base-100">Customer</span>
                  <span className="text-primary ">
                    <Icon icon="raphael:quote" width="24" height="24" />
                  </span>
                  <blockquote className="text-white text-center text-xs md:text-base-100 line-clamp-3 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus
                    maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus
                    venenatis felis id augue sit cursus pellentesque enim{' '}
                  </blockquote>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsFeedBacks;
