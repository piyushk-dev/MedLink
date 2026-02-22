import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { FaUser, FaEnvelope, FaPhone, FaCalendar, FaClock, FaFileAlt, FaCheckCircle } from 'react-icons/fa6';
import toast from 'react-hot-toast';

const Appointments = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('logintoken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const token = localStorage.getItem('logintoken');
      if (token) {
        const { id } = jwtDecode(token);
        const data = { ...formData, patientId: id };
        const response = await fetch('http://16.16.173.47:4000/appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSuccess(true);
          toast.success('Appointment booked successfully!');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        } else {
          const errorData = await response.json();
          toast.error(errorData.message || 'Failed to book appointment');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
        <div className="text-center">
          <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Appointment Confirmed!</h2>
          <p className="text-slate-600 mb-6">Your appointment has been successfully booked.</p>
          <p className="text-slate-600 mb-8">Redirecting to home...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
          <p className="text-lg text-slate-600">Schedule a consultation with our experienced medical professionals</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-slate-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="flex items-center text-sm font-semibold text-slate-900 mb-2">
                <FaUser className="mr-2 text-blue-600" />
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="flex items-center text-sm font-semibold text-slate-900 mb-2">
                <FaEnvelope className="mr-2 text-blue-600" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="flex items-center text-sm font-semibold text-slate-900 mb-2">
                <FaPhone className="mr-2 text-blue-600" />
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXX-XXXX-XXXX"
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-400"
              />
            </div>

            {/* Date */}
            <div>
              <label htmlFor="date" className="flex items-center text-sm font-semibold text-slate-900 mb-2">
                <FaCalendar className="mr-2 text-blue-600" />
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
              />
            </div>

            {/* Time */}
            <div>
              <label htmlFor="time" className="flex items-center text-sm font-semibold text-slate-900 mb-2">
                <FaClock className="mr-2 text-blue-600" />
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center text-sm font-semibold text-slate-900 mb-2">
                <FaFileAlt className="mr-2 text-blue-600" />
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any specific concerns or notes for the doctor..."
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                isLoading
                  ? 'bg-blue-400 text-white cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
              }`}
            >
              {isLoading ? 'Booking Appointment...' : 'Book Appointment'}
            </button>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
              <p className="text-sm text-slate-700">
                <span className="font-semibold">Need immediate help?</span> Call our 24/7 hotline: <span className="text-blue-600 font-bold">+91-9876-543-210</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
