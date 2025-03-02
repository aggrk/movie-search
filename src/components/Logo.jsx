import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      className="logo"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <span role="img" aria-label="popcorn">
        🍿
      </span>
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        usePopcorn
      </motion.h1>
    </motion.div>
  );
}
