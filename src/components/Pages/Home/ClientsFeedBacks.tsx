import Carousel from '../../blocks/Carousel';
import CarouselItem from '../../blocks/Carousel/CarouselItem';

const ClientsFeedBacks = () => {
  return (
    <section className="bg-section-100 h-[75vh] relative ">
      <div className="  w-full h-full  bg-section-400 p-10">
        <Carousel>
        
          <CarouselItem>
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2 className="text-2xl font-bebas text-primary">Clients FeedBacks</h2>
              <p className="text-white text-sm font-montserrat">What our clients say about us</p>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2 className="text-2xl font-bebas text-primary">Clients FeedBacks</h2>
              <p className="text-white text-sm font-montserrat">What our clients say about us</p>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsFeedBacks;
