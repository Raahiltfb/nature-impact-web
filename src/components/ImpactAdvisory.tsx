
import React from 'react';
import { Building2, Users, Leaf, Zap, Heart } from 'lucide-react';

const ImpactAdvisory = () => {
  const impactEnterprises = [
    {
      id: 1,
      name: 'Kesarjan',
      image: '/lovable-uploads/440a5d01-84f1-4553-8f6d-93709e155ba9.png',
      description: 'Upcycling Construction & Demolition waste into ready-to-use products for the construction industry. A circular economy company.',
      details: 'Kasalyan Enviro Systems is a waste management company that converts Recycled Dressed Bricks by bonding in different combinations of sand and mineral waste(such as fly ash), avoiding the waste from 2 brick kilns across a 1000 sq km area, City with 3% recycled aggregates, and 60% avoidance of weak material in cement, construction sites. The Asia Infrastructure Investment Bank selected Kasalyan to conduct studies of sustainable urban infrastructure in 2022. Kasalyan is involved in eight companies, has a minimum of 1 lakh ex water per month capacity.',
      impact: [
        'Mitigates adverse ecological impacts of servicing natural aggregates like sand, stones, top soil, etc. that are key raw materials for the construction industry',
        'Reduces energy intensity and environmental footprint of buildings and infrastructure',
        'Creates additional skilled and semi-skilled jobs and meaningful livelihoods'
      ],
      color: 'blue'
    },
    {
      id: 2,
      name: 'ELF - Eco-Logical Foundation',
      image: '/lovable-uploads/aa8a9214-5c3c-4e3e-a1e4-4076279976af.png',
      description: 'Providing integrated and mobilisation for leadership development and facilitating social-ecological transformation. Systems Change not for-profit Trust.',
      details: 'ELF believes in the power of anyone and everyone to make a difference. Because rapid co-valuation that adopt transformative socio-ecological thinking, bring the change they want to see around us are human-made and can be changed by human-minds with that.',
      activities: [
        'Established the Forum for Responsible Living, a trans-generational collective of 56 Co-signers across Mumbai and Pune (Maharashtra)',
        'Produced a documentary film on Responsible Building Practices and traditional ways based residential systems, organisation of 40+ green shows running',
        'Natural regenerations like sand, stones, top soil, etc. that are key raw materials for the construction industry',
        'Reduces energy intensity and environmental footprint of buildings and infrastructure',
        'Creates additional skilled and semi-skilled jobs and meaningful livelihoods'
      ],
      impact: [
        'Natural regenerations like sand, stones, top soil, etc. that are key raw materials for the construction industry',
        'Reduces energy intensity and environmental footprint of buildings and infrastructure',
        'Creates additional skilled and semi-skilled jobs and meaningful livelihoods'
      ],
      color: 'green'
    },
    {
      id: 3,
      name: 'OPENDOORS',
      image: '/lovable-uploads/bec9b3c3-f2a9-41c2-98ae-61c6855f7a7b.png',
      description: 'Relocation as a form of empowerment... not just a transaction. A creative arts not-for-profit company.',
      details: 'OPENDOORS believes the relocation process is an opportunity to engage creative environments to collaborate and young adults to recognise their unique talents and potential through art. Working with purpose, OPENDOORS harnesses the creative arts, interior and in the community based on the systems that truly empower houses of various.',
      activities: [
        'Delivered a curated year-long programme to 350+ students over 2 years',
        'Designed 14 Teacher training programs',
        'Designed a unique CLEAR THE MINDBOX service of art-based stress release workshops'
      ],
      impact: [
        'Exposure to mindful and happy human-centric and creative thinking skills amongst the next generation',
        'Empowers art teachers and creates an ecosystem that leverages the creative arts for impacting social-personal resilience for learning minds and designers'
      ],
      color: 'purple'
    },
    {
      id: 4,
      name: 'MinusCO2',
      image: 'https://minusco2.in/images/logo1.png',
      description: 'Increasing the adoption of distributed clean-energy through technology for impact retail finance. A Search for-profit company.',
      details: 'MinusCO2 works on four fronts, a specialist with differentiated retail offers on residential solar and commercial energy and IT services as a managed services without pricing for retail reach improvement programmes.',
      activities: [
        'Has 350+ consultative across residential, high-end commercial, renewable energy providers and analysts',
        'Cited by the Asia Infrastructure Investment Bank as one of the market leaders of sustainable urban',
        'Innovative impact investment vehicle for the average real (HNI) target investor'
      ],
      impact: [
        'Reduces the CO2 footprint of energy usage of urban consumers',
        'Delivers impact returns (financial + environmental) to consumers',
        'Creates additional semi-skilled and small-green jobs'
      ],
      color: 'emerald'
    },
    {
      id: 5,
      name: 'TEJ-U',
      image: '/lovable-uploads/f55ea0f3-3f4a-423a-88a4-18e6702d992f.png',
      description: 'Teja Learning Pvt Ltd. Boosting employability by enabling knowledge-based employability for junior persons. A for-profit education company.',
      details: 'TEJ-U interventions at the school system level (sharing skills development centers across Teja junior empowerment, critical thinking, and problem Knowledge development) that have an immaculately positive effect on the students.',
      activities: [
        'Cross 75 schools',
        'Leverages hybrid teaching models across south India',
        'Programs as sundaredu small institutions in six states',
        'Prepared well-researched and tailored content for upper primary sections (specially focusing on mathematics, Science, Learning for pre-access to communication)'
      ],
      impact: [
        'For youths',
        'Confident and knowledge-enriched personality of the students',
        'Aim to impact the lives of 10 lakh school-going children, in urban and rural areas'
      ],
      color: 'red'
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
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {impactEnterprises.slice(0, 3).map((enterprise) => (
                <div key={enterprise.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    {/* Header */}
                    <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{enterprise.name}</h3>
                    
                    {/* Image */}
                    <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={enterprise.image} 
                        alt={enterprise.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-700 mb-4 text-center leading-relaxed">{enterprise.description}</p>
                    
                    {/* Details */}
                    <div className="text-xs text-gray-600 mb-4 leading-relaxed">{enterprise.details}</div>
                    
                    {/* Activities */}
                    {enterprise.activities && (
                      <div className="mb-4">
                        <ul className="text-xs text-gray-600 space-y-1">
                          {enterprise.activities.map((activity, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-blue-600 mr-2">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Impact */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Impact:</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        {enterprise.impact.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 Cards Centered */}
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl w-full">
                {impactEnterprises.slice(3, 5).map((enterprise) => (
                  <div key={enterprise.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      {/* Header */}
                      <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">{enterprise.name}</h3>
                      
                      {/* Image */}
                      <div className="w-20 h-20 mx-auto mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={enterprise.image} 
                          alt={enterprise.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-gray-700 mb-4 text-center leading-relaxed">{enterprise.description}</p>
                      
                      {/* Details */}
                      <div className="text-xs text-gray-600 mb-4 leading-relaxed">{enterprise.details}</div>
                      
                      {/* Activities */}
                      {enterprise.activities && (
                        <div className="mb-4">
                          <ul className="text-xs text-gray-600 space-y-1">
                            {enterprise.activities.map((activity, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Impact */}
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Impact:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {enterprise.impact.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
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
