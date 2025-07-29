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
import HomeBar3 from './HomeBar3';
import FullImageSection2 from './FullImageSection2';
import Photosection from './Photosection';
import Photosection2 from './Photosection2';

import { featuresData } from '../mock/features';

const HomePage = () => (
  <>
    <HomeHero />
    <HomeBar />
    <HomeTextImage />
    <HomeBar3 />
    <Photosection2 />
    <Photosection />
    <HomeTextImageLeft />
    <HomeBar2/>
    <HomeFeatures features={featuresData} />
    <ChallengeSlider />
    <FullImageSection />
    <Testimonials />
  </>
);

export default HomePage;
