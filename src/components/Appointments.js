import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Ensure this import is correct

const Appointments = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    // Check if login token is found in local storage
    const token = localStorage.getItem('logintoken');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('logintoken');
      if (token) {
        const { id } = jwtDecode(token);
        const data = { ...formData, patientId: id };
        console.log(data);
        const response = await fetch('http://localhost:4000/appointment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log(responseData);
        } else {
          // Handle error response
          const errorData = await response.json();
          console.error('Error:', errorData.message);
          alert('An error occurred. Please try again later.');
        }
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Book an Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Additional Information</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-gray-900"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointments;
