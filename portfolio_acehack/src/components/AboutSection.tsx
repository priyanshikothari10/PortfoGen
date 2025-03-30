import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'Web Development', level: 85 },
    { name: 'Mobile Design', level: 80 },
    { name: 'Brand Identity', level: 85 },
  ];

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            With over 5 years of experience in digital design and development, I create beautiful and functional experiences that help businesses grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium">Senior UI/UX Designer</h4>
                <p className="text-gray-400">Tech Company • 2020 - Present</p>
                <p className="mt-2 text-gray-300">
                  Leading the design team in creating innovative user experiences and maintaining design systems.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium">UI Designer</h4>
                <p className="text-gray-400">Design Agency • 2018 - 2020</p>
                <p className="mt-2 text-gray-300">
                  Created user interfaces for various clients across different industries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 