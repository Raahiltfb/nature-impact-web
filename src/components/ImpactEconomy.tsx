
import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';

const ImpactEconomy = () => {
  return (
    <section id="impact-economy" className="min-h-screen snap-start py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Impact Economy
          </h2>

          {/* Quote */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed mb-6">
              "The future is not some place we are going to, but one we are creating."
            </blockquote>
            <cite className="text-blue-600 text-xl font-medium">
              - John Schaar
            </cite>
          </div>

          {/* Main Content */}
          <div className="max-w-5xl mx-auto space-y-8">
            <p className="text-xl sm:text-2xl leading-relaxed text-gray-700 font-medium">
              To accelerate the deployment of capital and resources by investors (funds, philanthropy, retail), corporations, and for-profit and not-for-profit social enterprises, for transformative and measurable People, Planet, and Profit (3P) impact.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600">
              The impact economy represents a paradigm shift where financial returns are measured not just in monetary terms, but in tangible positive outcomes for society and the environment. This new economic model recognizes that sustainable prosperity requires a holistic approach that balances profit with purpose.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">People</h3>
              <p className="text-gray-600">Empowering communities and creating sustainable livelihoods</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planet</h3>
              <p className="text-gray-600">Protecting natural ecosystems and biodiversity</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Profit</h3>
              <p className="text-gray-600">Generating sustainable financial returns</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactEconomy;
