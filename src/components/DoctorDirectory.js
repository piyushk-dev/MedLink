import React, { useState } from 'react';
import { FaStar, FaSearch } from 'react-icons/fa6';

const DoctorDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');

  const doctors = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      specialty: 'Cardiologist',
      experience: '15 years',
      rating: 4.9,
      reviews: 128,
      location: 'Delhi',
      availability: 'Available Today',
      fee: '₹500'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'General Practitioner',
      experience: '10 years',
      rating: 4.8,
      reviews: 95,
      location: 'Mumbai',
      availability: 'Available Tomorrow',
      fee: '₹400'
    },
    {
      id: 3,
      name: 'Dr. Amit Patel',
      specialty: 'Orthopedist',
      experience: '12 years',
      rating: 4.9,
      reviews: 112,
      location: 'Bangalore',
      availability: 'Available Today',
      fee: '₹550'
    },
    {
      id: 4,
      name: 'Dr. Neha Verma',
      specialty: 'Pediatrician',
      experience: '8 years',
      rating: 4.7,
      reviews: 87,
      location: 'Pune',
      availability: 'Available in 2 days',
      fee: '₹450'
    },
    {
      id: 5,
      name: 'Dr. Arun Singh',
      specialty: 'Dermatologist',
      experience: '11 years',
      rating: 4.8,
      reviews: 105,
      location: 'Hyderabad',
      availability: 'Available Today',
      fee: '₹480'
    },
    {
      id: 6,
      name: 'Dr. Ananya Gupta',
      specialty: 'Gynecologist',
      experience: '9 years',
      rating: 4.9,
      reviews: 118,
      location: 'Kolkata',
      availability: 'Available Tomorrow',
      fee: '₹520'
    },
  ];

  const specialties = ['All', 'Cardiologist', 'General Practitioner', 'Orthopedist', 'Pediatrician', 'Dermatologist', 'Gynecologist'];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Find Your Doctor</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Browse through our network of highly qualified and experienced doctors
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="space-y-6">
            {/* Search Box */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-500"
              />
            </div>

            {/* Specialty Filter */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Filter by Specialty</h3>
              <div className="flex flex-wrap gap-3">
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                      selectedSpecialty === specialty
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-200">
              {/* Header with Specialty */}
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
                <div className="text-4xl mb-2">👨‍⚕️</div>
                <h2 className="text-xl font-bold">{doctor.name}</h2>
                <p className="text-blue-100">{doctor.specialty}</p>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={`text-sm ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-900">{doctor.rating}</span>
                  </div>
                  <span className="text-xs text-slate-600">({doctor.reviews} reviews)</span>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Experience:</span>
                    <span className="font-semibold text-slate-900">{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Location:</span>
                    <span className="font-semibold text-slate-900">{doctor.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Consultation Fee:</span>
                    <span className="font-semibold text-blue-600">{doctor.fee}</span>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                  <p className="text-sm text-green-700 font-medium">{doctor.availability}</p>
                </div>

                {/* Book Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300 mt-4">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">No doctors found matching your criteria. Please try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDirectory;
