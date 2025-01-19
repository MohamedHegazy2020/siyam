
import { chairman, qualityPolicy } from '../../../constants';
import ImageContentSection from '../../blocks/ImageContentSection';
import PrimaryBtn from '../../blocks/PrimaryBtn';

export default function AboutChairman() {
  return (
    <div className=" bg-gradient-radial">
      <ImageContentSection
        title="Ibrahim Siyam, Chairman"
        introduction="A Word From Our Chairman"
        image={chairman}
        imageLast
      >
        <p className="mb-4">
          Since I started this business in 1992, as a small radiator factory in Jordan, our target has been to establish
          an outstanding brand and reputation for our products and services. We achieve this target by being honest with
          our customers, meeting their expectations, and investing in our capabilities. As the world is changing fast,
          we are changing with it. At Ibrahim Siyam Industrial Group, we are committed to continuously improve our
          processes, use the latest technology, and develop our products to exceed our customer’s expectation. Our
          strategy has placed us amongst the leading radiator manufacturers in the Arab world, enabling us to supply our
          product to both OEM & after market in more than 26 countries in Asia, Africa, Europe and North America. I
          would like to thank our customers, suppliers, employees and my family for their continious support to achieve
          this vision.
        </p>
        <a href={qualityPolicy} target="_self" rel="noopener noreferrer">
          <PrimaryBtn rounded>Quality Policy</PrimaryBtn>
        </a>
      </ImageContentSection>
    </div>
  );
}
