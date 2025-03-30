import React, { useState } from 'react';
import { ArrowRight, Download, CheckCircle, Loader2 } from 'lucide-react';

const PortfolioGenerator = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    profession: '',
    bio: '',
    skills: '',
    projects: '',
    contact: '',
    style: 'modern'
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFeedbackReady, setIsFeedbackReady] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI processing
    setTimeout(() => {
      setIsGenerating(false);
      setIsFeedbackReady(true);
      setDownloadUrl('portfolio.html'); // In real app, this would be the actual file URL
      setStep(3);
    }, 3000);
  };

  return (
    <section id="portfolio-generator" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">AI Portfolio Generator</h2>
          <p className="text-xl text-gray-400">Get your personalized portfolio in minutes</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 1 ? 'bg-orange-500' : 'bg-gray-700'
            }`}>
              1
            </div>
            <div className={`h-1 w-24 mx-4 ${
              step >= 2 ? 'bg-orange-500' : 'bg-gray-700'
            }`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 2 ? 'bg-orange-500' : 'bg-gray-700'
            }`}>
              2
            </div>
            <div className={`h-1 w-24 mx-4 ${
              step >= 3 ? 'bg-orange-500' : 'bg-gray-700'
            }`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              step >= 3 ? 'bg-orange-500' : 'bg-gray-700'
            }`}>
              3
            </div>
          </div>
        </div>

        {/* Step 1: Input Form */}
        {step === 1 && (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Skills (comma-separated)</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="e.g., Web Design, UI/UX, Photography"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Projects (comma-separated)</label>
                <input
                  type="text"
                  name="projects"
                  value={formData.projects}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="e.g., E-commerce Website, Mobile App Design"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Contact Information</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="e.g., email@example.com, +1234567890"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio Style</label>
                <select
                  name="style"
                  value={formData.style}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                >
                  <option value="modern">Modern</option>
                  <option value="minimal">Minimal</option>
                  <option value="creative">Creative</option>
                  <option value="professional">Professional</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                Generate Portfolio
                <ArrowRight className="inline ml-2" size={20} />
              </button>
            </form>
          </div>
        )}

        {/* Step 2: Generation Progress */}
        {step === 2 && isGenerating && (
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-orange-500 animate-spin mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Generating Your Portfolio</h3>
            <p className="text-gray-400">Our AI is creating your personalized portfolio...</p>
          </div>
        )}

        {/* Step 3: Results and Download */}
        {step === 3 && isFeedbackReady && (
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-4">AI Feedback</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Layout Optimization</h4>
                    <p className="text-gray-400">Your portfolio layout has been optimized for maximum impact and user engagement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Content Enhancement</h4>
                    <p className="text-gray-400">Your content has been refined for better readability and SEO performance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Mobile Responsiveness</h4>
                    <p className="text-gray-400">Your portfolio is fully responsive and optimized for all devices.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <a
                href={downloadUrl}
                download
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 inline-flex items-center"
              >
                Download Portfolio
                <Download className="ml-2" size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGenerator; 