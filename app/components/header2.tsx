// components/Background.tsx
"use client"
export default function header2() {
    return (
        <div>       
            <div className="relative min-h-screen bg-gradient-to-b from-[#f6cf92] to-white overflow-hidden">
        {/* Top Left Circle */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />
        
        {/* Top Right Circle */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#f6d992] opacity-30 rounded-full blur-3xl" />

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
        <div>
          {/* Heading */}
      <h1
        className="font-celestial absolute z-20 text-9xl font-bold text-[#4D5557] leading-tight"
        style={{
          top: '185px',
          left: '409px',
          width: '900px',
          height: '200px',
           fontFamily: 'Master Of Break',
           fontWeight: "400",
           
        }}
      >
        Welcome to
Celestial healing.

      </h1>

      {/* Paragraph */}
      <p
        className="absolute z-20 text-3xl text-[#4A1A11]"
        style={{
          top: '500px',
          left: '425px',
          width: '900px',
          height: '105px',
           fontFamily: 'a Antara Distance',
           fontWeight: "400",
        }}
      >
        Welcome to our serene space dedicated to Reiki certification. Explore our courses designed to empower your spiritual journey and enhance your healing abilities.
      </p>
      {/* Button */}
<button
  className="absolute z-20 mt-4 px-6 py-3 text-3xl font-semibold text-white bg-[#4D5557] hover:bg-[#32120b] rounded-full shadow-lg transition duration-300"
  style={{
    top: '570px',
    left: '425px',
     fontFamily: 'a Antara Distance',
    fontWeight: "400",
  }}
>
Start Your Journey
</button>
      </div>
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
         {/* Pop-up animation style */}
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
      `}</style>
      </div>
 
    )
  }
  