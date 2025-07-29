import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../mock/testimonials";
import { customEase, customDuration } from "./HomeHero";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const StarRating = ({ rate }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rate ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ))}
  </div>
);


const Testimonials = () => {
  const [perSlide, setPerSlide] = useState(window.innerWidth < 768 ? 1 : 2);
  const [slides, setSlides] = useState(chunkArray(testimonials, perSlide));
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  // Update perSlide and slides on resize
  useEffect(() => {
    const handleResize = () => {
      const newPerSlide = window.innerWidth < 768 ? 1 : 2;
      setPerSlide(newPerSlide);
      setSlides(chunkArray(testimonials, newPerSlide));
      setCurrent(0); // Reset to first slide on layout change
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Testimonios</h2>
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
          <button onClick={prevSlide} className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-pink-500 hover:bg-pink-100 hover:text-pink-700 focus:outline-none border border-pink-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex gap-8 w-full justify-center min-h-[240px] items-stretch overflow-hidden relative">
            <div className="relative w-full min-h-[220px]">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={current}
                  className="flex gap-8 w-full justify-center items-stretch absolute top-0 left-0"
                  custom={direction}
                  initial={{ x: direction > 0 ? '100%' : '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: direction > 0 ? '-100%' : '100%' }}
                  transition={{ duration: customDuration, ease: customEase }}
                  style={{ width: '100%' }}
                >
                  {slides[current].map((t) => (
                  <div key={t.id} className="bg-white rounded-xl shadow-md p-6 flex-1 max-w-xs text-center mx-auto flex flex-col justify-between h-full">
                    <StarRating rate={t.rate} />
                    <div className="flex-1 mb-4 overflow-y-auto max-h-32 md:max-h-40">
                      <p className="text-gray-700 italic">"{t.description}"</p>
                    </div>
                    <span className="block font-semibold text-pink-600 mt-2">{t.name}</span>
                  </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <button onClick={nextSlide} className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-pink-500 hover:bg-pink-100 hover:text-pink-700 focus:outline-none border border-pink-200 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-pink-500" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
