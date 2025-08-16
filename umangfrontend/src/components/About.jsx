import React, { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('about')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 md:py-28 bg-[#1A1A1A] px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#3A86FF]/10 to-[#9D4EDD]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#9D4EDD]/10 to-[#3A86FF]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Animated heading */}
        <div className={`transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-200 group">
            <span className="relative inline-block">
              About{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] 
                             relative inline-block transform transition-all duration-300 
                             group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(58,134,255,0.5)]">
                UMANG
              </span>
              <div className={`absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full transition-all duration-2000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}></div>
            </span>
          </h2>
        </div>

        {/* Animated content */}
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
          <div className={`transform transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <p className="relative p-6 rounded-lg bg-gradient-to-r from-gray-800/20 to-gray-900/20 
                         border border-gray-700/30 backdrop-blur-sm
                         hover:border-[#3A86FF]/30 hover:bg-gradient-to-r hover:from-[#3A86FF]/5 hover:to-[#9D4EDD]/5
                         transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg 
                         hover:shadow-[#3A86FF]/10 group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#3A86FF] to-[#9D4EDD] 
                            rounded-l-lg transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              UMANG is a groundbreaking initiative designed to empower aspiring tech minds across India. 
              This is India's first-ever Free Internship Training Program that combines industry-ready 
              training with a real-world internship opportunity — at zero cost to you.
            </p>
          </div>

          <div className={`transform transition-all duration-1000 ease-out delay-500 ${
            isVisible 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-10 opacity-0'
          }`}>
            <p className="relative p-6 rounded-lg bg-gradient-to-r from-gray-800/20 to-gray-900/20 
                         border border-gray-700/30 backdrop-blur-sm
                         hover:border-[#9D4EDD]/30 hover:bg-gradient-to-r hover:from-[#9D4EDD]/5 hover:to-[#3A86FF]/5
                         transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg 
                         hover:shadow-[#9D4EDD]/10 group">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#9D4EDD] to-[#3A86FF] 
                            rounded-l-lg transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500"></div>
              In collaboration with Sankalp, SpectoV, and Internshipkaro, UMANG brings you a 3-month 
              remote program tailored to prepare you for the demands of the modern technology landscape. 
              Our mission is simple — to remove financial barriers and provide equal opportunities for 
              every talented student who dreams of making an impact.
            </p>
          </div>
        </div>

        {/* Animated decorative elements */}
        <div className={`mt-12 flex justify-center space-x-4 transition-all duration-1000 ease-out delay-700 ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-10 opacity-0'
        }`}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] 
                         animate-bounce ${i === 1 ? 'delay-100' : i === 2 ? 'delay-200' : ''}`}
              style={{ animationDelay: `${i * 100}ms` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full 
                       animate-float opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default About