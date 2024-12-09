import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Milestones = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const milestoneData = [
    {
      id: 1,
      title: 'CodeChef Achievement',
      description: 'Solved 1000+ Problems on CodeChef.',
      image: '/Bullseye_Arrow_Business_Goals_Sign_Symbol.png',
    },
    {
      id: 2,
      title: 'CodeChef Streak',
      description: 'Maintained 25 days streak on CodeChef.',
      image: '/Bullseye_Arrow_Business_Goals_Sign_Symbol.png',
    },
    {
      id: 3,
      title: 'HackerRank Stars',
      description: 'Earned 5 star for Python and C++ on HackerRank.',
      image: '/Bullseye_Arrow_Business_Goals_Sign_Symbol.png',
    },
    {
      id: 4,
      title: 'LeetCode Achievement',
      description: 'Solved 100+ Problems on LeetCode.',
      image: '/Bullseye_Arrow_Business_Goals_Sign_Symbol.png',
    },
    {
      id: 5,
      title: 'GitHub Streak',
      description: 'Maintained 41 days streak on GitHub.',
      image: '/Bullseye_Arrow_Business_Goals_Sign_Symbol.png',
    },
    {
      id: 6,
      title: 'Research Paper Experience',
      description: 'Had the Experience to write a Research Paper along with Great Minds.',
      image: '/Bullseye_Arrow_Business_Goals_Sign_Symbol.png',
    },
  ];

  return (
    <div className="py-10 flex flex-col items-center relative">
      {/* Milestone Grid */}
      <div className="grid grid-cols-2 gap-8 md:gap-16 lg:grid-cols-3 lg:gap-12">
        {milestoneData.map((milestone) => (
          <motion.div
            key={milestone.id}
            className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{
              scale: 1.5,
              rotate: 360,
              transition: { duration: 0.6 },
            }}
            onClick={() => setSelectedMilestone(milestone)}
          >
            <div
              className="relative w-full h-full mix-blend-color-dodge"
              style={{ backgroundBlendMode: 'color-dodge' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-600 rounded-full border-4 border-white"></div>
              <div className="absolute inset-4 bg-white rounded-full border-4 border-gray-300"></div>
              <div className="absolute inset-8 bg-gradient-to-b from-gray-200 to-white rounded-full"></div>

              {/* Image */}
              <motion.img
                src={milestone.image}
                alt={milestone.title}
                className="absolute inset-0 w-full h-full object-cover rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 1.5,
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Milestone Details Card */}
      {selectedMilestone && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedMilestone(null)}
        >
          <motion.div
            className="bg-[rgba(65,47,123,0.9)] p-8 rounded-lg shadow-lg text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <h3 className="text-2xl text-accent font-bold mb-4">{selectedMilestone.title}</h3>
            <p className="text-gray-100">{selectedMilestone.description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Milestones;