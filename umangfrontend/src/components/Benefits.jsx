import React from 'react'
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
} from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-400">
              Benefits
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
              Here’s everything you’ll gain from this unique initiative:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Free Sankalp Training Program',
                  description: 'Get access to industry-standard training modules, curated by experts to help you build strong technical foundations.',
                  icon: <BookOpen size={48} className="text-[#3A86FF]" />,
                },
                {
                  title: '3 Months Paid Internship',
                  description: 'Work on real-world projects and get hands-on experience in your chosen domain.',
                  icon: <Briefcase size={48} className="text-[#3A86FF]" />,
                },
                {
                  title: 'Training Completion Certificate',
                  description: 'Showcase your newly acquired skills to potential employers.',
                  icon: <Award size={48} className="text-[#3A86FF]" />,
                },
                {
                  title: 'Internship Completion Certificate',
                  description: 'Validate your professional experience and achievements.',
                  icon: <Award size={48} className="text-[#3A86FF]" />,
                },
                {
                  title: 'Letter of Recommendation',
                  description: 'Stand out in the competitive job market with strong endorsements from industry leaders.',
                  icon: <Star size={48} className="text-[#3A86FF]" />,
                },
                {
                  title: 'Goodies & Perks',
                  description: 'Enjoy exciting gifts and rewards for your participation and performance.',
                  icon: <Gift size={48} className="text-[#3A86FF]" />,
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] p-8 rounded-2xl shadow-xl hover:shadow-[#9D4EDD]/30 border border-transparent hover:border-[#9D4EDD] transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-[#C77DFF] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Benefits