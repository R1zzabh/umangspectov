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
  Heart,
  Code,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('.footer-section');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/company/specto-v/posts/?feedView=all',
      color: '#0A66C2',
      hoverGradient: 'from-[#0A66C2] to-[#004182]'
    },
    {
      name: 'YouTube',
      icon: <Youtube size={24} />,
      url: 'https://www.youtube.com/@SpectoV',
      color: '#FF0000',
      hoverGradient: 'from-[#FF0000] to-[#CC0000]'
    },
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/spectov_official/',
      color: '#E4405F',
      hoverGradient: 'from-[#E4405F] to-[#C13584]'
    }
  ];

  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="footer-section bg-gradient-to-br from-[#0D0D0D] via-[#0A0A0A] to-[#0D0D0D] py-16 px-4 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-[#3A86FF]/5 to-[#9D4EDD]/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-[#9D4EDD]/5 to-[#3A86FF]/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#9D4EDD] rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(rgba(157, 78, 221, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(157, 78, 221, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className={`flex flex-col md:flex-row items-center md:justify-between space-y-12 md:space-y-0 mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Logo Section */}
          <div className="group cursor-pointer">
            <div className="flex items-center space-x-3 p-4 rounded-2xl bg-gradient-to-r from-gray-900/50 to-gray-800/50 
                           border border-gray-700/50 backdrop-blur-sm hover:border-[#9D4EDD]/50 transition-all duration-500
                           hover:shadow-lg hover:shadow-[#9D4EDD]/20 hover:scale-105">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-xl 
                               flex items-center justify-center group-hover:rotate-12 transition-transform duration-500
                               shadow-lg group-hover:shadow-xl group-hover:shadow-[#3A86FF]/30">
                  <Rocket size={20} className="text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3A86FF]/30 to-[#9D4EDD]/30 rounded-xl 
                               blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                  UMANG
                </span>
                <div className="text-xs text-gray-400 font-medium">Empowering Futures</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={`flex items-center space-x-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-gray-400 text-sm font-medium mr-4 hidden md:block">Follow Us</div>
            {socialLinks.map((social, index) => (
              <div key={social.name} className="relative group">
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-700/50 
                                 border border-gray-600/50 backdrop-blur-sm flex items-center justify-center
                                 transition-all duration-500 hover:border-transparent hover:scale-110 hover:-translate-y-1
                                 hover:shadow-xl group`}
                       style={{
                         boxShadow: hoveredSocial === index ? `0 8px 32px ${social.color}40` : 'none'
                       }}>
                    
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${social.hoverGradient} 
                                   opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>

                    {/* Ripple effect */}
                    {hoveredSocial === index && (
                      <div className="absolute inset-0 rounded-2xl border-2 opacity-75 animate-ping"
                           style={{ borderColor: social.color }}></div>
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 
                                 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    {social.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
                                   border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Powered By Section */}
          <div className={`text-center md:text-right transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-gray-900/30 to-gray-800/30 border border-gray-700/30">
              <div className="flex items-center justify-center md:justify-end space-x-2 mb-2">
                <Sparkles size={16} className="text-[#FFE066] animate-pulse" />
                <span className="text-sm font-semibold text-gray-300">Powered by</span>
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-[#3A86FF] font-medium hover:text-[#5B9CFF] transition-colors cursor-pointer">Sankalp</span>
                <span className="mx-2">•</span>
                <span className="text-[#9D4EDD] font-medium hover:text-[#C77DFF] transition-colors cursor-pointer">SpectoV</span>
                <span className="mx-2">•</span>
                <span className="text-[#FF6B6B] font-medium hover:text-[#FF8E53] transition-colors cursor-pointer">Internshipkaro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Divider */}
        <div className={`relative my-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 
                         bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full animate-pulse"></div>
        </div>

        {/* Bottom Section */}
        <div className={`flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="text-sm">© 2025 SpectoV All rights reserved.</span>
           
          </div>

          {/* Footer Links */}
          <div className="flex items-center space-x-6">
            {footerLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center space-x-1 text-sm text-gray-500 hover:text-white 
                          transition-all duration-300 hover:scale-105"
              >
                <span>{link.name}</span>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll to top indicator */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-1100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center space-x-2 px-4 py-2 rounded-full 
                      bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50
                      hover:border-[#3A86FF]/50 hover:bg-gradient-to-r hover:from-[#3A86FF]/20 hover:to-[#9D4EDD]/20
                      transition-all duration-500 text-gray-400 hover:text-white text-xs"
          >
            <span>Back to top</span>
            <ChevronDown size={14} className="rotate-180 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(157, 78, 221, 0.5); }
          50% { box-shadow: 0 0 20px rgba(157, 78, 221, 0.8), 0 0 30px rgba(58, 134, 255, 0.3); }
        }
      `}</style>
    </footer>
  )
}

export default Footer