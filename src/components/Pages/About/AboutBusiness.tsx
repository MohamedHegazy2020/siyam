import { factory1 } from '../../../constants'; 

import ImageContentSection from '../../blocks/ImageContentSection';
export default function AboutBusiness() {
  return (
    <>
      <ImageContentSection
        image={factory1}
        title="Siyam Industrial Group"
        introduction="About Our Business"
        backgroundClassName="bg-section-100"
      >
        <p className='text-sm md:text-base'>
          is specialized in developing and manufacturing OE, customized, and aftermarket, core and complete cooling
          products, radiators, charge air coolers, condensers, and cooling modules for all types of applications. For
          over 30 years, we have distinguished ourselves by providing high quality products, with superior services,
          delivered on-time and at a competitive price. We are ISO 9001:2015 certified. We offer a wide range of copper
          and aluminum radiators for passenger vehicles, trucks, tractors, heavy-duty equipment, Generators, Gen-sets.
        </p>
      </ImageContentSection>
    </>
  );
}
