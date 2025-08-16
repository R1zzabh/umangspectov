import { ChevronDown } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] z-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/2 left-3/4 w-48 h-48 bg-[#9D4EDD] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#C77DFF] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        {/* AI Generated Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://image.pollinations.ai/prompt/abstract%20interconnected%20nodes%20flowing%20lines%20blue%20purple%20gradient%20blurred%20overlay"
            alt="Abstract Background Overlay"
            className="w-full h-full object-cover blur-md opacity-40"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          {/* Gradient Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD]">
            UMANG
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white mb-2">
            Unlock Your Potential, Shape Your Future
          </h2>
          <p className="text-base md:text-lg lg:text-3xl text-[#C77DFF] font-bold mb-8">
            India’s First Free Internship Training Program
          </p>
          <p className="text-sm md:text-2xl font-bold text-gray-200">
            Powered by Sankalp | Sponsored by SpectoV & Internshipkaro
          </p>
          <a href="#about" className="mt-10">
            <button className="px-8 py-3 bg-[#3A86FF] text-white font-semibold rounded-full shadow-lg hover:shadow-[#9D4EDD] hover:bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Explore More</span>
              <ChevronDown size={20} className="transform -rotate-90" />
            </button>
          </a>
        </div>
      </section>
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