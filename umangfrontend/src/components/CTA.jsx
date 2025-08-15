import React from 'react'
import { ChevronDown } from 'lucide-react'
const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-[#1A1A1A] px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] z-0">
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#3A86FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/2 w-48 h-48 bg-[#9D4EDD] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-400">
              Why Choose UMANG?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
              Unlike traditional internships or training programs, UMANG is designed to bridge the gap between academic learning and industry expectations — without costing you a single rupee. By combining the proven success model of the Sankalp Training Program with a paid internship, UMANG ensures you graduate not just with knowledge, but with experience, recognition, and confidence.
            </p>
            <p className="text-gray-400 text-lg md:text-xl mb-12">
              This is more than just an internship — it’s the beginning of your professional transformation.
            </p>
            <a href="#register">
              <button className="px-8 py-4 bg-[#3A86FF] text-white font-semibold rounded-full shadow-lg hover:shadow-[#9D4EDD] hover:bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
                <span>Register Now</span>
                <ChevronDown size={20} className="transform -rotate-90" />
              </button>
            </a>
          </div>
        </section>
  )
}

export default CTA