
import styles from '../../../utils/styles';
import { AbeerSyam, ibrahimSyam, walidSiyam, yazanSiyam } from '../../../constants';


const MemberCard = ({ image, title, description }: { image: string; title: string; description: string }) => {
  return (
    <div className="card   ">
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body pt-4 bg-transparent">
        <h2 className="text-2xl text-center w-full font-bebas text-primary">{title}</h2>
        <p className="text-center font-montserrat  text-bold text-primary text-sm capitalize">{description}</p>
      </div>
    </div>
  );
};
const GenerationsMembers = () => {
  return (
    <>
      <div className={'bg-section-300 ' + styles.padding}>
        <div className="flex flex-col items-center justify-center py-14 gap-4">
          <p className="text-center text-sm text-white font-light">Generations Members</p>
          <h2 className="text-center text-2xl font-semibold text-white">Meet our professional</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
          <MemberCard image={ibrahimSyam} title={'Ibrahim Syam'} description={'founder'} />
          <MemberCard image={AbeerSyam} title={'Abeer Syam'} description={'CEO'} />
          <MemberCard image={yazanSiyam} title={'Yazan Syam'} description={'North American Operations'} />
          <MemberCard image={walidSiyam} title={'Walid Syam'} description={'General Manager'} />
        </div>
      </div>
     
    </>
  );
};

export default GenerationsMembers;
