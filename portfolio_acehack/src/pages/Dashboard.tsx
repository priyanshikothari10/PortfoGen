import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface Portfolio {
  id: string;
  title: string;
  lastEdited: string;
  template: string;
  status: 'draft' | 'published';
}

const Dashboard = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([
    {
      id: '1',
      title: 'Software Developer Portfolio',
      lastEdited: '2024-03-29',
      template: 'Modern Minimal',
      status: 'published'
    },
    {
      id: '2',
      title: 'UX Designer Portfolio',
      lastEdited: '2024-03-28',
      template: 'Creative Showcase',
      status: 'draft'
    }
  ]);

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <h1 className="text-3xl font-bold">My Portfolios</h1>
          <Link
            to="/builder"
            className="glass-button"
          >
            Create New Portfolio
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolios.map((portfolio, index) => (
            <motion.div
              key={portfolio.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{portfolio.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  portfolio.status === 'published' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {portfolio.status}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-400">
                <p>Template: {portfolio.template}</p>
                <p>Last edited: {portfolio.lastEdited}</p>
              </div>

              <div className="flex gap-3 mt-6">
                <Link
                  to={`/builder/${portfolio.id}`}
                  className="flex-1 text-center glass-button"
                >
                  Edit
                </Link>
                <button className="flex-1 text-center px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors">
                  Share
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 