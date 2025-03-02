/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function Button({ onClick, isOpen }) {
  return (
    <motion.button
      className="btn-toggle"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {isOpen ? '-' : '+'}
    </motion.button>
  );
}
