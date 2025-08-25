import React, { useState, useEffect } from 'react'
import { ChevronDown, Sparkles, Rocket, Star, ArrowRight, Zap, Target } from 'lucide-react'

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="cta-section py-20 md:py-32 bg-[#1A1A1A] px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#0D0D0D] to-[#1A1A1A] z-0">
        {/* Animated background blobs */}
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-r from-[#3A86FF] to-[#5B9CFF] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-[#9D4EDD] to-[#C77DFF] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-r from-[#FF6B6B] to-[#FFE066] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(58, 134, 255, 0.3) 1px, transparent 0)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 left-1/5 text-[#FFE066]/20 animate-pulse" size={24} />
        <Star className="absolute top-1/3 right-1/5 text-[#9D4EDD]/25 animate-spin-slow" size={20} />
        <Zap className="absolute bottom-1/4 left-1/3 text-[#3A86FF]/20 animate-bounce" size={18} />
        <Target className="absolute bottom-1/3 right-1/4 text-[#FF6B6B]/20 animate-ping" size={16} />
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Main Headline */}
        <div className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-blue-200 relative group">
            <span className="relative inline-block">
              Why Choose{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] via-[#9D4EDD] to-[#C77DFF] 
                             animate-gradient-x bg-300% relative">
                UMANG
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3A86FF] via-[#9D4EDD] to-[#C77DFF] 
                               rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 animate-tilt"></div>
              </span>
              ?
            </span>
          </h2>
        </div>

        {/* Enhanced Content */}
        <div className={`space-y-8 mb-12 mt-20 transition-all duration-1000 delay-300 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm border border-gray-700/30">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full flex items-center justify-center">
              <Rocket size={16} className="text-white" />
            </div>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Unlike traditional internships or training programs, UMANG is designed to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] font-semibold">
                bridge the gap between academic learning and industry expectations
              </span>{' '}
              — without costing you a single rupee. By combining the proven success model of the Sankalp Training Program with a paid internship, UMANG ensures you graduate not just with knowledge, but with{' '}
              <span className="text-white font-semibold">experience, recognition, and confidence.</span>
            </p>
          </div>

          <div className="relative">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFE066] via-[#FF6B6B] to-[#9D4EDD] leading-tight">
              This is more than just an internship —{' '}
              <span className="relative text-white">
                it's the beginning of your professional transformation.
                <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#FFE066] to-[#9D4EDD] transform scale-x-0 hover:scale-x-100 transition-transform duration-700 rounded-full"></div>
              </span>
            </p>
          </div>
        </div>

        {/* Key Benefits Pills */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { text: '100% Free', icon: <Star size={16} />, color: 'from-green-400 to-emerald-500' },
            { text: 'Paid Internship', icon: <Zap size={16} />, color: 'from-[#3A86FF] to-[#5B9CFF]' },
            { text: 'Industry Certified', icon: <Target size={16} />, color: 'from-[#9D4EDD] to-[#C77DFF]' },
            { text: '3 Month Program', icon: <Sparkles size={16} />, color: 'from-[#FF6B6B] to-[#FFE066]' }
          ].map((pill, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r ${pill.color} text-white font-medium 
                         transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl cursor-default
                         animate-bounce-subtle`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {pill.icon}
              <span>{pill.text}</span>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <div className={`transition-all duration-1000 delay-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <a href="#register">
            <div
              className="relative inline-block group cursor-pointer"
              onMouseMove={handleMouseMove}
            >
              {/* Button glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#3A86FF] via-[#9D4EDD] to-[#C77DFF] 
                             rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-tilt"></div>
              
              {/* Main button */}
              <button className="relative px-12 py-5 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] text-white font-bold text-xl
                               rounded-full shadow-2xl transform transition-all duration-300 
                               group-hover:scale-110 group-hover:shadow-[0_20px_40px_rgba(58,134,255,0.4)]
                               flex items-center justify-center space-x-3 overflow-hidden">
                
                {/* Button background shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                               transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center space-x-3">
                  <Rocket size={24} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Start Your Journey</span>
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-particle"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: '50%',
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </button>

              {/* Interactive mouse follower */}
              <div 
                className="absolute w-2 h-2 bg-white/50 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  left: mousePosition.x - 4,
                  top: mousePosition.y - 4,
                  transform: 'translate(-50%, -50%)'
                }}
              ></div>
            </div>
          </a>
        </div>

        {/* Urgency indicator */}
        <div className={`mt-8 transition-all duration-1000 delay-900 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span>Limited seats available • Applications closing soon</span>
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes particle {
          0% { transform: translateY(0) scale(0); opacity: 1; }
          50% { transform: translateY(-20px) scale(1); opacity: 0.8; }
          100% { transform: translateY(-40px) scale(0); opacity: 0; }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
        .animate-particle {
          animation: particle 1.5s ease-out infinite;
        }
      `}</style>
    </section>
  )
}

export default CTA