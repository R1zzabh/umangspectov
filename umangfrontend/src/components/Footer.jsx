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
const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] py-10 px-4 border-t border-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-8 md:space-y-0 text-sm">
          <div className="flex items-center space-x-2">
            <Rocket size={20} className="text-[#3A86FF]" />
            <span className="text-lg font-bold text-[#00509E]">UMANG</span>
          </div>

          <div className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-[#9D4EDD] transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-[#9D4EDD] transition-colors duration-300 transform hover:scale-110">
              <Youtube size={24} />
            </a>
            <a href="#" className="hover:text-[#9D4EDD] transition-colors duration-300 transform hover:scale-110">
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-center md:text-right text-gray-500">
            Powered by Sankalp | Sponsored by SpectoV & Internshipkaro
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p className="mb-2 md:mb-0">© 2025 SpectoV All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer