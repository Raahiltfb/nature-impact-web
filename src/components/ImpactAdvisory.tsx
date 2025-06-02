
import React from 'react';
import { Building2, Users, Leaf, Zap, Heart } from 'lucide-react';

const ImpactAdvisory = () => {
  const impactEnterprises = [
    {
      id: 1,
      name: 'EcoTech Solutions',
      logo: Building2,
      description: 'Developing sustainable technology solutions for urban waste management',
      impact: 'Reduced waste by 40% in partner cities',
      color: 'green'
    },
    {
      id: 2,
      name: 'Community Energy Co-op',
      logo: Zap,
      description: 'Empowering rural communities through distributed renewable energy',
      impact: 'Provided clean energy to 10,000+ households',
      color: 'yellow'
    },
    {
      id: 3,
      name: 'AgriSustain',
      logo: Leaf,
      description: 'Promoting regenerative agriculture and farmer livelihoods',
      impact: 'Improved yields for 5,000+ smallholder farmers',
      color: 'emerald'
    },
    {
      id: 4,
      name: 'HealthBridge',
      logo: Heart,
      description: 'Bridging healthcare gaps in underserved communities',
      impact: 'Reached 50,000+ patients in remote areas',
      color: 'red'
    },
    {
      id: 5,
      name: 'EduTech Impact',
      logo: Users,
      description: 'Leveraging technology for quality education access',
      impact: 'Educated 25,000+ children in rural schools',
      color: 'blue'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-100 text-green-600 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="impact-advisory" className="min-h-screen snap-start py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Impact Advisory Portfolio
          </h2>

          {/* Quote */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 lg:p-12">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed mb-6">
              "If you want to build a ship, don't drum up people together to collect wood and don't assign them tasks and work, but rather teach them to long for the endless immensity of the sea."
            </blockquote>
            <cite className="text-blue-600 text-xl font-medium">
              - Antoine de Saint-Exupéry
            </cite>
          </div>

          {/* Context */}
          <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              A compelling need to co-create an ecosystem that supports and nurtures socio-ecological change-makers, and enables their transformative initiatives to scale and deliver impact.
            </p>
            
            <p>
              In essence, the Impact enterprise is the prime mover; it comes first. The Impact advisor/investee exists because of the former; it comes second. The formal relationship between these two entities needs to reflect this fundamental dynamic.
            </p>
            
            <p>
              Our inference is that the traditional models of - consulting and advisory – or matchmaking between buyer/seller or investor/investee – or the accelerator and incubator models for start-ups – are not sufficient.
            </p>
            
            <p className="font-semibold text-blue-600">
              Our hypothesis: a values-based collaboration, built on trust, mutual respect, and shared goals – To Facilitate Systems Change in an Impact Economy.
            </p>
            
            <p>
              With the following Impact Enterprises, both for-profit and not-for profit, we have redefined the parameters of the formal relationship to go beyond the traditional boundaries of organization type, structure and size, duration and exit, financial model(s), mutual and limited liabilities, and delineation of strict hierarchies, scope, and decision-making matrices.
            </p>
          </div>

          {/* Impact Enterprises Grid - 3-2 Layout */}
          <div className="max-w-7xl mx-auto mt-16">
            {/* Top Row - 3 Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {impactEnterprises.slice(0, 3).map((enterprise) => (
                <div key={enterprise.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-6 ${getColorClasses(enterprise.color)}`}>
                      <enterprise.logo className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{enterprise.name}</h3>
                    <p className="text-gray-600 mb-4 text-center">{enterprise.description}</p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-blue-600 text-center">{enterprise.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Cards Centered */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                {impactEnterprises.slice(3, 5).map((enterprise) => (
                  <div key={enterprise.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto mb-6 ${getColorClasses(enterprise.color)}`}>
                        <enterprise.logo className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{enterprise.name}</h3>
                      <p className="text-gray-600 mb-4 text-center">{enterprise.description}</p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm font-semibold text-blue-600 text-center">{enterprise.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactAdvisory;
