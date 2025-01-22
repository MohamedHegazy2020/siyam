import { Radiators } from '../../../constants';
import styles from '../../../utils/styles';
import CardTilt from '../../blocks/CardTilt';

const ProductRange = () => {
  const carouselItems = [
    {
      image: Radiators[0],
      title: 'charge air coolers',
    },
    {
      image: Radiators[1],
      title: 'cooling modules',
    },
    {
      image: Radiators[2],
      title: 'Condensers',
    },
    {
      image: Radiators[3],
      title: 'Radiator',
    },
    {
      image: Radiators[4],
      title: 'Core & spare parts',
    },
  ];

  return (
    <section className={'bg-gradient-radial ' + styles.padding}>
      <h2 className="bg-gradient-linear mb-10 text-2xl font-bebas text-center font-bold text-transparent bg-clip-text">
        product range
      </h2>
      <div className="relative mt-5 grid grid-cols-2 md:grid-cols-5 gap-4 lg:px-20">
        {carouselItems.map((item, index) => (
          <div className=" " key={index}>
            <CardTilt key={index}>
              <div className="w-full h-full flex flex-wrap justify-center  border  rounded-lg p-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full drop-shadow transition-shadow shadow-blue-800"
                />
                <h4 className="w-full self-end text-center font-bebas text-sm lg:text-lg ">{item.title}</h4>
                {/* <p className='w-full self-end text-center text-xs' >High intensity</p> */}
              </div>
            </CardTilt>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRange;
