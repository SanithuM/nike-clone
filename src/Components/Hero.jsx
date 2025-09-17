import React from "react";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from "react-icons/fa";

const slides = [
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1024,c_limit/a1818f9c-cb99-4565-8c71-6b6b47abb41f/nike-just-do-it.jpg",
    title: "SHOW THEM WHO YOU ARE",
    desc: "When your rival is at the door, who will tou become? NFL Nike Rivalries are here.",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1024,c_limit/04e5b302-f0a7-4b33-95a1-87c0dfda27c5/nike-just-do-it.jpg",
    title: "OFF-COURT FITS",
    desc: "Explore hoops-inspired styles to rock wherever you go.",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1024,c_limit/449a1c76-b7bd-4aed-a771-e8e93db06ac9/nike-just-do-it.jpg",
    title: "SHAKE IT UP",
    desc: "The Field General pairs a suede upper with a Waffle sole to create the perfect retro look.",
  },
  {
    img: "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1024,c_limit/5344900b-2e37-4f4b-8532-b43b5ee14420/nike-just-do-it.jpg",
    title: "THIS WAS ONLY HER FIRST RODEO",
    desc: "Rookie of the Year is just the beginning. Paige Bueckers rides high into year two.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto change every 5s if not paused
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  // Handlers
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const togglePause = () => {
    setPaused((prev) => !prev);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Text at bottom center */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center text-white z-20 max-w-4xl px-4">
            <h1 className="text-[56px] md:text-[72px] lg:text-[88px] font-extrabold leading-tight tracking-tight drop-shadow-lg anton-regular">
              {slide.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium drop-shadow-md whitespace-nowrap">
              {slide.desc}
            </p>
            <button className="mt-6 bg-white font-semibold text-black px-6 py-2 rounded-full hover:bg-gray-300 transition">
              Shop
            </button>
          </div>
        </div>
      ))}

      {/* Controls at bottom-right */}
      <div className="absolute bottom-6 right-6 flex gap-3 z-20">
        {/* Pause Button */}
        <button
          onClick={togglePause}
          className="bg-white/70 text-black p-3 rounded-full hover:bg-white"
        >
          {paused ? <FaPlay /> : <FaPause />}
        </button>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="bg-white/70 text-black p-3 rounded-full hover:bg-white"
        >
          <FaChevronLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="bg-white/70 text-black p-3 rounded-full hover:bg-white"
        >
          <FaChevronRight />
        </button>
      </div>
      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1.5 h-1.5 rounded-full ${current === index ? "bg-white" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
