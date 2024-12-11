import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaPython,
} from "react-icons/fa";

import {
  SiRuby,
  SiC,
  SiCplusplus,
  SiJupyter,
  SiGooglecolab,
  SiGit,
  SiGithub,
  SiDocker,
  SiPandas,
  SiMysql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

// about data
export const aboutData = [
  {
    title: "Education",
    info: [
      {
        title: "Bachelors",
        stage: "VIT Bhopal University - B.Tech CSE (AI&ML) - 2027",
      },
      {
        title: "Higher Secondary Education",
        stage: "Pragya Academy - 2023",
      },
      {
        title: "Secondary Education",
        stage: "Carmel School - 2021",
      },
    ],
  },
  {
    title: "skills",
    info: [
      {
        title: "Programming Languages",
        icons: [
          <SiCplusplus key="cplusplus" />,
          <SiC key="c" />,
          <FaJava key="java" />,
          <FaPython key="python" />,
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <SiRuby key="ruby" />,
        ],
      },
      {
        title: "Tools",
        icons: [
          <VscVscode key="vscode" />,
          <SiGithub key="github" />,
          <SiGit key="git" />,
          <SiGooglecolab key="googlecolab" />,
          <SiJupyter key="jupyter" />,
          <SiPandas key="pandas" />,
          <SiMysql key="mysql" />,
          <SiDocker key="docker" />,
        ],
      },
      {
        title: "Technologies",
        stage: "AI/ML, Web Development, Gen AI",
      },
      {
        title: "Soft Skills",
        stage: "Problem-solving, teamwork, communication skills, and polyglot",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Technical Team Member at North East Club",
        stage: "Oct &apos;24 (currently working)",
      },
      {
        title: "Contributor at Hacktoberfest &apos;24",
        stage: "Oct &apos;24 - Nov &apos;24",
      },
      {
        title: "Contributor at GSSOC Ext &apos;24",
        stage: "Sep &apos;24 - Nov &apos;24",
      },
    ],
  },
];

import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import Countup from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Just a <span className="text-accent">Dreamer</span> Turning Code into Reality 🚀
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m not just a B.Tech (AI & ML) student at VIT Bhopal—I&apos;m a coder with a flair for creating magic at the crossroads of AI, web development, and design. Whether it&apos;s building Gen AI models, crafting intuitive web experiences, or contributing to open-source platforms like Hacktoberfest and GSSOC, I&apos;m always pushing boundaries. When I&apos;m not solving real-world problems through code, you&apos;ll catch me sketching my ideas, or scoring goals on the football field—because creativity fuels innovation.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl: gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  years of experience
                </div>
              </div>
              {/* Finished Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={4} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
              {/* Ongoing Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <Countup start={0} end={4} duration={6} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Ongoing Projects
                </div>
              </div>
              {/* Code commits */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 flex items-center">
                  <Countup start={0} end={1000} duration={6} />
                  <span className="ml-1">+</span>
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  CODE COMMITS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex
                      ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                      : ""
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">:</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;