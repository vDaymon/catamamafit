import React from 'react';
import { motion } from 'framer-motion';
import ChallengeCard from './ChallengeCard';
import { defaultChallenges } from '../mock/challenges';

const sliderVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.7 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } }
};

const ChallengeSlider = () => {
  const [index, setIndex] = React.useState(0);
  const challenges = defaultChallenges;
  const total = challenges.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  React.useEffect(() => {
    const timer = setTimeout(next, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section className="w-full flex flex-col items-center py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-8 text-center">Descubre nuestros Retos</h2>
      <div className="relative w-full max-w-xl mx-auto flex items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-2 shadow transition z-10"
          aria-label="Anterior"
        >
          <span className="text-2xl">&#8592;</span>
        </button>
        <motion.div
          key={challenges[index].title}
          variants={sliderVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          <ChallengeCard challenge={challenges[index]} />
        </motion.div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full p-2 shadow transition z-10"
          aria-label="Siguiente"
        >
          <span className="text-2xl">&#8594;</span>
        </button>
      </div>
      <div className="flex gap-2 mt-6 justify-center">
        {challenges.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-pink-600' : 'bg-pink-200'} transition`}
            aria-label={`Ir al reto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ChallengeSlider;
