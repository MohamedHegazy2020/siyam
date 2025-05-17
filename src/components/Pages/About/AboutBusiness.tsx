import { factory1 } from '../../../constants';

import ImageContentSection from '../../blocks/ImageContentSection/ImageContentSection';
export default function AboutBusiness() {
  return (
    <>
      <ImageContentSection image={factory1} padding backgroundClassName="bg-section-100">
        <span className="  font-bebas text-xl bg-gradient-linear bg-clip-text w-fit text-transparent "> About Our Business </span>
        <h2 className="text-4xl font-bebas text-primary ">Siyam Industrial Group</h2>
        <p className="text-lg  ">
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
