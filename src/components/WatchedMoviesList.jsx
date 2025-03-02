/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import WatchedMovie from './WatchedMovie';

export default function WatchedMoviesList({ watched, onDeleteMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <motion.li
          key={movie.imdbID}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <WatchedMovie movie={movie} onDeleteMovie={onDeleteMovie} />
        </motion.li>
      ))}
    </ul>
  );
}
