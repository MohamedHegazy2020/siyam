import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
import { factroy700 } from '../../../constants';

const ProductExperience = () => {
  return (
    <ImageContentSection backgroundClassName="bg-section-100"  image={factroy700}>
      <h2 className="text-4xl font-bold text-white font-bebas md:text-7xl">30+ Years of Experience</h2>
      We take pride in being one of the top leaders in developing and manufacturing copper brass and aluminum radiators
      for the industry.Our 30+ years of experience means we recognize what it takes to have top-of-the-line radiators
      with offerings for Automotive, Heavy Duty, Industrial, and Agricultural applications with specifications that meet
      or exceed OEM standards
    </ImageContentSection>
  );
};

export default ProductExperience;
