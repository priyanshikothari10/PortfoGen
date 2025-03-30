import { motion } from 'framer-motion';
import { useState } from 'react';

interface FeedbackItem {
  type: 'skill' | 'experience' | 'project' | 'education';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

const AIFeedback = () => {
  const [feedback] = useState<FeedbackItem[]>([
    {
      type: 'skill',
      title: 'Missing Industry Skills',
      description: 'Consider adding React Native and TypeScript to your skillset as they are highly sought after in mobile development.',
      priority: 'high'
    },
    {
      type: 'experience',
      title: 'Experience Enhancement',
      description: 'Add more details about your leadership experience in the Senior Developer role.',
      priority: 'medium'
    },
    {
      type: 'project',
      title: 'Project Impact',
      description: 'Include metrics and results for your e-commerce project to better showcase its success.',
      priority: 'high'
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'low':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold">AI Portfolio Insights</h2>
      </div>

      <div className="space-y-4">
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-4 rounded-lg bg-white/5 border border-white/10"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{item.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(item.priority)}`}>
                {item.priority} priority
              </span>
            </div>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex justify-end">
        <button className="glass-button">
          Apply Suggestions
        </button>
      </div>
    </div>
  );
};

export default AIFeedback; 