
import React from 'react';
import { Linkedin, ExternalLink, Mail } from 'lucide-react';

const AboutFounder = () => {
  return (
    <section id="about-founder" className="min-h-screen snap-start py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            About the Founder
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-xl p-8 lg:p-12">
              {/* Founder Info */}
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-6xl font-bold">AM</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-left space-y-6">
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Ashish Mehta
                  </h3>
                  <p className="text-xl text-blue-600 font-medium">
                    Founder & CEO
                  </p>
                  
                  <p className="text-lg leading-relaxed text-gray-700">
                    A visionary leader in impact investing and sustainable development, Ashish brings over a decade of experience in bridging the gap between capital markets and social enterprises. His passion for creating systemic change drives Second Nature's mission to accelerate the deployment of resources for transformative impact.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-700">
                    With a deep understanding of both financial markets and social innovation, Ashish has been instrumental in developing new models of impact investment that prioritize long-term sustainability over short-term gains.
                  </p>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="#"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Portfolio</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Contact</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
