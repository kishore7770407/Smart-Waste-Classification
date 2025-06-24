import React from 'react';
import { Camera, Recycle, Leaf, Trash2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-4 rounded-full">
              <Recycle className="h-12 w-12 text-primary-600 animate-pulse-slow" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Waste
            <span className="text-primary-600 block">Classification</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload an image and let our AI-powered system classify your waste into 
            <span className="font-semibold text-green-600"> Biodegradable</span>, 
            <span className="font-semibold text-blue-600"> Recyclable</span>, or 
            <span className="font-semibold text-red-600"> Trash</span> categories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              className="btn-primary flex items-center space-x-2 group"
              onClick={() => document.getElementById('classify')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Camera className="h-5 w-5" />
              <span>Start Classifying</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Leaf className="h-5 w-5" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Biodegradable</h3>
              <p className="text-gray-600 text-sm">Organic waste that decomposes naturally</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <Recycle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Recyclable</h3>
              <p className="text-gray-600 text-sm">Materials that can be processed and reused</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="bg-red-100 p-3 rounded-full mb-4">
                <Trash2 className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trash</h3>
              <p className="text-gray-600 text-sm">Non-recyclable waste for disposal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;