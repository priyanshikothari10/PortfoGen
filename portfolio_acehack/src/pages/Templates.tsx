import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const templates = [
  {
    id: 'modern',
    name: 'Modern Minimal',
    description: 'Clean and professional design with focus on content',
    image: '/templates/modern.png',
    category: 'Professional'
  },
  {
    id: 'creative',
    name: 'Creative Showcase',
    description: 'Bold and artistic layout perfect for creative professionals',
    image: '/templates/creative.png',
    category: 'Creative'
  },
  {
    id: 'developer',
    name: 'Developer Portfolio',
    description: 'Technical-focused template with code snippets and project showcase',
    image: '/templates/developer.png',
    category: 'Technical'
  },
  {
    id: 'resume',
    name: 'Resume Style',
    description: 'Traditional resume layout with modern styling',
    image: '/templates/resume.png',
    category: 'Professional'
  }
];

const Templates = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Choose Your Perfect Template
          </h1>
          <p className="text-xl text-gray-400">
            Select from our collection of professionally designed templates
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-colors"
            >
              <div className="aspect-[4/3] bg-gray-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-400">Template Preview</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{template.name}</h3>
                  <span className="text-sm text-blue-400">{template.category}</span>
                </div>
                <p className="text-gray-400 mb-4">{template.description}</p>
                
                <Link
                  to={`/builder?template=${template.id}`}
                  className="inline-block w-full text-center px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >
                  Use Template
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Templates; 