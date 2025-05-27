import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaCode, FaStar, FaGithub, FaFileAlt } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiHackerrank } from 'react-icons/si';

const milestoneData = [
  {
    id: 1,
    title: 'CodeChef Achievement',
    description: 'Solved 1000+ Problems on CodeChef',
    icon: <SiCodechef className="text-4xl text-accent" />,
    date: 'March 2024'
  },
  {
    id: 2,
    title: 'CodeChef Streak',
    description: 'Maintained 25 days streak on CodeChef',
    icon: <FaTrophy className="text-4xl text-accent" />,
    date: 'February 2024'
  },
  {
    id: 3,
    title: 'HackerRank Stars',
    description: 'Earned 5 star for Python and C++ on HackerRank',
    icon: <SiHackerrank className="text-4xl text-accent" />,
    date: 'January 2024'
  },
  {
    id: 4,
    title: 'LeetCode Achievement',
    description: 'Solved 100+ Problems on LeetCode',
    icon: <SiLeetcode className="text-4xl text-accent" />,
    date: 'December 2023'
  },
  {
    id: 5,
    title: 'GitHub Streak',
    description: 'Maintained 41 days streak on GitHub',
    icon: <FaGithub className="text-4xl text-accent" />,
    date: 'November 2023'
  },
  {
    id: 6,
    title: 'Research Paper',
    description: 'Experience writing a Research Paper with industry experts',
    icon: <FaFileAlt className="text-4xl text-accent" />,
    date: 'October 2023'
  }
];

const Milestones = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {milestoneData.map((milestone) => (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: milestone.id * 0.1 }}
            className="bg-[rgba(65,47,123,0.15)] rounded-xl p-6 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {milestone.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{milestone.title}</h3>
              <p className="text-gray-400 mb-4">{milestone.date}</p>
              <p className="text-gray-300">{milestone.description}</p>
              <motion.div
                className="w-full h-1 bg-accent/20 mt-4 rounded-full overflow-hidden"
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