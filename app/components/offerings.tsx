"use client"
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    name: "Reiki Services",
    description:
      "Rejuvenate your mind, body, and spirit with our professional Reiki healing sessions. Using ancient energy healing techniques, our certified practitioners channel positive energy to remove blockages, reduce stress, and promote emotional and physical well-being. Whether you're seeking relaxation, pain relief, or spiritual alignment, Reiki can help restore balance and harmony in your life.",
    imageSrc: "/reiki.jpg",
  },
  {
    name: "Astrology & Palmistry",
    description:
      "Discover the secrets of your destiny with our expert Astrology and Palmistry services. Our experienced astrologers analyze planetary positions and cosmic influences to provide deep insights into your personality, career, relationships, and future possibilities. Meanwhile, our palmistry readings interpret the lines and mounts on your hand to reveal your strengths, challenges, and life path. Gain clarity and guidance to navigate life with confidence.",
    imageSrc: "/astro.jpg",
  },
  {
    name: "Tarot Card Reading",
    description:
      "Unlock the hidden messages of the universe with our insightful Tarot Card Reading sessions. Whether you're seeking answers about love, career, personal growth, or a specific situation, our experienced tarot readers use powerful cards to provide intuitive guidance. Each reading is tailored to offer clarity, reveal potential outcomes, and empower you to make informed decisions for a brighter future.",
    imageSrc: "/card.jpg",
  },
  {
    name: "Puja & Rituals",
    description:
      "Invite divine blessings and spiritual harmony into your life with our traditional Puja and Ritual services. Conducted by experienced priests, our customized rituals cater to various needs, including prosperity, health, protection, success, and ancestral blessings. Whether it's a housewarming, wedding, festival, or personal spiritual practice, our Pujas are performed with sacred mantras and offerings to create a positive and peaceful environment.",
    imageSrc: "/puja.jpg",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
    <div className="flex flex-col w-full min-h-[800px]  flex justify-center items-center p-8 md:p-10">
      <h1 className="text-6xl font-bold mb-4 text-[#4D5557] text-center" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>Our Offerings</h1>
      
      <p className="mb-12 text-lg text-[#4A1A11] text-center">
        A wide range of services are provided to help you understand yourself better and make
        better decisions in life.
      </p>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-4/5 relative min-h-[500px]">
          <div className="relative w-full h-full flex justify-center items-center">
            {products.map((product, i) => {
              const indexDiff = (i - activeIndex + products.length) % products.length;

              return (
                <img
                  key={i}
                  src={product.imageSrc}
                  alt={product.name}
                  className={`absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg
                    ${indexDiff === 0 ? "w-[340px] h-[450px] left-[65%] z-30 left-1/2 transform -translate-x-1/2" : ""}
                    ${indexDiff === 1 ? "w-[250px] h-[400px] left-[35%] z-20 brightness-75" : ""}
                    ${indexDiff === 2 ? "w-[300px] h-[350px] left-[25%] z-10 brightness-50" : ""}
                    ${indexDiff === 3 ? "w-[250px] h-[300px] left-[15%] z-0 brightness-30" : ""}
                   ${indexDiff > 3 ? "hidden" : ""}
                  `}
                />
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-3/5 p-4 md:p-0 md:pr-8 text-left flex flex-col justify-center">
          <h2 className="text-5xl text-[#4A1A11] font-bold mb-2" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>{products[activeIndex].name}</h2>
          <p className="text-gray-700 mb-4">{products[activeIndex].description}</p>

          

          

          
        </div>
      </div>

      <div className="w-full flex justify-center relative top-[-120px] left-[160px]">
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-4 bg-[#4A1A11] rounded-full shadow-md text-white hover:bg-gray-800 transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 bg-[#4A1A11] rounded-full shadow-md text-white hover:bg-gray-800 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
