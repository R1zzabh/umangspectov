import { ChevronDown } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-blue rounded-full glow-pulse" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-neon-cyan rounded-full glow-pulse float" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-purple rounded-full glow-pulse" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block neon-text">UMANG</span>
            <span className="block gradient-text">Unlock Your Potential, Shape Your Future</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            India’s First Free Internship Training Program
          </p>
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Powered by Sankalp | Sponsored by SpectoV & Internshipkaro
          </p>
          
          <button 
            onClick={scrollToAbout}
            className="text-lg px-8 py-4 h-auto group bg-gradient-to-r from-neon-blue to-neon-cyan text-background hover:shadow-lg hover:shadow-neon-blue/50 transform hover:scale-105 transition-all duration-300"
          >
            Read More
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neon-blue" />
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