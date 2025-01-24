import { factory1, factroy400, factroy500, factroy600, factroy700, fan1, fan2 } from '../../../constants';
import styles from '../../../utils/styles';

const TechincalCollebration = () => {
  return (
    <section className={'bg-accent-900 ' + styles.padding}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-around justify-center md:col-span-2 gap-4 md:px-12">
          <h3 className="text-5xl font-bold text-white font-bebas md:text-9xl">Technical Collaboration</h3>
          <p className="text-white  md:text-2xl">
            Our technical collaboration with our strategic partner Sutton Stromart Canada enhanced our experience and
            supported us in bring a unique mix of world class technological advancements that lives up to our clients
            standards & specifications
          </p>
        </div>
        <div className="w-full">
          <img className="w-full" src={fan2} alt="fan" />
        </div>
        <div className="w-full">
          <img className="w-full" src={fan1} alt="fan" />
        </div>
      </div>
      <div className={'grid grid-cols-1 md:grid-cols-2 my-4 gap-4 ' + styles.paddingY}>
        <div className="flex w-full justify-center items-center">
          <img className="w-full rounded-xl" src={factroy400} alt="factory" />
        </div>
        <div className="flex flex-col items-around justify-center gap-4 md:px-12 order-first md:order-last">
          <h3 className="text-4xl font-bold text-white font-bebas md:text-7xl">
            Heavy Duty, Industrial Applications & Genets
          </h3>
          <p className="text-white  md:text-2xl">
            All custom engineered heat transfer products are designed and manufactured in Toronto by Sutton Stromart
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 my-4 gap-4">
        <div className="p-4">
          <img src={factroy500} alt="factory" className="w-full" />
        </div>
        <div className="p-4">
          <img src={factroy600} alt="factory" className="w-full" />
        </div>
        <div className="p-4">
          <img src={factroy700} alt="factory" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default TechincalCollebration;
