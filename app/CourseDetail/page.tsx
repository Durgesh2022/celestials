'use client';

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutCourse = () => {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7">
          
          {/* Left side: Image */}
          <div className="space-y-6 flex flex-col items-center md:items-start">
            <Image
              src="/image.jpg"
              alt="Reiki Course"
              width={400}
              height={400}
              className="rounded shadow-md"
            />
          </div>

          {/* Right side: Description */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Reiki I & II
            </h1>
            <h2 className="text-lg font-semibold mb-2 text-[#4D5557]">Description</h2>
            
            <div className={`mt-6 bg-opacity-70 rounded-lg shadow p-6 transition-all duration-500 ease-in-out ${showFull ? '' : 'max-h-[300px] overflow-hidden relative'}`}>
              <div className="space-y-4 text-gray-800 leading-relaxed text-[16px]">
               <p>
                Reiki I and II are taught together during a weekend intensive. Both attunements are given. All the information and techniques for both levels are covered including:
              </p>

              <ul className="list-disc list-inside space-y-2">
                <li>The Reiki hand positions.</li>
                <li>Giving a complete Reiki treatment for self and others.</li>
                <li>
                  Japanese Reiki Techniques as taught by Dr. Usui including:
                  <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Gassho meditation</li>
                    <li>Reiji-ho – developing your intuition</li>
                    <li>Byosen Scanning – detecting where Reiki is needed</li>
                    <li>Gyoshi ho – sending Reiki with the eyes</li>
                    <li>Koki ho – using the breath to send Reiki</li>
                    <li>Kenyoku – dry bathing or clearing one&apos;s energy field</li>
                    <li>Jacki-kiri Joka-ho – clearing objects of negative energy</li>
                  </ul>
                </li>
                <li>Hayashi Healing Guide</li>
                <li>Using Reiki for specific conditions</li>
                <li>The Reiki II symbols, how to use them with practice time</li>
                <li>Using Reiki to heal unwanted habits</li>
                <li>Distant healing</li>
                <li>192-page class manual</li>
                <li>Class certificate</li>
              </ul>

              <p>
                The class is a combination of lecture, discussion, and experience. Practice time includes giving and receiving a complete Reiki treatment using all the hand positions, the self-treatment, practice using all the level II symbols including distant healing, and practice using all the Japanese Reiki Techniques mentioned above.
              </p>

              <p>
                While practice takes place during the class, it is expected that you will set aside additional time to practice after the class is over. Please commit to this additional time — which should be one evening a week for several weeks, or its equivalent — to practice Reiki with one or more people from your Reiki class or with members of your family or friends.
              </p>

                <p className="font-semibold">
                  This additional practice is necessary to gain the experience and confidence you need to fully utilize the Reiki training.
                </p>
              </div>
              {!showFull && (
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-transparent  to-transparent pointer-events-none"></div>
              )}
            </div>

            <button
              onClick={() => setShowFull(prev => !prev)}
              className="flex items-center text-[#4A1A11] mt-2 hover:underline"
            >
              {showFull ? (
                <>
                  Show Less <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Read More <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </button>

            <div className="mb-6 mt-6 flex items-center space-x-4">
              <span className="text-2xl font-semibold line-through text-gray-500">₹489</span>
              <span className="text-2xl font-bold text-red-600">₹474.33</span>
            </div>

            <button className="px-6 py-3 bg-[#4A1A11] text-white rounded hover:bg-gray-800 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
