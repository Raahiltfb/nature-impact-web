
import React from 'react';
import { Trees, Waves, Mountain, Flower } from 'lucide-react';

const EcosystemServices = () => {
  const ecosystems = [
    {
      id: 1,
      name: 'Forests of Wayanad, Kerala',
      location: 'Kerala, India',
      image: '/lovable-uploads/bec9b3c3-f2a9-41c2-98ae-61c6855f7a7b.png',
      organization: '<a href="https://forestfirstsamithi.org/" target="_blank" rel="noopener noreferrer">FFS: Forest First Samithi (NGO)</a>',
      description: 'Sustainable livelihoods through conservation and restoration of degraded forest lands.',
      details: 'Since the 1950s, the forest cover has reduced by 62%, driven by the invasion of alien species like Lantana camara and Senna spectabilis that are suppressing native biodiversity and the livelihoods of the tribal forest communities.',
      intervention: 'FFS is working on forest land restoration and habitat conservation by effective removal of invasive species and securing native biodiversity (including rare, endangered and threatened IUCN species), with direct participatory support of the local tribal communities.',
      impact: [
        '400 acres have been restored',
        '40+ saplings planted; 04 nurseries that conserve 80 species',
        '28,300 person days of paid work for 68 restorers'
      ],
      opportunity: 'Scale across the entire forest in Wayanad and leverage learnings and techniques for the Nilgiris biodiversity hotspot.',
      color: 'green'
    },
    {
      id: 2,
      name: 'Forests of Uttarakhand',
      location: 'Uttarakhand, India',
      image: '/lovable-uploads/9749b738-1c10-4610-82fe-00d53e0f715d.png',
      organization: '<a href="https://www.hastenregeneration.org/home" target="_blank" rel="noopener noreferrer">Hasten Regeneration (NGO)</a>',
      description: 'Circular economy model for climate resilience, biodiversity restoration and community livelihoods.',
      details: 'In Uttarakhand, the accumulation of dry pine needles leads to destructive wild fires (over 5400 ha forest cover lost since 2000) that leads to excessive soil loss and erosion (253 landslides between 2018-21), adversely impacting agricultural productivity.',
      intervention: 'Hasten targets pine needle accumulation; processes them into biochar, syngas and bio-oil. Biochar is applied back to the forest soil improving soil quality and carbon sequestration; native species are introduced, accelerating revival of native oak forests. Additionally, these activities provide clean energy and livelihood opportunities.',
      impact: [
        '5 million new native trees with over 30 native species',
        '200 micro-entrepreneurs with a focus on women and youth – leading to 10,000 jobs',
        '5000 ha of degraded community forest areas can be restored'
      ],
      opportunity: 'Enhancing climate resilience, carbon sequestration, reviving local biodiversity and groundwater recharge.',
      color: 'orange'
    },
    {
      id: 3,
      name: 'Coastal Region of Sundarbans, West Bengal',
      location: 'West Bengal, India',
      image: '/lovable-uploads/aa8a9214-5c3c-4e3e-a1e4-4076279976af.png',
      organization: '<a href="https://ricesub.in/" target="_blank" rel="noopener noreferrer">ELF: The Eco-Logical Foundation (NGO)</a>',
      description: 'Harmonizing Sundarbans\' Economy and the Mangrove Ecosystem.',
      details: 'The Sundarbans are the largest mangrove forest in the world. Climate stressors (4 recent cyclones) in an agrarian economy that is not aligned with the mangrove ecology, such as high-variety paddy, puts the lives and livelihoods of millions of people at risk.',
      intervention: 'ELF\'s solution is two-fold: first, to make local agriculture climate disaster resilient. Second, to establish harmonious livelihood relationships between people and the ecosystem, such as following saline-tolerant crop varieties, setting up mangrove nurseries, and adopting responsible construction.',
      impact: [
        '28 local rice varieties re-introduced',
        'Studies on native honey-bees and local honey collectors',
        'Initiated development of a mangrove interpretation and learning centre'
      ],
      opportunity: '54 islands, spread across ~5400 sq. km and inhabited by more than 4.5 million people have the potential to build a thriving mangrove ecology and local economy.',
      color: 'blue'
    },
    {
      id: 4,
      name: 'Baramati District of Maharashtra',
      location: 'Maharashtra, India',
      image: '/lovable-uploads/440a5d01-84f1-4553-8f6d-93709e155ba9.png',
      organization: '<a href="https://wri-india.org/events/2022/7/land-accelerator-south-asia-cohort-2022" target="_blank" rel="noopener noreferrer">Earthyantra</a>',
      description: 'High-density income generating plantations for marginal & small farmland owners.',
      details: 'Despite this being a water scarce region, sugarcane is a major cash crop in response to the heavy sugar industries. However, small farmlands are at risk due to the growing impact of climate change and unsustainable depletion of ground water.',
      intervention: 'Earthyantra\'s innovative model: to lease out parcels of land from small farmland owners and to create private "mini-forests" by planting hyper-native species, in lieu of sugarcane. This increases the floral and faunal biodiversity, while creating a steady source of income for the farmers.',
      impact: [
        '18 hyper-native species planted on 0.25 acres',
        '90% survival rate, in 3+ years, for 1000 saplings',
        'Avoided 17.5 lakh litres of water'
      ],
      opportunity: 'Improved biodiversity and carbon sequestration, higher population of native species, water table and scale this type program can scale for distressed small farmers.',
      color: 'emerald'
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

            {/* PES Framework Diagram */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <img 
                src="/lovable-uploads/f55ea0f3-3f4a-423a-88a4-18e6702d992f.png" 
                alt="Payment for Ecosystem Services Framework Diagram showing the flow between upstream community, ecosystem services, downstream users, and payments"
                className="w-full h-auto rounded-xl"
              />
            </div>

            <p className="text-lg leading-relaxed text-gray-700">
              Our approach integrates traditional ecological knowledge with modern financial instruments, creating sustainable revenue streams for communities while ensuring long-term ecosystem health. This model has proven effective across diverse landscapes and can be scaled to address global environmental challenges.
            </p>
          </div>

          {/* Ecosystem Cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {ecosystems.map((ecosystem) => (
              <div key={ecosystem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={ecosystem.image} 
                    alt={ecosystem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{ecosystem.name}</h3>
                  <p className="text-sm text-blue-500 font-medium mb-3">{ecosystem.description}</p>
                  <p className="text-sm font-medium text-gray-800 mb-3">{ecosystem.organization}</p>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{ecosystem.details}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Intervention:</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{ecosystem.intervention}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Impact:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {ecosystem.impact.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Opportunity:</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{ecosystem.opportunity}</p>
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
