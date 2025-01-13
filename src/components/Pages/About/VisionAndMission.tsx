import ImageContentSubsection from '../../blocks/ImageContentSubsection'
import {motion} from 'framer-motion'
import { group1, group2 } from '../../../assets';
import { fadeIn } from '../../../utils/motion';
export default function VisionAndMission() {
  return (
    <div className="bg-section-200 ">
      <ImageContentSubsection image={group1} title="Our Mission" imageLast>
        <motion.p {...fadeIn(1, 1.5)} className="text-white">
          Our Mission is to add value to our customers, suppliers and employees by providing superior products and
          services on time and at a competitive price, whilst practicing honesty and fairness throughout our
          corporation.
        </motion.p>
      </ImageContentSubsection>
      <ImageContentSubsection image={group2} title="Our Vision">
        <motion.p {...fadeIn(1, 1.5)} className="text-white">
          Our vision is to become a leading developer and manufacturer of OE, customized, and aftermarket, core and
          complete radiators.
        </motion.p>
      </ImageContentSubsection>
    </div>
  );
}
