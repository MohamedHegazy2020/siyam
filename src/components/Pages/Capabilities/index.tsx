import React from 'react'
import CapabilitiesHero from './CapabilitiesHero'
import QualityAndTestingSection from './QualityAndTestingSection'
import CapabilitiesCategories from './CapabilitiesCategories';
import ProductDevelopment from './ProductDevelopment';

const Capabilities = () => {
  return (
    <>
      <CapabilitiesHero />
      <QualityAndTestingSection />
      <CapabilitiesCategories />
      <ProductDevelopment/>
    </>
  );
}

export default Capabilities