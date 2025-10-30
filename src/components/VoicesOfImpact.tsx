import React from 'react';

const VoicesOfImpact = () => {
  return (
    <section id="voices-impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Voices of the Impact Economy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Hear from leaders, innovators, and changemakers who are shaping the future of impact investing and sustainable development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl mb-8">
            <iframe
              src="https://drive.google.com/file/d/12UNnb6mzoN2L3w3z-LF6octsT8fug5XZ/preview"
              className="absolute top-0 left-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
          </div>

          <div className="text-center">
          <a
            href="https://voicesofimpact.secondnaturess.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 hover:text-white rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
              See More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoicesOfImpact;
