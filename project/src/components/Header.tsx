import React from 'react';
import { Recycle, Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Recycle className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">EcoClassify</span>
              <p className="text-xs text-gray-500">AI Waste Classification</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </a>
            <a href="#classify" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Classify
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <button className="btn-primary flex items-center space-x-2">
              <Leaf className="h-4 w-4" />
              <span>Go Green</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;