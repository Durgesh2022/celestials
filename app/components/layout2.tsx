// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Your Life: Discover the Healing Power of Reiki Certification',
  description: 'Reiki certification empowers you to harness healing energy for personal and professional growth.',
};

export default function Layout2() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#f6cf92] overflow-hidden">
    <div className={`w-full min-h-screen ${inter.className}`}>
      <main className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:px-16 max-w-7xl mx-auto text-[#4D5557]">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-6xl  leading-tight" style={{ fontFamily: 'Master Of Break',  fontWeight: "400",}}>
            Transform Your Life: Discover the Power of Healing
          </h1>
          
          <p className="text-3xl mb-12 text-[#4A1A11]" style={{  fontFamily: 'a Antara Distance',
           fontWeight: "400",}}>
          Celestials Healing offers soulful courses in Reiki, Astrology, Yoga, and Tarot to guide your spiritual journey. Embrace healing, insight, and divine alignment—mindfully and beautifully.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Healing Column */}
            <div>
              <h2 className="text-3xl font-bold mb-3 text-[#4A1A11]" style={{ fontFamily: 'Master Of Break',  fontWeight: "400",}}>Healing</h2>
              <p className='text-[#4A1A11] text-2xl' style={{  fontFamily: 'a Antara Distance',fontWeight: "400",}}>Promotes relaxation and emotional balance.</p>
            </div>
            
            {/* Growth Column */}
            <div>
              <h2 className="text-3xl font-bold mb-3 text-[#4A1A11]" style={{ fontFamily: 'Master Of Break',  fontWeight: "400",}}>Growth</h2>
              <p className='text-[#4A1A11] text-2xl' style={{  fontFamily: 'a Antara Distance',fontWeight: "400",}}>Enhances personal and spiritual development.</p>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-2/5 relative">
  <div className="gradient-border-wrapper aspect-[4/5] max-w-lg mx-auto rounded-full p-1">
    <div className="relative w-full h-full rounded-full overflow-hidden">
      <Image
        src="/image4.jpg"
        alt="Meditation setup with Buddha statue, sage bundle, singing bowl, and crystals"
        fill
        className="rounded-full object-cover"
        priority
      />
    </div>
  </div>
</div>


      </main>
    </div>
    </div>
  );
}