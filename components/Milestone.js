import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaStar, FaGithub, FaFileAlt } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiHackerrank } from 'react-icons/si';

const milestoneData = [
  {
    id: 1,
    title: 'CodeChef Achievement',
    description: 'Solved 1000+ Problems on CodeChef',
    icon: <SiCodechef className="text-5xl text-accent" />,
    date: 'March 2024',
    color: 'from-orange-600 to-red-600'
  },
  {
    id: 2,
    title: 'CodeChef Streak',
    description: 'Maintained 25 days streak on CodeChef',
    icon: <FaTrophy className="text-5xl text-accent" />,
    date: 'February 2024',
    color: 'from-yellow-600 to-amber-600'
  },
  {
    id: 3,
    title: 'HackerRank Stars',
    description: 'Earned 5 star for Python and C++ on HackerRank',
    icon: <SiHackerrank className="text-5xl text-accent" />,
    date: 'January 2024',
    color: 'from-green-600 to-emerald-600'
  },
  {
    id: 4,
    title: 'LeetCode Achievement',
    description: 'Solved 100+ Problems on LeetCode',
    icon: <SiLeetcode className="text-5xl text-accent" />,
    date: 'December 2023',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    id: 5,
    title: 'GitHub Streak',
    description: 'Maintained 41 days streak on GitHub',
    icon: <FaGithub className="text-5xl text-accent" />,
    date: 'November 2023',
    color: 'from-purple-600 to-violet-600'
  },
  {
    id: 6,
    title: 'Research Paper',
    description: 'Experience writing a Research Paper with industry experts',
    icon: <FaFileAlt className="text-5xl text-accent" />,
    date: 'October 2023',
    color: 'from-pink-600 to-rose-600'
  }
];

const Milestones = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {milestoneData.map((milestone) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: milestone.id * 0.1 }}
            className="group relative overflow-hidden rounded-xl bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
            <div className="p-8 relative z-10">
              <motion.div 
                className="flex justify-center mb-6"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {milestone.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-white text-center group-hover:text-accent transition-colors duration-300">
                {milestone.title}
              </h3>
              <p className="text-gray-400 mb-4 text-center font-medium">{milestone.date}</p>
              <p className="text-gray-300 text-center text-lg">{milestone.description}</p>
              <motion.div
                className="w-full h-1 bg-accent/20 mt-6 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: milestone.id * 0.2 }}
              >
                <motion.div
                  className="h-full bg-accent"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: milestone.id * 0.2 }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Milestones;