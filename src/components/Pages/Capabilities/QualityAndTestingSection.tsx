import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection'
import { quality1, quality2, quality3, quality4 } from '../../../constants';
import styles from '../../../utils/styles';
import ImagesRowSection from '../../blocks/ImagesRowSection';

const QualityAndTestingSection = () => {
    return (
      <>
        <section className={'bg-accent-900 '+styles.padding}>
          <ImageContentSection image={quality1} titleClassName="text-white" title="Quality and testing laboratory">
            <p className='text-white'>
              All our products are thoroughly tested at our world class-testing laboratory. The laboratory has all the
              facilities needed for testing quality, functionality, and durability.Tests includes measuring key
            </p>
            <p className='text-white'>
              elements such as cooling capacity, pressure strength, thermal strength, vibration resistance, and
              corrosion resistance. This ensures that all our products perform at their best, and comply with the given
              standards and specifications.
            </p>          </ImageContentSection>
  
                
                <ImagesRowSection images={[quality4, quality3, quality2]}/>
            </section>
      </>
    );
}

export default QualityAndTestingSection