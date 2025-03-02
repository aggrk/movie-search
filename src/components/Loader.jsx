import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.p
      className="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Loading...
    </motion.p>
  );
}
