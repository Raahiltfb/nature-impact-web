
import React from 'react';
import { Sun, Battery, Zap, Award, Users, Building, BookOpen, Trophy } from 'lucide-react';

const CleanEnergy = () => {
  const achievements = [
    {
      icon: Users,
      title: 'Solar Project Finance Training',
      description: 'Conducted trainings across India for 75+ turnkey EPCs, addressing financing challenges for upfront capital costs.'
    },
    {
      icon: Building,
      title: 'Rooftop Solar Projects',
      description: 'Completed several rooftop solar projects (capex and opex-basis) with developers working in the C&I sector.'
    },
    {
      icon: BookOpen,
      title: 'Just Energy Transition',
      description: 'Participated in multiple forums on clean-energy Just Energy Transition (JET) in collaboration with FES; part of FES delegation to Germany in 2023.'
    },
    {
      icon: Sun,
      title: 'Public School Conversion',
      description: 'Consulting to IAHV for converting public schools to clean energy: solar and solar + storage based across Thane and Pimpri-Chinchwad municipalities in Maharashtra.'
    },
    {
      icon: Zap,
      title: 'Solar Energy Overview',
      description: 'Provided comprehensive overview on solar energy potential and evolution to Yashada participants (March 2024).'
    },
    {
      icon: Trophy,
      title: 'Innovation Recognition',
      description: 'Invited to exhibition at Elecrama (2018) as an innovative start-up in clean energy sector.'
    }
  ];

  return (
    <section id="clean-energy" className="min-h-screen snap-start py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-12">
          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Clean Energy
          </h2>

          {/* Quote */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-700 leading-relaxed mb-6">
              "Here is an almost incalculable power at our disposal, yet how trifling the use we make of it! What a poor compliment do we pay to our indefatigable and energetic servant!"
            </blockquote>
            <cite className="text-blue-600 text-xl font-medium">
              - Henry Thoreau
            </cite>
          </div>

          {/* Context */}
          <div className="max-w-5xl mx-auto">
            <p className="text-xl leading-relaxed text-gray-700 mb-8">
              Successful mainstreaming of clean energy and clean-tech requires service providers to offer consumer-oriented, best-in-class, and commercially beneficial solutions.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              In 2016-17, Second Nature started providing consulting services to C&I consumers for adopting clean energy to reduce their expenses while simultaneously reducing their carbon footprint. This depth of experience, especially for the distributed and decentralized clean-tech solutions, has led to a number of activities over the years:
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <achievement.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{achievement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>

          {/* Clean Energy Impact Stats */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl shadow-xl p-8 lg:p-12 text-white">
              <h3 className="text-3xl font-bold mb-8 text-center">Clean Energy Impact</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sun className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-2">75+</div>
                  <div className="text-sm opacity-90">EPCs Trained</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Battery className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-90">Solar Projects</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold mb-2">8+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanEnergy;
