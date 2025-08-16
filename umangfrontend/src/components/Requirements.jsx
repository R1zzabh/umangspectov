import React, { useState, useEffect } from 'react'

const Requirements = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)

  const degrees = [
    'B.Tech / B.E (All branches)',
    'BCA (Bachelor of Computer Applications)',
    'MCA (Master of Computer Applications)',
    'B.Sc / M.Sc in Computer Science / IT',
    'Diploma in Computer Science or IT',
    'Any other relevant technical program'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('requirements')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="requirements" className="py-20 md:py-28 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(157, 78, 221, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(157, 78, 221, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 border-2 border-[#3A86FF]/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-3/4 right-20 w-6 h-6 border-2 border-[#9D4EDD]/30 animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-[#3A86FF]/20 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Title with typewriter effect */}
        <div className={`text-center mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-200 relative inline-block">
            <span className="relative">
              Who Can Apply?
              <div className={`absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full transition-all duration-2000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}></div>
            </span>
          </h2>
        </div>

        {/* Subtitle with slide-in effect */}
        <div className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <p className="text-gray-300 relative">
            If you are a student in a technical field from any university across India, you are eligible to join. This includes (but is not limited to):
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#9D4EDD] rounded-full animate-pulse"></div>
          </p>
        </div>

        {/* Cards with staggered reveal animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {degrees.map((degree, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${500 + index * 150}ms` 
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl 
                            border border-gray-700/50 backdrop-blur-sm
                            transform transition-all duration-500 hover:scale-105 hover:-translate-y-2
                            hover:shadow-2xl hover:shadow-[#9D4EDD]/20 group
                            before:absolute before:inset-0 before:rounded-xl before:p-[2px]
                            before:bg-gradient-to-r before:from-[#3A86FF]/0 before:to-[#9D4EDD]/0
                            hover:before:from-[#3A86FF]/50 hover:before:to-[#9D4EDD]/50
                            before:transition-all before:duration-500">
                
                {/* Animated border */}
                <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#3A86FF] to-[#9D4EDD] 
                               rounded-l-xl transition-all duration-500 ${
                  hoveredCard === index ? 'w-full opacity-20' : 'w-1 opacity-100'
                }`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] 
                                   flex items-center justify-center text-white font-bold text-sm
                                   transform transition-all duration-500 ${
                      hoveredCard === index ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`w-2 h-2 rounded-full bg-[#9D4EDD] transition-all duration-500 ${
                      hoveredCard === index ? 'scale-150 animate-ping' : 'scale-100'
                    }`}></div>
                  </div>
                  
                  <p className={`text-lg font-semibold text-gray-100 transition-all duration-300 ${
                    hoveredCard === index ? 'text-white' : 'text-gray-100'
                  }`}>
                    {degree}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#3A86FF]/5 to-[#9D4EDD]/5 
                                 rounded-xl transition-all duration-500 ${
                    hoveredCard === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Animated particles on hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#9D4EDD] rounded-full animate-float-up opacity-60"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: '80%',
                          animationDelay: `${i * 0.2}s`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text with fade-in effect */}
        <div className={`text-center max-w-2xl mx-auto transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}>
          <p className="text-gray-300 relative text-lg">
            <span className="relative">
              No matter where you are in your academic journey, if you have the 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] font-semibold mx-1">
                passion to learn and grow
              </span>, 
              UMANG is for you.
            </span>
          </p>
        </div>

       
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes float-up {
          0% { 
            transform: translateY(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
          100% { 
            transform: translateY(-40px) scale(0.8);
            opacity: 0;
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-float-up {
          animation: float-up 2s ease-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Requirements