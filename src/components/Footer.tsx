
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/93223f70-1a54-4d8c-8465-cb755cc36f18.png" 
                alt="Second Nature" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-300 text-lg">
                Clean-tech. Consumer-centric. Best-in-class.
              </p>
            </div>
            <p className="text-gray-400">
              Second Nature is a sector-agnostic impact and climate finance advisory and consulting solutions company, leveraging capital towards achieving the Sustainable Development Goals.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">mehtaashish2015@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+91 992 095 5475</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => document.querySelector('#impact-economy')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Impact Economy
              </button>
              <button
                onClick={() => document.querySelector('#about-founder')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                About the Founder
              </button>
              <button
                onClick={() => document.querySelector('#impact-journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Impact Journey
              </button>
              <button
                onClick={() => document.querySelector('#clean-energy')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
              >
                Clean Energy
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <ExternalLink className="w-6 h-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">
                © 2024 Second Nature. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="text-blue-400 hover:text-blue-300 transition-colors mt-2"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
