import React from 'react'

const Requirements = () => {
  return (
    <section id="requirements" className="py-20 md:py-28 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-blue-400">
              Who Can Apply?
            </h2>
            <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
              If you are a student in a technical field from any university across India, you are eligible to join. This includes (but is not limited to):
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'B.Tech / B.E (All branches)',
                'BCA (Bachelor of Computer Applications)',
                'MCA (Master of Computer Applications)',
                'B.Sc / M.Sc in Computer Science / IT',
                'Diploma in Computer Science / IT',
                'Any other relevant technical program'
              ].map((degree, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] p-6 rounded-xl border-l-4 border-[#9D4EDD] shadow-lg shadow-[#9D4EDD]/20 transform hover:scale-105 transition-all duration-300"
                >
                  <p className="text-lg font-semibold text-gray-100">{degree}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-300 max-w-2xl mx-auto mt-12">
              No matter where you are in your academic journey, if you have the passion to learn and grow, UMANG is for you.
            </p>
          </div>
        </section>
  )
}

export default Requirements