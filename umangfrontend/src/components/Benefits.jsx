import React, { useState, useEffect } from 'react'
import {
  Rocket,
  Menu,
  X,
  Linkedin,
  Youtube,
  Instagram,
  ChevronDown,
  Award,
  BookOpen,
  Briefcase,
  Key,
  Star,
  Gift,
  Sparkles,
  TrendingUp,
  Target
} from 'lucide-react';

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('benefits');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: 'Free Sankalp Training Program',
      description: 'Get access to industry-standard training modules, curated by experts to help you build strong technical foundations.',
      icon: <BookOpen size={32} />,
      gradient: 'from-[#3A86FF] to-[#5B9CFF]',
      bgGradient: 'from-[#3A86FF]/10 to-[#5B9CFF]/10',
      hoverGradient: 'from-[#3A86FF]/20 to-[#5B9CFF]/20',
      accent: '#3A86FF',
    },
    {
      title: '3 Months Paid Internship',
      description: 'Work on real-world projects and get hands-on experience in your chosen domain.',
      icon: <Briefcase size={32} />,
      gradient: 'from-[#9D4EDD] to-[#C77DFF]',
      bgGradient: 'from-[#9D4EDD]/10 to-[#C77DFF]/10',
      hoverGradient: 'from-[#9D4EDD]/20 to-[#C77DFF]/20',
      accent: '#9D4EDD',
    },
    {
      title: 'Training Completion Certificate',
      description: 'Showcase your newly acquired skills to potential employers.',
      icon: <Award size={32} />,
      gradient: 'from-[#FF6B6B] to-[#FF8E53]',
      bgGradient: 'from-[#FF6B6B]/10 to-[#FF8E53]/10',
      hoverGradient: 'from-[#FF6B6B]/20 to-[#FF8E53]/20',
      accent: '#FF6B6B',
    },
    {
      title: 'Internship Completion Certificate',
      description: 'Validate your professional experience and achievements.',
      icon: <Award size={32} />,
      gradient: 'from-[#4ECDC4] to-[#44A08D]',
      bgGradient: 'from-[#4ECDC4]/10 to-[#44A08D]/10',
      hoverGradient: 'from-[#4ECDC4]/20 to-[#44A08D]/20',
      accent: '#4ECDC4',
    },
    {
      title: 'Letter of Recommendation',
      description: 'Stand out in the competitive job market with strong endorsements from industry leaders.',
      icon: <Star size={32} />,
      gradient: 'from-[#FFE066] to-[#FFB74D]',
      bgGradient: 'from-[#FFE066]/10 to-[#FFB74D]/10',
      hoverGradient: 'from-[#FFE066]/20 to-[#FFB74D]/20',
      accent: '#FFE066',
    },
    {
      title: 'Goodies & Perks',
      description: 'Enjoy exciting gifts and rewards for your participation and performance.',
      icon: <Gift size={32} />,
      gradient: 'from-[#E91E63] to-[#AD1457]',
      bgGradient: 'from-[#E91E63]/10 to-[#AD1457]/10',
      hoverGradient: 'from-[#E91E63]/20 to-[#AD1457]/20',
      accent: '#E91E63',
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#3A86FF]/5 to-[#9D4EDD]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#FF6B6B]/5 to-[#FFE066]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-[#4ECDC4]/5 to-[#E91E63]/5 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-1/4 right-1/4 text-[#FFE066]/20 animate-spin-slow" size={20} />
        <Target className="absolute bottom-1/3 left-1/4 text-[#3A86FF]/20 animate-bounce" size={16} />
        <TrendingUp className="absolute top-2/3 right-1/3 text-[#4ECDC4]/20 animate-pulse" size={18} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Title Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-200 relative group">
              <span className="relative">
                What You'll Get
                <div className={`absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full transition-all duration-2000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}></div>
              </span>
            </h2>
            <div className="absolute -top-4 -right-4 text-[#FFE066] animate-bounce">
              <Sparkles size={24} />
            </div>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Here's everything you'll gain from this 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] font-semibold mx-1">
              transformative initiative
            </span>
          </p>

          {/* Stats counter */}
          <div className="flex justify-center space-x-8 mt-8">
            {[
              { number: '6', label: 'Amazing Benefits' },
              { number: '3', label: 'Month Duration' },
              { number: '100%', label: 'Free Program' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD]">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 150}ms` 
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className={`relative h-full p-8 rounded-3xl transition-all duration-500 transform
                            bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm
                            border border-gray-700/50 hover:border-transparent
                            hover:scale-105 hover:-translate-y-2 hover:shadow-2xl
                            before:absolute before:inset-0 before:rounded-3xl before:p-[1px]
                            before:bg-gradient-to-r before:${benefit.gradient} before:opacity-0
                            hover:before:opacity-100 before:transition-all before:duration-500
                            overflow-hidden`}
                style={{
                  boxShadow: hoveredCard === index 
                    ? `0 20px 40px -12px ${benefit.accent}40` 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${benefit.gradient} 
                               opacity-10 rounded-full blur-xl transform translate-x-8 -translate-y-8
                               group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">

                  {/* Icon Container */}
                  <div className={`relative mb-6 inline-block`}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} 
                                   flex items-center justify-center text-white
                                   transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                                   shadow-lg group-hover:shadow-xl`}
                         style={{
                           boxShadow: hoveredCard === index 
                             ? `0 8px 32px ${benefit.accent}60` 
                             : 'none'
                         }}>
                      {benefit.icon}
                    </div>
                    
                    {/* Rotating ring */}
                    <div className={`absolute inset-0 w-16 h-16 border-2 border-dashed rounded-2xl
                                   opacity-0 group-hover:opacity-30 transition-all duration-500
                                   animate-spin-slow`}
                         style={{ borderColor: benefit.accent }}></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent 
                               group-hover:bg-clip-text group-hover:bg-gradient-to-r 
                               group-hover:from-white group-hover:to-gray-200
                               transition-all duration-300 leading-tight">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Hover Effect - Animated Progress Bar */}
                  <div className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-full bg-gradient-to-r ${benefit.gradient} rounded-full 
                                   transform -translate-x-full group-hover:translate-x-0 
                                   transition-transform duration-1000 ease-out`}></div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full animate-float-up"
                        style={{
                          backgroundColor: benefit.accent,
                          left: `${20 + i * 20}%`,
                          top: '90%',
                          animationDelay: `${i * 0.3}s`,
                          opacity: 0.6
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full 
                         bg-gradient-to-r from-[#3A86FF]/20 to-[#9D4EDD]/20 
                         border border-[#3A86FF]/30 backdrop-blur-sm">
            <Rocket size={20} className="text-[#3A86FF]" />
            <span className="text-gray-300 font-medium">Ready to unlock all these benefits?</span>
            <div className="w-2 h-2 rounded-full bg-[#9D4EDD] animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
            transform: translateY(-15px) scale(1.1);
            opacity: 1;
          }
          100% { 
            transform: translateY(-30px) scale(0.8);
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

export default Benefits