import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaUsers } from "react-icons/fa";

const roles = [
  {
    title: "Technical Team Member",
    organization: "North East Club",
    period: "Oct 2024 - Present",
    description: "Technical team member at VIT Bhopal, contributing to projects and events.",
    icon: <FaUsers className="text-4xl text-accent" />,
    skills: ["Project Management", "Team Leadership", "Technical Planning"]
  },
  {
    title: "Contributor",
    organization: "Hacktoberfest '24",
    period: "Oct 2024 - Oct 2024",
    description: "Completed Hacktoberfest '24 with 5 PRs merged.",
    icon: <FaCode className="text-4xl text-accent" />,
    skills: ["Open Source", "Git", "Collaboration"]
  },
  {
    title: "Contributor",
    organization: "GSSOC '24 Extd.",
    period: "Oct 2024 - Nov 2024",
    description: "Participated in GirlScript Summer of Code as a contributor.",
    icon: <FaBriefcase className="text-4xl text-accent" />,
    skills: ["Problem Solving", "Code Review", "Documentation"]
  }
];

const TechnicalRoles = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[rgba(65,47,123,0.15)] rounded-xl p-6 hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">{role.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white">{role.title}</h3>
              <p className="text-accent mb-2">{role.organization}</p>
              <p className="text-sm text-gray-400 mb-4">{role.period}</p>
              <p className="text-gray-300 mb-4">{role.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {role.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
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