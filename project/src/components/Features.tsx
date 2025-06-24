import React from 'react';
import { Smartphone, Zap, Shield, Users, Palette, Code } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Responsive Design',
      description: 'Beautiful interfaces that work perfectly on all devices, from mobile to desktop.',
      color: 'bg-blue-500'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern build tools and best practices.',
      color: 'bg-yellow-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Built with security in mind, ensuring your data and users are protected.',
      color: 'bg-green-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'User-Centered',
      description: 'Designed with user experience as the top priority for maximum engagement.',
      color: 'bg-purple-500'
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Customizable',
      description: 'Flexible theming system that adapts to your brand and design requirements.',
      color: 'bg-pink-500'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Developer Friendly',
      description: 'Clean, maintainable code with comprehensive documentation and examples.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern, scalable applications with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 group hover:border-primary-200 border border-transparent transition-all duration-300"
            >
              <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;