'use client'
export default function ResponsiveHero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
      {/* Top Left Circle */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />
      
      {/* Top Right Circle */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 lg:w-72 md:h-48 lg:h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />

      {/* Background Image (Behind) */}
      <img
        src="/mandala.png"
        alt="Background Decorative Shape"
        className="absolute z-0 pop-up"
        style={{
          width: '686px',
          height: '686px',
          top: '30px',
          left: '-110px',
          animationDelay: '0s',
        }}
      />
  
        {/* Image at x: -17px, y: 369px */}
        <img
          src="/women3.png"
          alt="Decorative"
          className="absolute z-10 pop-up"
          style={{
            width: '489px',
            height: '506px',
            top: '190px',
            left: '-3px',
            animationDelay: '0.4s',
          }}
        />

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Desktop Heading */}
        <h1
          className="absolute z-20 text-6xl xl:text-9xl font-bold text-[#4D5557] leading-tight"
          style={{
            top: '185px',
            left: '409px',
            width: '950px',
            height: '200px',
            fontFamily: 'Master Of Break',
            fontWeight: "400",
          }}
        >
          Welcome to<br />
          Celestials healing.
        </h1>

        {/* Desktop Paragraph */}
        <p
          className="absolute z-20 text-2xl xl:text-3xl text-[#4A1A11]"
          style={{
            top: '500px',
            left: '425px',
            width: '900px',
            height: '105px',
            fontFamily: 'a Antara Distance',
            fontWeight: "400",
          }}
        >
          Welcome to our serene space dedicated to Reiki Offerings. Explore our courses designed to empower your spiritual journey and enhance your healing abilities.
        </p>

        {/* Desktop Button */}
        <button
          className="absolute z-20 mt-4 px-6 py-3 text-2xl xl:text-3xl font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition duration-300"
          style={{
            top: '570px',
            left: '425px',
            fontFamily: 'a Antara Distance',
            fontWeight: "400",
          }}
        >
          Start Your Journey
        </button>

        {/* Desktop Decorative Images - Only show on large screens */}
        <img
          src="/1.png"
          alt="Decorative"
          className="absolute z-20 slide-in"
          style={{
            width: '180px',
            height: '220px',
            top: '40px',
            right: '65px',
            animationDelay: '0.2s',
          }}
        />
        
        <img
          src="/5.png"
          alt="Decorative"
          className="absolute z-20 slide-in"
          style={{
            width: '152px',
            height: '229px',
            top: '220px',
            right: '105px',
            animationDelay: '0.6s',
          }}
        />
        
        <img
          src="/3.png"
          alt="Decorative"
          className="absolute z-20 slide-in"
          style={{
            width: '180px',
            height: '220px',
            top: '110px',
            right: '215px',
            animationDelay: '0.4s',
          }}
        />
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center h-screen px-6 relative z-20">
        {/* Mobile Heading */}
        <h1
          className="text-5xl md:text-6xl font-bold text-[#4D5557] leading-tight text-center mb-6 absolute top-16 "
          style={{
            fontFamily: 'Master Of Break',
            fontWeight: "400",
            width: "400px",
          }}
        >
          Welcome to<br />
          <span className="block">Celestials healing.</span>
        </h1>

        {/* Mobile Paragraph */}
       <p
  className="text-3xl md:text-2xl text-[#4A1A11] text-center mb-8 max-w-2xl absolute bottom-10 leading-tight"
  style={{
    fontFamily: 'a Antara Distance',
    fontWeight: "400",
  }}
>
  Welcome to our serene space dedicated to Reiki certification. Explore our courses designed to empower your spiritual journey and enhance your healing abilities.
</p>


        {/* Mobile Button */}
        <button
          className="px-6 py-3 text-xl md:text-2xl font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition duration-300 absolute bottom-5"
          style={{
            fontFamily: 'a Antara Distance',
            fontWeight: "400",
          }}
        >
          Start Your Journey
        </button>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        .pop-up {
          opacity: 0;
          transform: scale(0.5);
          animation: popUp 0.6s ease-out forwards;
        }

        @keyframes popUp {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .slide-in {
          opacity: 0;
          transform: translateX(100%);
          animation: slideIn 0.8s ease-out forwards;
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        /* Mobile adjustments for background images */
        @media (max-width: 1023px) {
          .pop-up {
            opacity: 1 !important;
          }
        }

        /* Smooth transitions */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(77, 85, 87, 0.3);
        }
      `}</style>
    </div>
  )
}