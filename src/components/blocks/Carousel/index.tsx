import Slider, { Settings } from 'react-slick';
import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Icon } from '@iconify-icon/react/dist/iconify.mjs';


const NextArrow = () => {
    return (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 z-20">
            <button className="btn rounded-full btn-ghost" >
                <Icon className='text-primary' icon="line-md:arrow-right" width="20" height="20" />
            </button>
        </div>
    );

}


const PrevArrow = () => {
    return (
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 -translate-x-1/2">
        <button className="btn rounded-full btn-ghost" >
          <Icon className='text-primary' icon="line-md:arrow-left" width="20" height="20" />
        </button>
      </div>
    );

}





function Carousel({ children } : {children: React.ReactNode}) {
  const [, setOldSlide] = useState(0);
  const [, setActiveSlide] = useState(0);
  const [, setActiveSlide2] = useState(0);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
      slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow:<PrevArrow/> ,
    beforeChange: (current, next) => {
      setOldSlide(current);
      setActiveSlide(next);
    },
    afterChange: (current) => setActiveSlide2(current),
  };
  return (
    <div className="slider-container relative px-20 ">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carousel;
