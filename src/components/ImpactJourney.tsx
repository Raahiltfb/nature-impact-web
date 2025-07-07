
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
      year: '2017',
      title: 'First Clean Energy Projects',
      description: 'Launched consulting services for C&I clean energy adoption',
      icon: Rocket,
      color: 'green'
    },
    {
      year: '2018',
      title: 'Elecrama Innovation',
      description: 'Recognized as innovative startup at Elecrama exhibition',
      icon: Award,
      color: 'purple'
    },
    {
      year: '2019',
      title: 'Solar Finance Training',
      description: 'Conducted project finance training for 75+ turnkey EPCs across India',
      icon: Users,
      color: 'orange'
    },
    {
      year: '2020',
      title: 'Ecosystem Development',
      description: 'Expanded focus to payments for ecosystem services',
      icon: Globe,
      color: 'emerald'
    },
    {
      year: '2021',
      title: 'Impact Advisory',
      description: 'Launched comprehensive impact advisory portfolio',
      icon: Target,
      color: 'red'
    },
    {
      year: '2023',
      title: 'Global Collaboration',
      description: 'Part of FES delegation to Germany for Just Energy Transition',
      icon: MapPin,
      color: 'indigo'
    },
    {
      year: '2024',
      title: 'Educational Outreach',
      description: 'Provided solar energy overview to Yashada participants',
      icon: Calendar,
      color: 'pink'
    }
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
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-blue-400"></div>

              {/* Timeline Events */}
              <div className="space-y-12">
                {timelineEvents.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center ${getColorClasses(event.color)}`}>
                            <event.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <span className="text-2xl font-bold text-gray-900">{event.year}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    </div>

                    <div className="w-1/2"></div>
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
