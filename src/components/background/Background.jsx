import { motion } from "motion/react";
import "./Background.css";

const WavePattern = ({ position }) => {
  const lines = Array.from({ length: 12 }, (_, i) => i);

  return (
    <motion.div
      className="wave-nested-pattern"
      style={{
        left: position.x,
        top: position.y,
      }}
      animate={{
        rotate: 360,
        scale: [0.9, 1, 0.9],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 400 400">
        {lines.map((_, index) => (
          <motion.path
            key={index}
            className="wave-line"
            d={`
              M ${200 - (index + 1) * 15} 200
              Q ${200} ${200 + (index + 1) * 15}
                ${200 + (index + 1) * 15} 200
              Q ${200} ${200 - (index + 1) * 15}
                ${200 - (index + 1) * 15} 200
            `}
            style={{
              opacity: 1 - index * 0.08,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20 + index,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
};

const WaveBackground = () => {
  const lines = Array.from({ length: 15 }, (_, i) => i);

  return (
    <motion.div className="wave-background">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {lines.map((_, index) => (
          <motion.path
            key={index}
            d={`
              M 0 ${50 + (index - 7) * 5}
              Q 25 ${50 + (index - 7) * 7}
                50 ${50 + (index - 7) * 5}
              Q 75 ${50 + (index - 7) * 3}
                100 ${50 + (index - 7) * 5}
            `}
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
            style={{
              opacity: 1 - index * 0.05,
            }}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4a25aa" />
            <stop offset="50%" stopColor="#bb86fc" />
            <stop offset="100%" stopColor="#4a25aa" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const Background = () => {
  // Generate random positions for stars
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
  }));

  // Generate random positions for neon circles
  const circles = Array.from({ length: 2 }, (_, i) => ({
    id: i,
    x: i === 0 ? 15 : 85,
    y: i === 0 ? 85 : 15,
    size: 300,
  }));

  const fluidCircles = Array.from({ length: 2 }, (_, i) => ({
    id: i,
    x: i === 0 ? 15 : 85,
    y: i === 0 ? 85 : 15,
  }));

  return (
    <div className="background-wrapper">
      {/* Add wave patterns to top-right and bottom-left corners */}
      <WavePattern position={{ x: "60%", y: "10%" }} />
      <WavePattern position={{ x: "5%", y: "70%" }} />

      {/* Neon Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="neon-circle-filled"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [star.scale, star.scale * 1.5, star.scale],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wavy Circles */}
      {circles.map((circle) => (
        <motion.div
          key={circle.id}
          className="wave-pattern"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            rotate: 360,
            scale: [0.8, 1, 0.8],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#bb86fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Fluid Circular Patterns */}
      {fluidCircles.map((circle) => (
        <motion.div
          key={circle.id}
          className="fluid-pattern"
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            rotate: 360,
            scale: [0.8, 1, 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="300" height="300" viewBox="0 0 300 300">
            {/* Multiple fluid circles with different radiuses */}
            {[40, 35, 30, 25, 20].map((radius, index) => (
              <path
                key={index}
                d={`
                  M ${150 + radius * Math.cos(0)} ${150 + radius * Math.sin(0)}
                  ${Array.from({ length: 8 })
                    .map((_, i) => {
                      const angle = (i + 1) * (Math.PI / 4);
                      const variance = Math.sin((i * Math.PI) / 4) * 5;
                      return `Q ${
                        150 +
                        (radius + variance) * Math.cos(angle - Math.PI / 8)
                      } 
                            ${
                              150 +
                              (radius + variance) *
                                Math.sin(angle - Math.PI / 8)
                            }
                            ${150 + radius * Math.cos(angle)} 
                            ${150 + radius * Math.sin(angle)}`;
                    })
                    .join(" ")}
                  Z
                `}
                fill="none"
                stroke="url(#fluidGradient)"
                strokeWidth="0.5"
                opacity={0.3 - index * 0.05}
              />
            ))}
            <defs>
              <linearGradient
                id="fluidGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#bb86fc" />
                <stop offset="100%" stopColor="#9333ea" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      ))}

      {/* Corner Frames */}
      <div className="corner-frame top-left" />
      <div className="corner-frame bottom-right" />

      {/* Additional decorative elements */}
      <motion.div
        className="neon-circle"
        style={{
          width: "200px",
          height: "200px",
          right: "10%",
          top: "20%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Background;
