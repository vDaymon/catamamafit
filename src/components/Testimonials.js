import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsImages } from "../mock/testimonialsImage"; // 👈 ahora importamos imágenes
import { customEase, customDuration } from "./HomeHero";

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Testimonials = () => {
  const [perSlide, setPerSlide] = useState(window.innerWidth < 768 ? 1 : 2);
  const [slides, setSlides] = useState(chunkArray(testimonialsImages, perSlide));
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  // Update perSlide and slides on resize
  useEffect(() => {
    const handleResize = () => {
      const newPerSlide = window.innerWidth < 768 ? 1 : 2;
      setPerSlide(newPerSlide);
      setSlides(chunkArray(testimonialsImages, newPerSlide));
      setCurrent(0);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        Testimonios
      </h2>
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="relative w-full flex justify-center items-center">
          {/* Botón prev */}
          <button
            onClick={prevSlide}
            className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-pink-500 hover:bg-pink-100 hover:text-pink-700 focus:outline-none border border-pink-200 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carrusel */}
          <div className="flex gap-6 w-full justify-center min-h-[240px] items-center overflow-hidden relative">
            <div className="relative w-full min-h-[220px]">
              <AnimatePresence initial={false} custom={direction} mode="sync">
                <motion.div
                  key={current}
                  className="flex gap-6 w-full justify-center items-center absolute top-0 left-0"
                  custom={direction}
                  initial={{ x: direction > 0 ? "100%" : "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: direction > 0 ? "-100%" : "100%" }}
                  transition={{ duration: customDuration, ease: customEase }}
                  style={{ width: "100%" }}
                >
                  {slides[current].map((img) => (
                    <div
                      key={img.id}
                      className="flex flex-1 max-w-sm h-64  overflow-hidden shadow-lgitems-center justify-center "
                    >
                      <img
                        src={img.url}
                        alt={`Testimonial ${img.id}`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Botón next */}
          <button
            onClick={nextSlide}
            className="absolute -right-14 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow text-pink-500 hover:bg-pink-100 hover:text-pink-700 focus:outline-none border border-pink-200 transition"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Paginación */}
        <div className="flex justify-center mt-4 gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-pink-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
