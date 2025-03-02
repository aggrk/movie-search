/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function NumResults({ movies }) {
  return (
    <motion.p
      className="num-results"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      Found <strong>{movies?.length}</strong> results
    </motion.p>
  );
}
