import "./experience.css";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const textVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.3,
      ease: "easeOut",
    },
  },
};
const itemVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  console.log("---Experience", isInView);

  const experiences = [
    {
      id: 1,
      company: "Capgemini",
      role: "Software Engineer",
      duration: "Apr 2023 - Present",
      description:
        "Worked on developing and maintaining scalable web applications, collaborating with cross-functional teams to deliver high-quality software solutions.",
      image: "/capgemini.png",
    },
    {
      id: 2,
      company: "Kore.ai",
      role: "Software Developer",
      duration: "Dec 2022 - Mar 2023",
      description:
        "Worked on chatbot development using Express.js, React.js, and JavaScript. Collaborated with teams using Jira for task management and ensured seamless integration of conversational AI solutions.",
      image: "/kore-ai.png",
    },
  ];

  return (
    <div className="experience" ref={ref}>
      <motion.h1
        variants={textVariants}
        //initial={{ y: -100, opacity: 0 }}
        //animate={{ y: 0, opacity: 1 }}
        animate={isInView ? "animate" : "initial"}
        transition={{ duration: 1 }}
        className="experienceTitle"
      >
        My Experience
      </motion.h1>
      <motion.div
        className="experienceList"
        variants={listVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        {experiences.map((exp) => (
          <>
            <motion.div
              key={exp.id}
              className="experienceItem"
              variants={itemVariants}
              //initial={{ x: 100, opacity: 0 }} // Slide in from the right
              //animate={{ x: 0, opacity: 1 }}
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.5, delay: exp.id * 0.3 }} // Delay for staggered animation
            >
              <img
                src={exp.image}
                alt={exp.company}
                className="experienceImg"
              />
              <div className="experienceDetails">
                <h2>
                  <span>{exp.company}</span>
                  <span>{exp.duration}</span>
                </h2>
                <h3>{exp.role}</h3>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          </>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
