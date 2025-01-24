import { hunger, million, people, risingArrorw } from '../../../constants';
import styles from '../../../utils/styles';

const items = [
  {
    title: '+30 years of experience',
    description: 'To provide exceptional services in the radiators industry with expertise and innovation.',
    icon: million,
  },
  {
    title: '7 manufacturing facilities',
    description: 'Equipped with state-of-the-art technology to ensure top-quality production and efficiency.',
    icon: hunger,
  },
  {
    title: '+500 skilled employee',
    description: 'To provide exceptional services in the radiators industry with expertise and innovation.',
    icon: people,
  },
  {
    title: '+2000 models developed',
    description: 'Trusted by leading companies worldwide to deliver cutting-edge solutions.',
    icon: risingArrorw,
  },
];
const Item = ({ title, description, icon }:{ title: string; description: string; icon: string}) => {
  return (
    <>
      <div className="flex flex-col gap-2 text-white">
        <div className="h-6 w-6">

          <img src={icon} className='w-full' alt="icon" />
        </div>
        <h3 className="font-bebas text-xl">{title}</h3>
        <p className='text-sm'>{description}</p>
      </div>
    </>
  );
};
const ProductHero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-products-hero bg-cover bg-center">
        <div className="hero-content text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div
              className={
                'md:col-span-3 bg-gradient-to-t from-[#00000026]  to-[#000000CC]  rounded-2xl  backdrop-blur-sm text-start ' +
                styles.padding
              }
            >
              <h1 className="text-2xl md:text-6xl font-bold">Leaders In Manufacturing Engine Cooling Products</h1>
              <p className="py-6   md:text-2xl">
                Siyam Industrial Group, is specialized in developing and manufacturing OE, customized, and aftermarket,
                core and complete cooling products
              </p>
              <button className="btn bg-gradient-linear-100 text-white">Explore</button>
            </div>
            <div
              className={
                'md:col-span-4 bg-gradient-to-t from-[#00000026]  to-[#000000CC]  rounded-2xl  backdrop-blur-sm text-start ' +
                styles.padding
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {items.map((item, index) => {
                  return <Item key={index} title={item.title} description={item.description} icon={item.icon} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductHero;
