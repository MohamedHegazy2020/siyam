
import AboutBusiness from './AboutBusiness';
import AboutHero from './AboutHero';
import AboutChairman from './AboutChairman';
import VisionAndMission from './VisionAndMission';
import TechincalCollebration from './TechincalCollebration';
import GenerationsMembers from '../Home/GenerationsMembers';
export default function About() {
  return (
    <>
     
      <section>
        <AboutHero />
        <AboutBusiness />
        <AboutChairman />
        <VisionAndMission />
        <TechincalCollebration />
        <GenerationsMembers />
      </section>
    </>
  );
}
