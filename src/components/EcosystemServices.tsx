
import React from 'react';
import { Trees, Waves, Mountain, Flower } from 'lucide-react';

const EcosystemServices = () => {
  const ecosystems = [
    {
      id: 1,
      name: 'Forest Restoration',
      location: 'Western Ghats, India',
      icon: Trees,
      intervention: 'Community-based reforestation and sustainable forestry practices',
      impact: '2,000 hectares restored, 15% increase in biodiversity',
      opportunity: 'Scale to 10,000 hectares with carbon credit mechanism',
      color: 'green'
    },
    {
      id: 2,
      name: 'Watershed Management',
      location: 'Rajasthan, India',
      icon: Waves,
      intervention: 'Water harvesting and soil conservation techniques',
      impact: 'Improved water table, benefiting 5,000 farmers',
      opportunity: 'Replicate model across drought-prone regions',
      color: 'blue'
    },
    {
      id: 3,
      name: 'Mountain Ecosystems',
      location: 'Himalayas, India',
      icon: Mountain,
      intervention: 'High-altitude pasture management and wildlife corridors',
      impact: 'Protected 500 sq km of critical habitat',
      opportunity: 'Expand to entire mountain ecosystem network',
      color: 'purple'
    },
    {
      id: 4,
      name: 'Grassland Conservation',
      location: 'Deccan Plateau, India',
      icon: Flower,
      intervention: 'Sustainable grazing and native species restoration',
      impact: 'Restored 800 hectares of degraded grasslands',
      opportunity: 'Create regional grazing management network',
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200'
    };
    return colorMap[color] || colorMap.green;
  };

  return (
    <section id="ecosystem-services" className="min-h-screen snap-start py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Payments for Ecosystem Services
          </h2>

          {/* Quote */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed mb-6">
              "In theory, there is no difference between theory and practice. But in practice, there is."
            </blockquote>
            <cite className="text-blue-600 text-xl font-medium">
              - Yogi Berra
            </cite>
          </div>

          {/* Context */}
          <div className="max-w-5xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              To bring predictability and scale to ecosystem restoration, new-age financial constructs, rooted in the Impact Investment paradigm are needed. Models such as Payments for Ecosystem Services (PES) create a vibrant socio-economic system that incentivises communities as ecosystem stewards.
            </p>

            {/* Diagram Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <div className="w-full h-64 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 text-lg mb-2">PES Framework Diagram</p>
                  <p className="text-gray-500">Interactive ecosystem services flow chart</p>
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Our approach integrates traditional ecological knowledge with modern financial instruments, creating sustainable revenue streams for communities while ensuring long-term ecosystem health. This model has proven effective across diverse landscapes and can be scaled to address global environmental challenges.
            </p>
          </div>

          {/* Ecosystem Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {ecosystems.map((ecosystem) => (
              <div key={ecosystem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-4 ${getColorClasses(ecosystem.color)}`}>
                    <ecosystem.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{ecosystem.name}</h3>
                  <p className="text-blue-600 font-medium text-center mb-4">{ecosystem.location}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Intervention</h4>
                      <p className="text-sm text-gray-600">{ecosystem.intervention}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Impact</h4>
                      <p className="text-sm text-gray-600">{ecosystem.impact}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Opportunity</h4>
                      <p className="text-sm text-gray-600">{ecosystem.opportunity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemServices;
