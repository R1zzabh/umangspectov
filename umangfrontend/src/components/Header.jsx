import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#0D0D0D] backdrop-blur-lg bg-opacity-80 py-4 shadow-xl shadow-[#00509E]/20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Rocket size={24} className="text-white" />
            <span className="text-xl md:text-2xl font-bold text-white">UMANG</span>
          </a>

          <nav className="hidden md:flex flex-1 justify-center space-x-8 lg:space-x-12">
            <a href="#about" className="text-md font-medium hover:text-blue-400 transition-colors duration-300 text-white">Overview</a>
            <a href="#requirements" className="text-md font-medium hover:text-blue-400 transition-colors duration-300 text-white">Requirements</a>
            <a href="#faqs" className="text-md font-medium hover:text-blue-400 transition-colors duration-300 text-white">FAQs</a>
            <a href="#benefits" className="text-md font-medium hover:text-blue-400 transition-colors duration-300 text-white">Benefits</a>
          </nav>

          <a href="#register" className="hidden md:block">
            <button className="px-6 py-2 bg-[#3A86FF] text-white font-semibold rounded-full shadow-lg hover:shadow-[#9D4EDD] hover:bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] transition-all duration-300 transform hover:scale-105">
              Register
            </button>
          </a>

          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-[#C77DFF] p-2 rounded-md transition-transform duration-300 hover:scale-110">
            <Menu size={28} />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col items-center justify-center space-y-8 animate-slide-in-right">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-[#C77DFF] p-2 rounded-md transition-transform duration-300 hover:scale-110">
            <X size={28} />
          </button>
          <nav className="flex flex-col items-center space-y-6 text-2xl font-bold">
            <a onClick={() => setIsMenuOpen(false)} href="#about" className="hover:text-[#9D4EDD] transition-colors duration-300">Overview</a>
            <a onClick={() => setIsMenuOpen(false)} href="#requirements" className="hover:text-[#9D4EDD] transition-colors duration-300">Requirements</a>
            <a onClick={() => setIsMenuOpen(false)} href="#faqs" className="hover:text-[#9D4EDD] transition-colors duration-300">FAQs</a>
            <a onClick={() => setIsMenuOpen(false)} href="#benefits" className="hover:text-[#9D4EDD] transition-colors duration-300">Benefits</a>
          </nav>
          <a onClick={() => setIsMenuOpen(false)} href="#register">
            <button className="px-8 py-3 bg-[#3A86FF] text-white font-semibold rounded-full shadow-lg hover:shadow-[#9D4EDD] hover:bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] transition-all duration-300 transform hover:scale-105">
              Register
            </button>
          </a>
        </div>
      )}
      <style>
        {`
          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-right {
            animation: slideInRight 0.4s ease-out forwards;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          .animation-delay-500 { animation-delay: 0.5s; }
          .animation-delay-1000 { animation-delay: 1s; }
          .animation-delay-1500 { animation-delay: 1.5s; }
          .animation-delay-2000 { animation-delay: 2s; }
          @keyframes blob {
            0% { transform: scale(1) translate(0px, 0px); }
            33% { transform: scale(1.1) translate(30px, -50px); }
            66% { transform: scale(0.9) translate(-20px, 20px); }
            100% { transform: scale(1) translate(0px, 0px); }
          }
        `}
      </style>
    </>
  );
};

export default Header;
