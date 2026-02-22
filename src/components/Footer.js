import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHeartPulse } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <FaHeartPulse className="text-2xl text-blue-400 group-hover:text-blue-300 transition-colors" />
              <span className="text-2xl font-bold group-hover:text-blue-300 transition-colors">MedLink</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Your trusted partner in healthcare. Professional medical services available 24/7 for your wellbeing.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/hospital" className="text-slate-400 hover:text-blue-400 transition-colors">Find Hospital</Link></li>
              <li><Link to="/appointments" className="text-slate-400 hover:text-blue-400 transition-colors">Book Appointment</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/patient" className="text-slate-400 hover:text-blue-400 transition-colors">Health Records</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#faq" className="text-slate-400 hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact Support</a></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-blue-400 transition-colors">Send Feedback</Link></li>
              <li><a href="#privacy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaPhone className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-slate-400 hover:text-blue-400 transition-colors">+91-9876-543-210</a>
              </li>
              <li className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:support@medlink.com" className="text-slate-400 hover:text-blue-400 transition-colors">support@medlink.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-slate-400">123 Medical Center Rd, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800"></div>

        {/* Footer Bottom */}
        <div className="py-8 text-center">
          <p className="text-slate-400 text-sm">
            &copy; 2024 MedLink Services. All rights reserved. | Trusted Healthcare Solutions
          </p>
          <p className="text-slate-500 text-xs mt-2">
            HIPAA Compliant • Secure & Encrypted • Available 24/7
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
