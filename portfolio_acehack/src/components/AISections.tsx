import { CheckCircle } from 'lucide-react';

const AISections = () => {
  return (
    <>
      {/* AI Customize Section */}
      <section id="ai-customize" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Portfolio Customization</h2>
            <p className="text-xl text-gray-400">Let AI help you create a unique portfolio that stands out</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Smart Layout Suggestions</h3>
              <p className="text-gray-400 mb-6">Our AI analyzes your content and suggests the perfect layout to showcase your work.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Content-based layout optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Smart color scheme generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Typography recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Personalized Content</h3>
              <p className="text-gray-400 mb-6">AI helps you write compelling content that resonates with your target audience.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Bio and description generation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Project descriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>SEO optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feedback Section */}
      <section id="ai-feedback" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Portfolio Feedback</h2>
            <p className="text-xl text-gray-400">Get instant feedback and suggestions to improve your portfolio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Performance Analysis</h3>
              <p className="text-gray-400 mb-6">Our AI analyzes your portfolio's performance and provides actionable insights.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>User engagement metrics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Loading speed optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Mobile responsiveness check</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4">Content Enhancement</h3>
              <p className="text-gray-400 mb-6">Get AI-powered suggestions to improve your portfolio's content.</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Grammar and style check</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Keyword optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  <span>Call-to-action suggestions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISections; 