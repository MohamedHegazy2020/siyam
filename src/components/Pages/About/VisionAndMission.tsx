
import { group1 , group2 } from '../../../constants';
import ImageContentSection from '../../blocks/ImageContentSection';
export default function VisionAndMission() {
  return (
    <div className="bg-section-200 ">
      <ImageContentSection image={group1} title="Our Mission" imageLast titleClassName='text-white'>
        <p className="text-white">
          Our Mission is to add value to our customers, suppliers and employees by providing superior products and
          services on time and at a competitive price, whilst practicing honesty and fairness throughout our
          corporation.
        </p>
      </ImageContentSection>
      <ImageContentSection image={group2} title="Our Vision" titleClassName='text-white'>
        <p className="text-white">
          Our vision is to become a leading developer and manufacturer of OE, customized, and aftermarket, core and
          complete radiators.
        </p>
      </ImageContentSection>
    </div>
  );
}
