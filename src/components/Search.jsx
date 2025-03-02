/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Search({ query, setQuery }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      initial={{ width: '30rem' }}
      animate={{
        width: isFocused ? '40rem' : '30rem',
        boxShadow: isFocused
          ? '0 2.4rem 2.4rem rgba(0, 0, 0, 0.2)'
          : '0 1.2rem 1.2rem rgba(0, 0, 0, 0.1)',
      }}
      transition={{ type: 'spring', stiffness: 100 }}
    />
  );
}
