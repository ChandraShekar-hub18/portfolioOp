import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Training a neural network to classify images...",
            1000,
            "Optimizing loss function: Gradient Descent in progress...",
            1000,
            "Deploying a machine learning model to the cloud...",
            1000,
            "Evaluating model accuracy: Achieved 95% on test data!",
            1000,
            "Implementing a recommendation system using collaborative filtering...",
            1000,
            "डेटा को प्रोसेस कर रहा हूँ... मॉडल ट्रेनिंग शुरू।", // Hindi: Processing data... Model training started.
            1000,
            "న్యూరల్ నెట్‌వర్క్‌ను ట్రైన్ చేస్తున్నాను...", // Telugu: Training a neural network...
            1000,
            "लॉस फंक्शन को ऑप्टिमाइज़ कर रहा हूँ...", // Hindi: Optimizing the loss function...
            1000,
            "మోడల్ ఖచ్చితత్వం: 95% సాధించబడింది!", // Telugu: Model accuracy: Achieved 95%!
            1000,
            "सिफारिश प्रणाली लागू कर रहा हूँ...", // Hindi: Implementing a recommendation system...
            1000,
            "డేటా విశ్లేషణ పూర్తయింది, ఫలితాలు సిద్ధంగా ఉన్నాయి.", // Telugu: Data analysis complete, results are ready.
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          // omitDeletionAnimation
          repeat={Infinity}
        />
      </div>
      <img src="/man.png" alt="" />
    </motion.div>
  );
};

export default Speech;
