import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
import { qc1, qc2, qc3, quality1 } from '../../../constants';
import styles from '../../../utils/styles';
import ImagesRowSection from '../../blocks/ImagesRowSection';

const OurQualityControl = () => {
  return (
    <>
      <section className={'bg-gradient-radial ' + styles.padding}>
        <ImageContentSection padding image={quality1} >
          <h2 className="text-3xl   text-black">Our Quality Control</h2>
          <ul
            className="list-disc
            list-inside text-sm font-semibold"
          >
            <li>Total quality management</li>
            <li>100% tested products</li>
            <li> Full dimensional and fitment control</li>
            <li>Control and Process Charts for all production line</li>
            <li>FQC’s with every shipment</li>
            <li>ISO CERTIFIED</li>
          </ul>
        </ImageContentSection>
        <ImagesRowSection images={[qc1, qc2, qc3]} />
      </section>
    </>
  );
};

export default OurQualityControl;
