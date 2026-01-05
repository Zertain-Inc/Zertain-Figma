import Hero from '@/components/landing/Hero';
import Partners from '@/components/landing/Partners';
import MissionVision from '@/components/landing/MissionVision';
import Features from '@/components/landing/Features';
import Services from '@/components/landing/Services';
import AIInnovation from '@/components/landing/AIInnovation';
import Metrics from '@/components/landing/Metrics';
import Leadership from '@/components/landing/Leadership';
import CaseStudies from '@/components/landing/CaseStudies';
import FAQ from '@/components/landing/FAQ';
import Testimonials from '@/components/landing/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <MissionVision />
      <Features />
      <Services />
      <AIInnovation />
      <Metrics />
      <Leadership />
      <CaseStudies />
      <FAQ />
      <Testimonials />
      <Partners />
    </>
  );
}
