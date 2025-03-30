import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

const features = [
  {
    title: "AI-Powered Content",
    description: "Our AI analyzes your information and suggests the best way to present your skills and experience."
  },
  {
    title: "Modern Templates",
    description: "Choose from a variety of modern, responsive templates designed to showcase your work effectively."
  },
  {
    title: "Real-time Preview",
    description: "See your portfolio come to life with our real-time preview feature. Make changes and see them instantly."
  }
];

export default LandingPage; 