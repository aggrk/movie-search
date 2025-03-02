/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

export default function WatchedMovie({ movie, onDeleteMovie }) {
  const { imdbID, poster, title, imdbRating, userRating, runtime } = movie;

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <img src={poster} alt={`${title} poster`} />
      <h3>{title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
        <button className="btn-delete" onClick={() => onDeleteMovie(imdbID)}>
          X
        </button>
      </div>
    </motion.li>
  );
}
