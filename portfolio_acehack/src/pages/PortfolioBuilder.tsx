import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AIFeedback from '../components/AIFeedback';

const steps = [
  { id: 'personal', title: 'Personal Info' },
  { id: 'experience', title: 'Experience' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'customize', title: 'Customize' },
  { id: 'preview', title: 'Preview' }
];

const PortfolioBuilder = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personal: {
      name: '',
      title: '',
      bio: '',
      email: '',
      location: ''
    },
    experience: [],
    skills: [],
    projects: [],
    customization: {
      theme: 'dark',
      primaryColor: '#3B82F6',
      fontFamily: 'Inter',
      layout: 'modern'
    }
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="glass-input"
            />
            <input
              type="text"
              placeholder="Professional Title"
              className="glass-input"
            />
            <textarea
              placeholder="Bio"
              className="glass-input"
              rows={4}
            />
            <input
              type="email"
              placeholder="Email"
              className="glass-input"
            />
            <input
              type="text"
              placeholder="Location"
              className="glass-input"
            />
          </div>
        );
      case 4: // Customize step
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Theme</label>
              <select className="glass-input">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">System</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Primary Color</label>
              <div className="flex gap-2">
                {['#3B82F6', '#10B981', '#8B5CF6', '#EF4444'].map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Font Family</label>
              <select className="glass-input">
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Poppins">Poppins</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Layout</label>
              <select className="glass-input">
                <option value="modern">Modern</option>
                <option value="classic">Classic</option>
                <option value="minimal">Minimal</option>
              </select>
            </div>
          </div>
        );
      default:
        return (
          <div className="text-center text-gray-400">
            Step content coming soon...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-400'
                  }`}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-24 h-1 mx-2 ${
                      index < currentStep ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="glass-card p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">
                    {steps[currentStep].title}
                  </h2>
                  
                  {renderStepContent()}

                  <div className="flex justify-between mt-8">
                    <button
                      onClick={handleBack}
                      disabled={currentStep === 0}
                      className="px-6 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleNext}
                      className="glass-button"
                    >
                      {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Preview & AI Feedback Section */}
          <div className="space-y-6">
            {/* Preview */}
            <div className="glass-card p-6">
              <h2 className="text-2xl font-semibold mb-6">Live Preview</h2>
              <div className="aspect-[3/4] bg-gray-800 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold">Your Portfolio Preview</h3>
                  <p className="text-gray-400 mt-2">
                    Changes will appear here in real-time as you fill out the form.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Feedback */}
            {currentStep > 0 && <AIFeedback />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioBuilder; 