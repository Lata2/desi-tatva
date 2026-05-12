import './Home.css';

import HeroSection from '../HeroSection/HeroSection';
import BestSellers from '../BestSellers/BestSellers';
import ExperienceSection from '../ExperienceSection/ExperienceSection';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import StorySection from '../StorySection/StorySection';
import TrustStrip from '../TrustStrip/TrustStrip';
import ReviewsSection from '../ReviewsSection/ReviewsSection';
import NewsletterSection from '../NewsletterSection/NewsletterSection';
import MobileBuyBar from '../MobileBuyBar/MobileBuyBar';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import bgImg from '../../../image/desi-tatva-bg.png';

export default function Home() {
  return (
    <div
      className="home-page"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <HeroSection />
      <FeaturedProducts />
      <WhyChooseUs />

      {/* <BestSellers /> */}
      <ExperienceSection />
      <TrustStrip />
      <ReviewsSection />
      <StorySection />

      <NewsletterSection />
      <MobileBuyBar />
    </div>
  );
}''