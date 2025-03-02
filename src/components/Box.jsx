/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Box({ children }) {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
