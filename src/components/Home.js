import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaCalendarCheck, FaHeartPulse, FaCapsules, FaPhone, FaUserMd, FaStar, FaCheckCircle, FaClock, FaShieldAlt } from 'react-icons/fa6';

const Home = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.9,
      image: '👨‍⚕️'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'General Practitioner',
      experience: '10 years',
      rating: 4.8,
      image: '👩‍⚕️'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialty: 'Orthopedist',
      experience: '12 years',
      rating: 4.9,
      image: '👨‍⚕️'
    },
    {
      id: 4,
      name: 'Dr. Neha Verma',
      specialty: 'Pediatrician',
      experience: '8 years',
      rating: 4.7,
      image: '👩‍⚕️'
    },
  ];

  const testimonials = [
    {
      name: 'Piyush Kumar',
      role: 'Patient',
      text: 'MedLink saved my life! I found a hospital bed during an emergency in just minutes. The entire process was smooth and professional.',
      rating: 5
    },
    {
      name: 'Anadi Singh',
      role: 'Patient',
      text: 'The online consultation feature is exceptional. I got professional medical advice without leaving my home. Highly recommended!',
      rating: 5
    },
    {
      name: 'Sairam Tiwari',
      role: 'Patient',
      text: 'Accessing health records has never been easier. The security is top-notch and the interface is user-friendly.',
      rating: 4
    },
  ];

  const services = [
    {
      icon: <FaHeartPulse className="text-3xl" />,
      title: 'Emergency Services',
      description: 'Quick access to emergency medical care and ambulance services',
      link: '/hospital'
    },
    {
      icon: <FaCalendarCheck className="text-3xl" />,
      title: 'Appointment Booking',
      description: 'Easy scheduling with real-time availability calendar',
      link: '/appointments'
    },
    {
      icon: <FaStethoscope className="text-3xl" />,
      title: 'Online Consultations',
      description: 'Consult with experienced doctors from anywhere',
      link: '/appointments'
    },
    {
      icon: <FaCapsules className="text-3xl" />,
      title: 'Pharmacy Services',
      description: 'Order medicines online with home delivery',
      link: '/hospital'
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                Your Health, Our <span className="text-blue-600">Priority</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                MedLink connects you with trusted healthcare professionals and advanced medical services. Experience the future of healthcare today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/appointments" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg">
                Book Appointment
              </Link>
              <Link to="/hospital" className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Find Hospital
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200">
              <div>
                <p className="text-3xl font-bold text-blue-600">1520+</p>
                <p className="text-sm text-slate-600">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-slate-600">Doctors</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-600">24/7</p>
                <p className="text-sm text-slate-600">Support</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-blue-50 rounded-2xl p-8 shadow-2xl">
              <div className="text-8xl text-center">🏥</div>
              <p className="text-center text-slate-600 mt-4">Professional Healthcare at Your Fingertips</p>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg border-l-4 border-blue-600">
              <div className="flex items-center space-x-2">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-sm font-semibold text-slate-900">HIPAA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <FaShieldAlt className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold text-slate-900">Secure & Private</p>
                <p className="text-sm text-slate-600">Your data is encrypted</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold text-slate-900">24/7 Available</p>
                <p className="text-sm text-slate-600">Always there when needed</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaUserMd className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold text-slate-900">Expert Doctors</p>
                <p className="text-sm text-slate-600">Verified professionals</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaCheckCircle className="text-3xl text-blue-600" />
              <div>
                <p className="font-semibold text-slate-900">Fast Service</p>
                <p className="text-sm text-slate-600">Quick response time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comprehensive healthcare solutions designed for your convenience and wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="group">
                <div className="bg-white border border-slate-200 rounded-xl p-8 h-full hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Directory */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Expert Doctors</h2>
            <p className="text-xl text-slate-600">Highly qualified and experienced healthcare professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id} 
                onClick={() => setSelectedDoctor(doctor)}
                className="bg-white rounded-xl p-6 cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-slate-200"
              >
                <div className="text-5xl text-center mb-4">{doctor.image}</div>
                <h3 className="font-semibold text-slate-900 text-lg text-center">{doctor.name}</h3>
                <p className="text-blue-600 text-sm text-center mb-3">{doctor.specialty}</p>
                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className={`text-sm ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-slate-300'}`} />
                  ))}
                  <span className="text-xs text-slate-600 ml-1">{doctor.rating}</span>
                </div>
                <p className="text-xs text-slate-600 text-center">{doctor.experience} experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-slate-600">Real experiences from real patients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of patients who trust MedLink for their healthcare needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/appointments" className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Book Now
            </Link>
            <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors duration-300">
              <FaPhoneVolume className="mr-2" /> Call Us
            </button>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Medical Emergency?</h3>
              <p className="text-slate-600">Available 24/7 for urgent medical assistance</p>
            </div>
            <a href="tel:+919876543210" className="mt-4 md:mt-0 inline-flex items-center space-x-3 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300">
              <FaPhone /> Call: +91-9876-543-210
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

export default Home;
