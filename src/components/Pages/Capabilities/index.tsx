import React from 'react'
import CapabilitiesHero from './CapabilitiesHero'
import QualityAndTestingSection from './QualityAndTestingSection'
import CapabilitiesCategories from './CapabilitiesCategories';
import ProductDevelopment from './ProductDevelopment';
import TestingAndValidaitingSection from './TestingAndValidaitingSection';
import OurQualityControl from './OurQualityControl';
import RawMaterialSection from './RawMaterialSection';

const Capabilities = () => {
  return (
    <>
      <CapabilitiesHero />
      <QualityAndTestingSection />
      <CapabilitiesCategories />
      <ProductDevelopment />
      <TestingAndValidaitingSection />
      <OurQualityControl />
      <RawMaterialSection/>
    </>
  );
}

export default Capabilities