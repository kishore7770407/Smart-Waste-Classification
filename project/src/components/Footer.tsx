import React from 'react';
import { Recycle, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Recycle className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">EcoClassify</span>
                <p className="text-xs text-gray-400">AI Waste Classification</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering sustainable waste management through AI-powered classification. 
              Together, we can build a cleaner future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#classify" className="text-gray-400 hover:text-white transition-colors">Classify</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Waste Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Waste Categories</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">Biodegradable</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-400">Recyclable</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-400">Trash</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2025 EcoClassify. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for the environment.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;