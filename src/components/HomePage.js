import React from 'react';
import HomeHero from './HomeHero';
import HomeTextImage from './HomeTextImage';
import HomeBar from './HomeBar';
import HomeBar2 from './HomeBar2';
import HomeTextImageLeft from './HomeTextImageLeft';
import HomeFeatures from './HomeFeatures';
import Testimonials from './Testimonials';
import FullImageSection from './FullImageSection';
import ChallengeSlider from './ChallengeSlider';

import { featuresData } from '../mock/features';

const HomePage = () => (
  <>
    <HomeHero />
    <HomeTextImage />
    <HomeBar />
    <HomeTextImageLeft />
    <HomeBar2 />
    <HomeFeatures features={featuresData} />
    <ChallengeSlider />
    <FullImageSection />
    <Testimonials />
  </>
);

export default HomePage;
