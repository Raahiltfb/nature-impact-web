
import React from 'react';

const HeroSection = () => {
  return (
    <section className="min-h-screen snap-start bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="text-center space-y-12">
          {/* Quote Section */}
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed mb-6">
              "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs."
            </blockquote>
            <cite className="text-blue-200 text-lg font-medium">
              - Brundtland Commission
            </cite>
          </div>

          {/* Objective Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-100">
              OUR OBJECTIVE
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-blue-50">
              There is an imperative to address, with speed and at scale, the three pronged challenges of climate change, socio-economic inequity, and natural ecosystem degradation.
            </p>
          </div>

          {/* What We Do Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-100">
              WHAT WE DO
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-blue-50">
              Second Nature is a sector-agnostic impact and climate finance advisory and consulting solutions company. It recognizes that the need of the hour is to leverage capital, both philanthropic and for-profit, towards the $7 trillion required annually to achieve the Sustainable Development Goals.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
