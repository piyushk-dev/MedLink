import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fullName === '') {
      toast.error("Full name cannot be empty");
    } else if (email === '') {
      toast.error("Email cannot be empty");
    } else if (message === '') {
      toast.error("Message cannot be empty");
    } else {
      const user = { fullName, email, message };
      console.log(user);
      fetch("http://localhost:4000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      }).then(() => {
        console.log("Information sent");
        toast.error("Response sent");
        navigate("/");
      });
    }
  };

  return (
    <section className="max-w-lg mx-auto p-4 mt-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-lg">Full Name</label>
          <input 
            type="text" 
            id="fullName" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg">Email</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded" 
            required 
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg">Message</label>
          <textarea 
            id="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded h-32" 
            required
          ></textarea>
        </div>

        <div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
