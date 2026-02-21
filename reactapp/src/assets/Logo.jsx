import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";

// 1. Your component definition
const AnimatedLogo = () => (
  <motion.div
    animate={{ scale: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0] }}
    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    style={{ display: 'inline-block' }} // Keeps the rotation centered
  >
    <FaRobot size={100} color="#61dafb" />
  </motion.div>
);

export default AnimatedLogo;