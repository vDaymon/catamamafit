import React from 'react';
import { Link } from 'react-router-dom';
import ChallengeCard from './ChallengeCard';
import { defaultChallenges } from '../mock/challenges';

function slugify(text) {
  return text
    .toString()
    .normalize('NFD').replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const ChallengePage = () => {
  return (
    <section className="py-20 min-h-screen relative" style={{
      backgroundImage: 'url(/imgs/fondoentrenamientos.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Nuestros Entrenamientos
        </h2>
        <div className="flex flex-col items-center gap-12">
          {defaultChallenges.map((challenge) => (
            <Link key={challenge.id} to={`/retos/${slugify(challenge.title || 'reto')}`} className="block w-full max-w-xl">
              <ChallengeCard challenge={challenge} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengePage;