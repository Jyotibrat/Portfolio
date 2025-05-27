import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaUsers, FaRocket } from "react-icons/fa";

const roles = [
  {
    title: "Technical Team Member",
    organization: "North East Club",
    period: "Oct 2024 - Present",
    description: "Technical team member at VIT Bhopal, contributing to projects and events.",
    icon: <FaUsers className="text-4xl text-accent" />,
    skills: ["Project Management", "Team Leadership", "Technical Planning"],
    color: "from-blue-600 to-purple-600"
  },
  {
    title: "Contributor",
    organization: "Hacktoberfest '24",
    period: "Oct 2024 - Oct 2024",
    description: "Completed Hacktoberfest '24 with 5 PRs merged.",
    icon: <FaCode className="text-4xl text-accent" />,
    skills: ["Open Source", "Git", "Collaboration"],
    color: "from-orange-600 to-pink-600"
  },
  {
    title: "Contributor",
    organization: "GSSOC '24 Extd.",
    period: "Oct 2024 - Nov 2024",
    description: "Participated in GirlScript Summer of Code as a contributor.",
    icon: <FaRocket className="text-4xl text-accent" />,
    skills: ["Problem Solving", "Code Review", "Documentation"],
    color: "from-green-600 to-teal-600"
  }
];

const TechnicalRoles = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-xl bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
            <div className="p-8 relative z-10">
              <motion.div 
                className="flex justify-center mb-6"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {role.icon}
              </motion.div>
              <h3 className="text-2xl font-bold mb-2 text-white text-center group-hover:text-accent transition-colors duration-300">
                {role.title}
              </h3>
              <p className="text-accent mb-2 text-center font-medium">{role.organization}</p>
              <p className="text-sm text-gray-400 mb-4 text-center">{role.period}</p>
              <p className="text-gray-300 mb-6 text-center">{role.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {role.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1 }}
                    className="bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalRoles;