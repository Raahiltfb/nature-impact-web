import React from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: 'Impact Investment Guide',
      type: 'PDF',
      url: '#',
      icon: FileText,
    },
    {
      title: 'Ecosystem Services Framework',
      type: 'Document',
      url: '#',
      icon: Download,
    },
    {
      title: 'Clean Energy Report',
      type: 'PDF',
      url: '#',
      icon: FileText,
    },
    {
      title: 'Impact Measurement Tools',
      type: 'External',
      url: '#',
      icon: ExternalLink,
    },
  ];

  return (
    <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our collection of reports, guides, and tools to support your impact journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 hover:border-blue-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <span className="text-sm text-gray-500">{resource.type}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Resources;
