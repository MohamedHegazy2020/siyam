import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection'
import { prodDev2, quality3, testVal2, testVal3 } from '../../../constants';
import ImagesRowSection from '../../blocks/ImagesRowSection';
import styles from '../../../utils/styles';

const TestingAndValidaitingSection = () => {
    return (
      <>
        <section className={'bg-section-100 bg-cover bg-no-repeat '+styles.padding}>
          <ImageContentSection title="Testing & Validation" titleClassName="text-black" image={prodDev2}>
            <p className="text-sm my-4">
              All our products are thoroughly tested at our world class testing laboratory and lab partners in Europe.
              Our labs has all the facilities needed for testing quality, functionality, and durability.
            </p>
            <ul className="list-disc list-inside ">
              <li>World-Class Laboratory Testing.</li>
              <li>Complete Pressure Cycle Testing.</li>
              <li>OEM Standards Validation.</li>
              <li>PerformanceProductTesting.</li>
            </ul>
          </ImageContentSection>
          <ImagesRowSection images={[testVal2, testVal3, quality3]} />
        </section>
      </>
    );
}

export default TestingAndValidaitingSection