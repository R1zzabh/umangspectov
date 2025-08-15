import React from 'react'

const RegisterForm = () => {
  return (
    <section id="register" className="py-20 md:py-28 bg-[#1A1A1A] px-4">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-blue-400">
              Register
            </h2>
            <form className="space-y-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="text" 
                placeholder="University" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="text" 
                placeholder="University Location" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="text" 
                placeholder="Graduation Year" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="text" 
                placeholder="Preferred Domain" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="text" 
                placeholder="CGPA" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="text" 
                placeholder="Participated in Hackathon (Yes/No)" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <input 
                type="url" 
                placeholder="LinkedIn URL" 
                className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-gray-700 focus:outline-none focus:border-[#3A86FF] transition-colors duration-300"
              />
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-[#3A86FF] text-white font-semibold rounded-full shadow-lg hover:shadow-[#9D4EDD] hover:bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] transition-all duration-300 transform hover:scale-105"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
  )
}

export default RegisterForm