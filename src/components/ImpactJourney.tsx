
import React from 'react';
import { Calendar, MapPin, Users, Award, Lightbulb, Target, Rocket, Globe } from 'lucide-react';

const ImpactJourney = () => {
  const timelineEvents = [
    {
      year: '2018',
      title: 'Problem Identification',
      description: 'As part of the first Cohort of a unique, values-based transformational leadership residential program, interacted with and developed trust-based relationships with several highly skilled and passionate changemakers. Most of them, expressed financing/funding as the fundamental challenge to scaling up their impact.',
      icon: Lightbulb,
      color: 'blue'
    },
    {
      year: '2018-2020',
      title: 'Learning Phase',
      description: 'Via primary and desk research quickly arrived at the potential of the Impact Investment paradigm – and established relationships and functional interactions with ecosystem players, thought leaders, and investors, that are engaged in the Impact Economy.',
      icon: Rocket,
      color: 'green'
    },
    {
      year: '2020',
      title: 'Kick Off',
      description: 'In collaboration with Friedrich-Ebert-Stiftung, India, and encouragement from members of The Forum for Responsible Building, developed and launched an <a href="https://india.fes.de/e/call-to-apply-impact-investment-primer">Impact Investment Primer (IIP)</a> for change-makers who work on, or aspire to create, transformational impacts but are unable to leverage the prevalent Impact Investment Ecosystem.',
      icon: Award,
      color: 'purple'
    },
    {
      year: '2020-2023',
      title: 'Impact for Enterprises',
      description: '70+ enterprises across diverse social and ecological spaces such as clean energy, education, circular economy, creative arts, waste management, and restoration and regeneration of natural ecosystems, have attended the IIP – insights in this <a href="https://india.fes.de/e/impact-entrepreneurs-onto-a-green-journey">report</a>. Of them, 15 enterprises have engaged in long-term advisory.',
      icon: Users,
      color: 'orange'
    },
    {
      year: '2021-2023',
      title: 'Impact for Students',
      description: 'Created and conducted awareness sessions for students of engineering, management, social sciences, and architecture disciplines, on the opportunities to ‘DO WELL (for themselves)’ and simultaneously ‘DO GOOD (for the planet and others)’ with careers built in the framework of the Impact Economy.',
      icon: Globe,
      color: 'emerald'
    },
    {
      year: '2022-2023',
      title: 'Roadmap to an Impact Economy',
      description: 'Insights and feedback made it clear that there is a need to transform the culture and to orient the Impact Investment Ecosystem to how socio- ecological change-makers aim to achieve sustainable results, as articulated in our call to establish a <a href="https://india.fes.de/e/an-impact-investment-ecosystem-for-transformative-systems-change.html">‘coalition of the willing’</a> that co-creates an <a href="https://india.fes.de/fileadmin/user_upload/IIE.pdf".Impact Investment Ecosystem for Transformative Systems Change.</a>',
      icon: Target,
      color: 'red'
    },
    {
      year: '2023',
      title: 'Impact for Nature Based Systems',
      description: 'The restoration and sustainable regeneration of natural ecosystems requires models that simultaneously incentivize local stewardship and are rooted in the impact investment paradigm. We have co-authored a position paper on <a href="https://library.fes.de/pdf-files/bueros/indien/21166.pdf">Payments for Ecosystem Services</a> and conducted a multi-stakeholder convening on this framework.',
      icon: MapPin,
      color: 'indigo'
    },
   
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      emerald: 'bg-emerald-100 text-emerald-600 border-emerald-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      pink: 'bg-pink-100 text-pink-600 border-pink-200'
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="impact-journey" className="min-h-screen snap-start py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Our Impact Journey
          </h2>

          {/* Quote */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed mb-6">
              "Never doubt that a small group of committed people can change the world. Indeed, it's the only thing that ever has."
            </blockquote>
            <cite className="text-blue-600 text-xl font-medium">
              - Margaret Mead
            </cite>
          </div>

          {/* Context */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-700">
              There exists a yawning gap in connecting socio-ecological enterprises with the impact investment world, by language, by purpose, by objective, by approach.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="relative">
              {/* Timeline Line - Hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-blue-400"></div>

              {/* Timeline Events */}
              <div className="space-y-8 md:space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Mobile & Desktop Card */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
                        <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                          <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center ${getColorClasses(event.color)}`}>
                            <event.icon className="w-7 h-7" />
                          </div>
                          <div>
                            <span className="text-2xl md:text-3xl font-bold text-gray-900">{event.year}</span>
                          </div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed"
                           dangerouslySetInnerHTML={{ __html: event.description }}
                          ></p>
                      </div>
                    </div>

                    {/* Timeline Dot - Hidden on mobile */}
                    <div className="hidden md:block relative z-10">
                      <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="hidden md:block md:w-1/2"></div>
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

export default ImpactJourney;
