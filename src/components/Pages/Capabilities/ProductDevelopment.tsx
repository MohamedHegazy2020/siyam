import styles from '../../../utils/styles';
import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
import { prodDev1, prodDev2, prodDev3, prodDev4 } from '../../../constants';
import ImagesRowSection from '../../blocks/ImagesRowSection';

const ProductDevelopment = () => {
  return (
    <>
      <section className={'bg-accent-900 ' + styles.padding}>
        <ImageContentSection padding  image={prodDev1} >
          <h2 className="text-3xl   text-white">Product development</h2>
          <p className="text-white text-sm my-2">
            All parts goes through special lab testing to ensure that products meets or exceeds OEM standards and
            specifications
          </p>
          <ul className="text-white list-disc list-inside">
            <li> In-house design, development, and prototyping.</li>
            <li> Product fabrication feasibility.</li>
            <li> Process & material optimization.</li>
            <li> CNC programming.</li>
          </ul>
        </ImageContentSection>
        <ImagesRowSection images={[prodDev2, prodDev3, prodDev4]} />
      </section>
    </>
  );
};

export default ProductDevelopment;
