import { motion } from "motion/react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360,
          background: [
            "linear-gradient(90deg, #bb86fc 0%, rgba(187,134,252,0) 100%)",
            "linear-gradient(180deg, #bb86fc 0%, rgba(187,134,252,0) 100%)",
            "linear-gradient(270deg, #bb86fc 0%, rgba(187,134,252,0) 100%)",
            "linear-gradient(360deg, #bb86fc 0%, rgba(187,134,252,0) 100%)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="loading-inner"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="loading-text"
      >
        Loading...
      </motion.p>
    </div>
  );
};

export default Loading;
