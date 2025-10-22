
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ImpactEconomy from '../components/ImpactEconomy';
import AboutFounder from '../components/AboutFounder';
import ImpactJourney from '../components/ImpactJourney';
import ImpactAdvisory from '../components/ImpactAdvisory';
import EcosystemServices from '../components/EcosystemServices';
import CleanEnergy from '../components/CleanEnergy';
import VoicesOfImpact from '../components/VoicesOfImpact';
import Resources from '../components/Resources';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="snap-y snap-mandatory">
        <HeroSection />
        <ImpactEconomy />
        <AboutFounder />
        <ImpactJourney />
        <ImpactAdvisory />
        <EcosystemServices />
        <CleanEnergy />
        <VoicesOfImpact />
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
