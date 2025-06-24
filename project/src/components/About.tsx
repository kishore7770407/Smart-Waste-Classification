import React from 'react';
import { Brain, Target, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI-Powered Classification',
      description: 'Advanced VGG16 neural network trained on thousands of waste images for accurate classification.',
      color: 'bg-purple-500'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'High Accuracy',
      description: 'Achieves over 90% accuracy in distinguishing between biodegradable, recyclable, and trash items.',
      color: 'bg-green-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'User-Friendly',
      description: 'Simple drag-and-drop interface makes waste classification accessible to everyone.',
      color: 'bg-blue-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Environmental Impact',
      description: 'Helps reduce contamination in recycling streams and promotes proper waste disposal.',
      color: 'bg-yellow-500'
    }
  ];

  const stats = [
    { number: '10K+', label: 'Images Classified' },
    { number: '92%', label: 'Accuracy Rate' },
    { number: '3', label: 'Waste Categories' },
    { number: '24/7', label: 'Available' }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About EcoClassify
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered waste classification system helps you make informed decisions about 
            waste disposal, contributing to a cleaner and more sustainable environment.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-8">
              <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center text-white mb-6`}>
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

        {/* Technical Details */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Technical Implementation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Data Collection</h4>
              <p className="text-gray-600 text-sm">
                Trained on municipal solid waste dataset with thousands of labeled images
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Model Training</h4>
              <p className="text-gray-600 text-sm">
                VGG16 transfer learning with custom classification layers for optimal performance
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Deployment</h4>
              <p className="text-gray-600 text-sm">
                Real-time classification with confidence scoring and disposal recommendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;