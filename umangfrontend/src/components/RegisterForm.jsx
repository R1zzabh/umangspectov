import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    university: '',
    universityLocation: '',
    graduationYear: '',
    preferredDomain: '',
    cgpa: '',
    participatedInHackathon: '',
    linkedinUrl: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const graduationYears = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year <= currentYear + 6; year++) {
    graduationYears.push(year);
  }

  const domains = [
    'Web Development',
    'Mobile App Development',
    'Data Science & Analytics',
    'Machine Learning & AI',
    'Cloud Computing',
    'Cybersecurity',
    'DevOps',
    'UI/UX Design',
    'Software Testing',
    'Blockchain Development',
    'Game Development',
    'Digital Marketing'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.universityLocation.trim()) newErrors.universityLocation = 'University location is required';
    if (!formData.graduationYear) newErrors.graduationYear = 'Graduation year is required';
    if (!formData.preferredDomain) newErrors.preferredDomain = 'Preferred domain is required';
    
    if (!formData.cgpa.trim()) {
      newErrors.cgpa = 'CGPA is required';
    } else if (isNaN(formData.cgpa) || formData.cgpa < 0 || formData.cgpa > 10) {
      newErrors.cgpa = 'Please enter a valid CGPA (0-10)';
    }
    
    if (!formData.participatedInHackathon) {
      newErrors.participatedInHackathon = 'Please select if you have participated in hackathons';
    }
    
    if (formData.linkedinUrl && !formData.linkedinUrl.includes('linkedin.com')) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare data for API submission
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        university: formData.university,
        universityLocation: formData.universityLocation,
        graduationYear: formData.graduationYear,
        preferredDomain: formData.preferredDomain,
        cgpa: formData.cgpa,
        participatedInHackathon: formData.participatedInHackathon === 'Yes' ? 'true' : 'false',
        linkedinUrl: formData.linkedinUrl
      };

      // Make API call to backend
      const response = await fetch('http://localhost:5001/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        // Use a custom modal or a more integrated notification instead of alert
        // For now, we'll keep alert for simplicity
        alert('Registration submitted successfully! Check your email for confirmation.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          university: '',
          universityLocation: '',
          graduationYear: '',
          preferredDomain: '',
          cgpa: '',
          participatedInHackathon: '',
          linkedinUrl: ''
        });
        setErrors({});
      } else {
        // Handle validation errors from backend
        if (result.errors && Array.isArray(result.errors)) {
          // Map backend errors to frontend field names for better UX
          const backendErrors = {};
          result.errors.forEach(error => {
            if (error.includes('name')) backendErrors.name = error;
            else if (error.includes('email')) backendErrors.email = error;
            else if (error.includes('phone')) backendErrors.phone = error;
            else if (error.includes('university_location')) backendErrors.universityLocation = error;
            else if (error.includes('university')) backendErrors.university = error;
            else if (error.includes('graduation_year')) backendErrors.graduationYear = error;
            else if (error.includes('preferred_domain')) backendErrors.preferredDomain = error;
            else if (error.includes('cgpa')) backendErrors.cgpa = error;
            else if (error.includes('participated_in_hackathon')) backendErrors.participatedInHackathon = error;
            else if (error.includes('linkedin_url')) backendErrors.linkedinUrl = error;
          });

          if (Object.keys(backendErrors).length > 0) {
            setErrors(backendErrors);
          } else {
            alert('Please fix the following errors:\n' + result.errors.join('\n'));
          }
        } else if (result.error) {
          if (result.error === 'duplicate email') {
            setErrors({ email: 'This email is already registered. Please use a different email address.' });
          } else {
            alert('Error: ' + result.error);
          }
        } else {
          alert('Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] px-4 min-h-screen">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] bg-clip-text text-transparent">
            UMANG
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">
            Unlock Your Potential, Shape Your Future
          </p>
          <p className="text-lg text-blue-400 font-semibold mb-6">
            India's First Free Internship Training Program
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full">Powered by Sankalp</span>
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full">Sponsored by SpectoV</span>
            <span className="bg-[#2A2A2A] px-3 py-1 rounded-full">Sponsored by Internshipkaro</span>
          </div>
        </div>

        {/* Registration Form */}
        <div className="bg-[#1F1F1F] rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Register Now
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name" 
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.name ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address" 
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.email ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number" 
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.phone ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* University */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                University/College *
              </label>
              <input 
                type="text" 
                name="university"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="Enter your university/college name" 
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.university ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.university && <p className="text-red-400 text-sm mt-1">{errors.university}</p>}
            </div>

            {/* University Location */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                University Location *
              </label>
              <input 
                type="text" 
                name="universityLocation"
                value={formData.universityLocation}
                onChange={handleInputChange}
                placeholder="Enter your university location (City, State)" 
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.universityLocation ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.universityLocation && <p className="text-red-400 text-sm mt-1">{errors.universityLocation}</p>}
            </div>

            {/* Graduation Year */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Graduation Year *
              </label>
              <select 
                name="graduationYear"
                value={formData.graduationYear}
                onChange={handleInputChange}
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.graduationYear ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white`}
              >
                <option value="">Select your expected graduation year</option>
                {graduationYears.map(year => (
                  <option key={year} value={year} className="bg-[#0D0D0D]">{year}</option>
                ))}
              </select>
              {errors.graduationYear && <p className="text-red-400 text-sm mt-1">{errors.graduationYear}</p>}
            </div>

            {/* Preferred Domain */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Preferred Domain *
              </label>
              <select 
                name="preferredDomain"
                value={formData.preferredDomain}
                onChange={handleInputChange}
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.preferredDomain ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white`}
              >
                <option value="">Select your preferred domain</option>
                {domains.map(domain => (
                  <option key={domain} value={domain} className="bg-[#0D0D0D]">{domain}</option>
                ))}
              </select>
              {errors.preferredDomain && <p className="text-red-400 text-sm mt-1">{errors.preferredDomain}</p>}
            </div>

            {/* CGPA */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                CGPA/Percentage *
              </label>
              <input 
                type="number" 
                name="cgpa"
                value={formData.cgpa}
                onChange={handleInputChange}
                placeholder="Enter your CGPA (out of 10) or percentage" 
                step="0.01"
                min="0"
                max="10"
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.cgpa ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.cgpa && <p className="text-red-400 text-sm mt-1">{errors.cgpa}</p>}
            </div>

            {/* Participated in Hackathon */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Have you participated in any hackathon? *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="participatedInHackathon"
                    value="yes"
                    checked={formData.participatedInHackathon === 'yes'}
                    onChange={handleInputChange}
                    className="mr-2 w-4 h-4 text-[#3A86FF] bg-[#0D0D0D] border-gray-600 focus:ring-[#3A86FF]"
                  />
                  <span className="text-white">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input 
                    type="radio" 
                    name="participatedInHackathon"
                    value="no"
                    checked={formData.participatedInHackathon === 'no'}
                    onChange={handleInputChange}
                    className="mr-2 w-4 h-4 text-[#3A86FF] bg-[#0D0D0D] border-gray-600 focus:ring-[#3A86FF]"
                  />
                  <span className="text-white">No</span>
                </label>
              </div>
              {errors.participatedInHackathon && <p className="text-red-400 text-sm mt-1">{errors.participatedInHackathon}</p>}
            </div>

            {/* LinkedIn URL */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                LinkedIn Profile URL (Optional)
              </label>
              <input 
                type="url" 
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleInputChange}
                placeholder="https://www.linkedin.com/in/yourprofile" 
                className={`w-full p-4 rounded-xl bg-[#0D0D0D] border ${errors.linkedinUrl ? 'border-red-500' : 'border-gray-700'} focus:outline-none focus:border-[#3A86FF] focus:ring-2 focus:ring-[#3A86FF]/20 transition-all duration-300 text-white placeholder-gray-500`}
              />
              {errors.linkedinUrl && <p className="text-red-400 text-sm mt-1">{errors.linkedinUrl}</p>}
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-5 bg-gradient-to-r from-[#3A86FF] to-[#9D4EDD] text-white font-semibold text-lg rounded-xl shadow-2xl hover:shadow-[#3A86FF]/25 hover:from-[#4A96FF] hover:to-[#AD5EEE] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Register for UMANG'
              )}
            </button>

            {/* Additional Info */}
            <div className="text-center mt-8 p-6 bg-gradient-to-r from-[#3A86FF]/10 to-[#9D4EDD]/10 rounded-xl border border-[#3A86FF]/20">
              <p className="text-sm text-gray-300 mb-2">
                🎉 <strong className="text-[#3A86FF]">Completely FREE</strong> - No hidden charges, no fees
              </p>
              <p className="text-sm text-gray-300">
                📧 You'll receive a confirmation email within 24-48 hours
              </p>
            </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;