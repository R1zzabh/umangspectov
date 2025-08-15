import React from 'react'
import { useEffect, useState } from 'react';

const Faq = () => {
  const [currentFAQStep, setCurrentFAQStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFAQStep((prevStep) => (prevStep + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const faqSteps = [
    { text: 'Fill out the registration form', icon: <Key size={20} /> },
    { text: 'Wait for your confirmation email', icon: <Star size={20} /> },
    { text: 'Begin your journey with UMANG!', icon: <Rocket size={20} /> },
  ];
  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#1A1A1A] px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-400">
              FAQs
            </h2>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1 p-8 rounded-2xl bg-[#0D0D0D] shadow-xl border border-transparent hover:border-[#9D4EDD] hover:shadow-[#9D4EDD]/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#C77DFF]">Is There Any Fee?</h3>
                <p className="text-gray-300 leading-relaxed">
                  No. UMANG is completely free. From training to internship — every part of the program is sponsored by SpectoV & Internshipkaro.
                </p>
              </div>

              <div className="flex-1 p-8 rounded-2xl bg-[#0D0D0D] shadow-xl border border-transparent hover:border-[#9D4EDD] hover:shadow-[#9D4EDD]/30 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">How to Register?</h3>
                <div className="space-y-6">
                  {faqSteps.map((step, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 transition-all duration-500 ease-in-out transform ${
                        currentFAQStep === index ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-4 opacity-50 scale-95'
                      }`}
                    >
                      <span className={`flex-shrink-0 mt-1 p-2 rounded-full transition-colors duration-500 ${currentFAQStep === index ? 'bg-[#9D4EDD] text-white' : 'bg-gray-700 text-gray-400'}`}>
                        {step.icon}
                      </span>
                      <p className={`flex-1 text-gray-300 transition-colors duration-500 ${currentFAQStep === index ? 'text-white' : 'text-gray-400'}`}>
                        {step.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Faq