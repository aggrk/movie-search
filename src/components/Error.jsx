/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Error({ message }) {
  return (
    <motion.p
      className="error"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span>⛔️</span> {message}
    </motion.p>
  );
}
