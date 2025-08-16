import React from 'react'
import { useEffect, useState } from 'react';
import { Key, Star, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const Faq = () => {
  const [currentFAQStep, setCurrentFAQStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('faqs');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentFAQStep((prevStep) => (prevStep + 1) % 3);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const faqSteps = [
    { 
      text: 'Fill out the registration form', 
      icon: <Key size={24} />,
      description: 'Complete your personal and academic details',
      color: 'from-[#3A86FF] to-[#5B9CFF]'
    },
    { 
      text: 'Wait for your confirmation email', 
      icon: <Star size={24} />,
      description: 'We\'ll review your application within 24-48 hours',
      color: 'from-[#9D4EDD] to-[#C77DFF]'
    },
    { 
      text: 'Begin your journey with UMANG!', 
      icon: <Rocket size={24} />,
      description: 'Start your 3-month transformative learning experience',
      color: 'from-[#FF6B6B] to-[#FF8E53]'
    },
  ];

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#1A1A1A] px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border border-[#9D4EDD] rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-[#3A86FF] rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-gradient-to-r from-[#9D4EDD] to-[#3A86FF] rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-200 relative inline-block group">
            <span className="relative">
              Frequently Asked Questions
              <div className={`absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] rounded-full transition-all duration-2000 ${
                isVisible ? 'w-full' : 'w-0'
              }`}></div>
            </span>
          </h2>
          <p className="text-gray-400 mt-7 text-lg">Everything you need to know about UMANG</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Fee Information Card */}
          <div className={`flex-1 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] shadow-2xl border border-gray-800/50 hover:border-[#9D4EDD]/50 hover:shadow-[#9D4EDD]/20 transition-all duration-500 h-full relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#9D4EDD]/5 to-[#3A86FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#C77DFF] to-[#9D4EDD] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">₹</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#C77DFF] group-hover:text-[#E0AAFF] transition-colors duration-300">
                    Is There Any Fee?
                  </h3>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">100% FREE</div>
                  <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"></div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-100 transition-colors duration-300">
                  UMANG is completely free. From training to internship — every part of the program is sponsored by SpectoV & Internshipkaro.
                </p>

                {/* Features list */}
                <div className="space-y-3">
                  {['Free Training', 'Free Internship', 'Free Certification', 'No Hidden Costs'].map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect corner decoration */}
              <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#9D4EDD]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Registration Process Card */}
          <div className={`flex-1 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] shadow-2xl border border-gray-800/50 hover:border-[#3A86FF]/50 hover:shadow-[#3A86FF]/20 transition-all duration-500 h-full relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3A86FF]/5 to-[#9D4EDD]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#3A86FF] to-[#5B9CFF] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    How to Register?
                  </h3>
                </div>

                {/* Enhanced Timeline */}
                <div className="space-y-8 relative">
                  {/* Animated progress line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-700 rounded-full">
                    <div 
                      className="w-full bg-gradient-to-b from-[#3A86FF] to-[#9D4EDD] rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        height: `${((currentFAQStep + 1) / 3) * 100}%`,
                        boxShadow: '0 0 10px rgba(58, 134, 255, 0.5)'
                      }}
                    ></div>
                  </div>

                  {faqSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-start transition-all duration-700 ease-out ${
                        currentFAQStep >= index 
                          ? 'translate-x-0 opacity-100 scale-100' 
                          : 'translate-x-4 opacity-60 scale-95'
                      }`}
                    >
                      {/* Step indicator */}
                      <div className={`flex-shrink-0 relative z-10 transition-all duration-500 ${
                        currentFAQStep >= index ? 'scale-110' : 'scale-100'
                      }`}>
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 ${
                          currentFAQStep >= index 
                            ? `bg-gradient-to-r ${step.color} shadow-lg shadow-current/30` 
                            : 'bg-gray-700 border-2 border-gray-600'
                        }`}>
                          <div className={`transition-colors duration-500 ${
                            currentFAQStep >= index ? 'text-white' : 'text-gray-400'
                          }`}>
                            {step.icon}
                          </div>
                        </div>
                        
                        {/* Ripple effect for current step */}
                        {currentFAQStep === index && (
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3A86FF]/30 to-[#9D4EDD]/30 animate-ping"></div>
                        )}
                      </div>

                      {/* Step content */}
                      <div className="ml-6 flex-1">
                        <h4 className={`font-semibold text-lg transition-all duration-500 mb-2 ${
                          currentFAQStep >= index ? 'text-white' : 'text-gray-400'
                        }`}>
                          {step.text}
                        </h4>
                        <p className={`text-sm transition-all duration-500 ${
                          currentFAQStep >= index ? 'text-gray-300' : 'text-gray-500'
                        }`}>
                          {step.description}
                        </p>

                        {/* Progress indicator dots */}
                        {currentFAQStep === index && (
                          <div className="flex space-x-1 mt-3">
                            {[...Array(3)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                              ></div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-[#3A86FF]/10 to-[#9D4EDD]/10 border border-[#3A86FF]/20">
                  <p className="text-center text-sm text-gray-300">
                    <span className="font-semibold text-white">Ready to start?</span> The registration process takes less than 5 minutes!
                  </p>
                </div>
              </div>

              {/* Hover effect corner decoration */}
              <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-br from-[#3A86FF]/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq;