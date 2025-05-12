"use client"

import React, { useState, ReactNode } from 'react';
import { ChevronUpIcon } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

const Enroll2 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
   {
      question: 'Usui/Tibetan Reiki I & II',
      answer: 'Weekend class covering Reiki hand positions, Japanese techniques, Reiki II symbols, and distant healing. Great for beginners with no experience required.'
    },
    {
      question: 'Usui/Tibetan Reiki ART/Master',
      answer: 'A 3-day course that includes advanced symbols, attunements, Reiki grids, psychic surgery, and how to pass attunements to others.'
    },
    {
      question: 'Karuna Reiki®',
      answer: 'For Reiki Masters. Includes 2 levels, 12 symbols, and training on emotional/spiritual healing using chanting, toning, and deep meditative techniques.'
    },
    {
      question: 'Usui/Fusion® Reiki I & II',
      answer: 'Weekend intensive covering full Reiki treatments, Japanese techniques, Reiki II symbols, and distant healing using Fusion® energy enhancements.'
    },
    {
      question: 'Usui/Fusion® Reiki ART/Master',
      answer: 'Advanced course covering Usui Master symbol, Holy Love experience, aura clearing, and how to perform and teach Reiki attunements.'
    },
    {
      question: 'Fusion® Karuna Reiki®',
      answer: 'Includes 8 practitioner symbols and 1 master symbol. Focuses on deep emotional healing, intuitive development, and teaching all levels of Karuna Reiki®.'
    },
    {
      question: 'Usui/Fusion® II Reiki I & II',
      answer: 'Another variant of Reiki I & II using Fusion® II energy. Teaches hand positions, intuitive techniques, Reiki II symbols, and distant healing.'
    },
    {
      question: 'Usui/Fusion® II ART/Master',
      answer: 'Introduces Healing Fire, River of Life experiences, advanced placements, and how to teach Reiki using Fusion® II energy systems.'
    },
    {
      question: 'Usui/Fusion® III Reiki I & II',
      answer: 'Foundational class using Fusion® III energy. Includes Reiki hand positions, Japanese techniques, and Reiki II symbols for personal healing.'
    },
    {
      question: 'Usui/Fusion® III Reiki Master',
      answer: 'Master class with World Peace Reiki energy, Fusion® symbols, multiple ignitions, and training to teach all levels of Fusion® III Reiki.'
    },
    {
      question: 'Fusion® III Karuna Reiki® Master Teacher',
      answer: 'Advanced master class to teach all Fusion® III Reiki levels, including Karuna Reiki®. Emphasizes world peace energy and deep healing symbols.'
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
    <div className="px-4 py-8 flex items-center text-[#4D5557] pt-20 pb-20">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: "'CelestialFont', Petrona, serif",}}>Know About Our Courses</h1>
          {/* <p className="mb-6 text-[#4A1A11]">Find answers to your questions about our Reiki certification course and related services.</p> */}
          <button className="border border-[#4A1A11] text-white py-2 px-6 bg-[#4A1A11] hover:bg-gray-800 transition-colors">
            Register
          </button>
        </div>
        
        <div className="md:w-2/3">
          {faqItems.map((item, index) => (
            <div key={index}>
              <div className="border-t border-[#4D5557]">
                <button
                  className="w-full py-4 flex justify-between items-center text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg font-medium">{item.question}</h2>
                  <ChevronUpIcon 
                    className={`h-5 w-5 transition-transform ${openIndex === index ? '' : 'transform rotate-180'}`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-700">{item.answer}</p>
                   <button className="border border-[#4A1A11] text-white py-2 px-6 bg-[#4A1A11] hover:bg-gray-800 transition-colors">
                  Know more
          </button>
                </div>
                
              </div>
              {/* Add line below each FAQ item, including the last one */}
              <div className="border-t border-[#4D5557] mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Enroll2;