import React, { useState } from 'react';
import PortfolioMaker from './components/PortfolioMaker';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [showPortfolioMaker, setShowPortfolioMaker] = useState(false);

  if (showPortfolioMaker) {
    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Portfolio Maker</h1>
              <p className="mt-1 text-sm text-gray-500">
                Create your professional portfolio in minutes
              </p>
            </div>
            <button
              onClick={() => setShowPortfolioMaker(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Back to Home
            </button>
          </div>
        </header>
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <PortfolioMaker />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Portfogen
            </span>
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#templates" className="text-gray-300 hover:text-white transition-colors">Templates</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button
                onClick={() => setShowPortfolioMaker(true)}
                className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                Start Building
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/10 rounded-full mb-8"
          >
            <span className="text-orange-500">The Future of Portfolio Creation</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
          >
            Create Your Dream Portfolio
            <span className="block mt-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              In Minutes, Not Hours
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Transform your professional presence with AI-powered portfolio creation. 
            Choose from stunning templates, customize with ease, and launch your perfect portfolio today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setShowPortfolioMaker(true)}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group text-lg"
            >
              Start Building Free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button
              className="px-8 py-4 border-2 border-orange-500/50 rounded-full font-semibold hover:bg-orange-500/10 transition-all duration-300 text-lg"
            >
              View Templates
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Features</h2>
            <p className="text-xl text-gray-400">Everything you need to create a stunning portfolio</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-Powered Creation',
                description: 'Let our AI help you create the perfect portfolio content and layout'
              },
              {
                title: 'Beautiful Templates',
                description: 'Choose from our collection of professionally designed templates'
              },
              {
                title: 'Easy Customization',
                description: 'Customize every aspect of your portfolio with our intuitive editor'
              },
              {
                title: 'Mobile Responsive',
                description: 'Your portfolio looks perfect on all devices and screen sizes'
              },
              {
                title: 'Instant Preview',
                description: 'See your changes in real-time with our live preview feature'
              },
              {
                title: 'One-Click Export',
                description: 'Export your portfolio as HTML and host it anywhere'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl hover:bg-gray-800/70 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-500/20 to-red-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Build Your Portfolio?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals who have already created their perfect portfolio website.
          </p>
          <button
            onClick={() => setShowPortfolioMaker(true)}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group"
          >
            Get Started Now
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</a>
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Portfogen. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;