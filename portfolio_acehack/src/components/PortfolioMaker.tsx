import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
  };
  about: string;
  skills: string[];
  education: {
    institution: string;
    degree: string;
    year: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }[];
}

const PortfolioMaker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [portfolioData, setPortfolioData] = useState<PortfolioData>({
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
    },
    about: '',
    skills: [],
    education: [],
    projects: [],
  });

  const [feedback, setFeedback] = useState<string>('');
  const [aiFeedback, setAiFeedback] = useState<string>('');

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (!portfolioData.personalInfo.name || !portfolioData.personalInfo.email) {
          setFeedback('Please fill in your name and email at minimum.');
          return false;
        }
        break;
      case 2:
        if (!portfolioData.about) {
          setFeedback('Please add a brief description about yourself.');
          return false;
        }
        break;
      case 3:
        if (portfolioData.skills.length === 0) {
          setFeedback('Please add at least one skill.');
          return false;
        }
        break;
      case 4:
        if (portfolioData.education.length === 0) {
          setFeedback('Please add at least one education entry.');
          return false;
        }
        break;
    }
    setFeedback('');
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const generateAIFeedback = () => {
    // Simulate AI feedback based on portfolio content
    const feedback = [];
    
    // Personal Info Feedback
    if (portfolioData.personalInfo.title) {
      feedback.push('Your professional title is well-defined.');
    } else {
      feedback.push('Consider adding a professional title to make your portfolio more impactful.');
    }

    // About Section Feedback
    if (portfolioData.about.length > 100) {
      feedback.push('Your about section is detailed and engaging.');
    } else {
      feedback.push('Your about section could be more detailed to better showcase your personality.');
    }

    // Skills Feedback
    if (portfolioData.skills.length > 5) {
      feedback.push('You have a diverse set of skills that will impress potential employers.');
    } else {
      feedback.push('Consider adding more skills to showcase your expertise.');
    }

    // Education Feedback
    if (portfolioData.education.length > 0) {
      feedback.push('Your educational background is well-presented.');
    }

    // Projects Feedback
    if (portfolioData.projects.length > 0) {
      feedback.push('Your project showcase demonstrates practical experience.');
    } else {
      feedback.push('Adding some projects would make your portfolio more compelling.');
    }

    setAiFeedback(feedback.join(' '));
  };

  const generateHTML = () => {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.personalInfo.name}'s Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
            color: #e2e8f0;
        }
        .glass-card {
            background: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .gradient-text {
            background: linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .skill-tag {
            background: rgba(59, 130, 246, 0.1);
            border: 1px solid rgba(59, 130, 246, 0.2);
        }
        .project-card {
            background: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(59, 130, 246, 0.2);
            transition: transform 0.3s ease;
        }
        .project-card:hover {
            transform: translateY(-5px);
        }
    </style>
</head>
<body class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold mb-2 gradient-text">${portfolioData.personalInfo.name}</h1>
            <p class="text-xl text-blue-400">${portfolioData.personalInfo.title}</p>
            <div class="mt-2 text-gray-400">
                <p>${portfolioData.personalInfo.email} | ${portfolioData.personalInfo.phone}</p>
                <p>${portfolioData.personalInfo.location}</p>
            </div>
        </header>

        <section class="mb-12 glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-bold mb-4 gradient-text">About Me</h2>
            <p class="text-gray-300">${portfolioData.about}</p>
        </section>

        <section class="mb-12 glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-bold mb-4 gradient-text">Skills</h2>
            <div class="flex flex-wrap gap-2">
                ${portfolioData.skills.map(skill => `
                    <span class="skill-tag px-3 py-1 rounded-full text-blue-400">${skill}</span>
                `).join('')}
            </div>
        </section>

        <section class="mb-12 glass-card p-8 rounded-xl">
            <h2 class="text-2xl font-bold mb-4 gradient-text">Education</h2>
            ${portfolioData.education.map(edu => `
                <div class="mb-4">
                    <h3 class="font-bold text-blue-400">${edu.degree}</h3>
                    <p class="text-gray-400">${edu.institution} - ${edu.year}</p>
                </div>
            `).join('')}
        </section>

        <section class="mb-12">
            <h2 class="text-2xl font-bold mb-4 gradient-text">Projects</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${portfolioData.projects.map(project => `
                    <div class="project-card p-6 rounded-xl">
                        <h3 class="font-bold text-blue-400 mb-2">${project.title}</h3>
                        <p class="text-gray-300 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${project.technologies.map(tech => `
                                <span class="skill-tag px-2 py-1 rounded-full text-sm text-blue-400">${tech}</span>
                            `).join('')}
                        </div>
                        <a href="${project.link}" class="text-blue-400 hover:text-blue-300 transition-colors">View Project →</a>
                    </div>
                `).join('')}
            </div>
        </section>
    </div>
</body>
</html>`;

    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${portfolioData.personalInfo.name.toLowerCase().replace(/\s+/g, '-')}-portfolio.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 4) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded"
                    value={portfolioData.personalInfo.name}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        personalInfo: { ...portfolioData.personalInfo, name: e.target.value },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Professional Title"
                    className="w-full p-2 border rounded"
                    value={portfolioData.personalInfo.title}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        personalInfo: { ...portfolioData.personalInfo, title: e.target.value },
                      })
                    }
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded"
                    value={portfolioData.personalInfo.email}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        personalInfo: { ...portfolioData.personalInfo, email: e.target.value },
                      })
                    }
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full p-2 border rounded"
                    value={portfolioData.personalInfo.phone}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        personalInfo: { ...portfolioData.personalInfo, phone: e.target.value },
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full p-2 border rounded"
                    value={portfolioData.personalInfo.location}
                    onChange={(e) =>
                      setPortfolioData({
                        ...portfolioData,
                        personalInfo: { ...portfolioData.personalInfo, location: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">About Me</h2>
                <textarea
                  className="w-full p-2 border rounded h-32"
                  placeholder="Tell us about yourself..."
                  value={portfolioData.about}
                  onChange={(e) =>
                    setPortfolioData({ ...portfolioData, about: e.target.value })
                  }
                />
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Skills</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolioData.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                    >
                      {skill}
                      <button
                        onClick={() =>
                          setPortfolioData({
                            ...portfolioData,
                            skills: portfolioData.skills.filter((_, i) => i !== index),
                          })
                        }
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add a skill"
                    className="flex-1 p-2 border rounded"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        const input = e.target as HTMLInputElement;
                        if (input.value.trim()) {
                          setPortfolioData({
                            ...portfolioData,
                            skills: [...portfolioData.skills, input.value.trim()],
                          });
                          input.value = '';
                        }
                      }
                    }}
                  />
                  <button
                    onClick={(e) => {
                      const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                      if (input.value.trim()) {
                        setPortfolioData({
                          ...portfolioData,
                          skills: [...portfolioData.skills, input.value.trim()],
                        });
                        input.value = '';
                      }
                    }}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Education</h2>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} className="mb-4 p-4 border rounded">
                    <div className="flex justify-between items-start">
                      <div>
                        <input
                          type="text"
                          placeholder="Institution"
                          className="w-full p-2 border rounded mb-2"
                          value={edu.institution}
                          onChange={(e) => {
                            const newEdu = [...portfolioData.education];
                            newEdu[index] = { ...edu, institution: e.target.value };
                            setPortfolioData({ ...portfolioData, education: newEdu });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Degree"
                          className="w-full p-2 border rounded mb-2"
                          value={edu.degree}
                          onChange={(e) => {
                            const newEdu = [...portfolioData.education];
                            newEdu[index] = { ...edu, degree: e.target.value };
                            setPortfolioData({ ...portfolioData, education: newEdu });
                          }}
                        />
                        <input
                          type="text"
                          placeholder="Year"
                          className="w-full p-2 border rounded"
                          value={edu.year}
                          onChange={(e) => {
                            const newEdu = [...portfolioData.education];
                            newEdu[index] = { ...edu, year: e.target.value };
                            setPortfolioData({ ...portfolioData, education: newEdu });
                          }}
                        />
                      </div>
                      <button
                        onClick={() =>
                          setPortfolioData({
                            ...portfolioData,
                            education: portfolioData.education.filter((_, i) => i !== index),
                          })
                        }
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() =>
                    setPortfolioData({
                      ...portfolioData,
                      education: [
                        ...portfolioData.education,
                        { institution: '', degree: '', year: '' },
                      ],
                    })
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Education
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {feedback && (
          <div className="mt-4 p-4 bg-yellow-100 text-yellow-800 rounded">
            {feedback}
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-4 py-2 rounded ${
              currentStep === 1
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gray-500 text-white hover:bg-gray-600'
            }`}
          >
            Back
          </button>
          {currentStep === 4 ? (
            <div className="flex flex-col items-end gap-4">
              <button
                onClick={generateAIFeedback}
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              >
                Get AI Feedback
              </button>
              {aiFeedback && (
                <div className="p-4 bg-purple-100 text-purple-800 rounded max-w-md">
                  {aiFeedback}
                </div>
              )}
              <button
                onClick={generateHTML}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Generate Portfolio
              </button>
            </div>
          ) : (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioMaker; 