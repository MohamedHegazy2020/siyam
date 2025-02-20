import { Radiators } from '../../../constants';
import styles from '../../../utils/styles';
import CardTilt from '../../blocks/CardTilt';
import Model1Canvas from '../../canvas/Model1';
import Model2Canvas from '../../canvas/Model2';
import Model3Canvas from '../../canvas/Model3';
import { Model3D, Model3DCanvas } from '../../canvas/Model3D';

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
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="w-full transition-shadow shadow-blue-800"
              />
              <div className="w-full flex flex-col items-center justify-center self-end">
                <div className="w-full self-end h-5 flex justify-center items-center bg-gradient-radial-100 rounded-[50%] backdrop-blur-4xl" />
                <h4 className="w-full self-end text-center font-bebas text-sm lg:text-lg ">{item.title}</h4>
              </div>
            </CardTilt>
          </div>
        ))}
      </div>

      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className=" h-full py-2">
          <Model3DCanvas path="./GLB/PT-011/PT-011.glb" />
        </div>

        <div className=" h-full py-2">
          <Model3DCanvas path='./GLB/IC-052/IC-052.glb' />
        </div>
        <div className=" h-full py-2">
          <Model3DCanvas path='./GLB/12364/12364.glb' />
        </div>
      </div>
    </section>
  );
};

export default ProductRange;

