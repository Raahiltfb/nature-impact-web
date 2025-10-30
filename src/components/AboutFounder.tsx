
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
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden">
                    <img 
                      src="/lovable-uploads/778f9cb0-01a8-4587-86ee-b3c062778725.png" 
                      alt="Ashish Mehta - Founder & CEO of Second Nature"
                      className="w-full h-full object-cover"
                    />
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
                    Ashish brings a unique mix of “solutioning” skills to the sustainability and climate change space grounded on a rich 20-year corporate experience spanning engineering, finance, retail & big-data consumer analytics (Tier 1 companies: Emerson, Goldman Sachs, Fidelity, dunnhumby, across the US and India) – ending his stint in the corporate world as the head of a newly formed JV between dunnhumby and Future Group - based out of Mumbai. A burning desire to contribute to the fight against climate change led him, over 7 years ago, to switch to consulting work on decentralized solutions in clean energy, energy access, and waste management. He started Second Nature Sustainable Solutions; and in 2020 became the co-founding partner of MinusCO2- a solar and clean-tech developer that leverages retail impact investment.
                  </p>

                  <p className="text-lg leading-relaxed text-gray-700">
                    Ashish sees promise in Impact Finance, and is of the view that people with his background need to become the enabling link between social enterprises and investors (philanthropic, for-profit, and retail) to forge lasting impact. Ashish has a B.E. from the Delhi Institute of Technology (now Netaji Subhas University of Technology) and an M.S. in Applied Systems from the University of Cincinnati, Ohio, US. He is also an active member of the Forum for Responsible Living, The Impact Future Project, and Aspire Circle. Ashish has had multiple speaking engagements, authorship of 20+ articles in periodicals / books / journals / conference proceedings, and 8+ US patents.
                  </p>

                  {/* Social Links */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <a
                      href="https://www.linkedin.com/in/mehtaashish2015/"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors duration-200"
                      >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://minusco2.in/"
                      className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                      >
                      <ExternalLink className="w-5 h-5" />
                      <span>Minus CO2</span>
                    </a>
                    <a
                      href="https://secondnaturess.com/"
                      className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition-colors duration-200"
                      >
                      <ExternalLink className="w-5 h-5" />
                      <span>Second Nature</span>
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
