import React from 'react';
import { Leaf, Recycle, Trash2, CheckCircle, AlertCircle } from 'lucide-react';

export interface ClassificationResultType {
  category: 'biodegradable' | 'recyclable' | 'trash';
  confidence: number;
  suggestions: string[];
}

interface ClassificationResultProps {
  result: ClassificationResultType;
}

const ClassificationResult: React.FC<ClassificationResultProps> = ({ result }) => {
  const getIcon = () => {
    switch (result.category) {
      case 'biodegradable':
        return <Leaf className="h-8 w-8 text-green-600" />;
      case 'recyclable':
        return <Recycle className="h-8 w-8 text-blue-600" />;
      case 'trash':
        return <Trash2 className="h-8 w-8 text-red-600" />;
    }
  };

  const getColor = () => {
    switch (result.category) {
      case 'biodegradable':
        return 'green';
      case 'recyclable':
        return 'blue';
      case 'trash':
        return 'red';
    }
  };

  const getCategoryName = () => {
    switch (result.category) {
      case 'biodegradable':
        return 'Biodegradable';
      case 'recyclable':
        return 'Recyclable';
      case 'trash':
        return 'Trash';
    }
  };

  const getDescription = () => {
    switch (result.category) {
      case 'biodegradable':
        return 'This item can decompose naturally and should be composted.';
      case 'recyclable':
        return 'This item can be processed and reused. Please recycle properly.';
      case 'trash':
        return 'This item cannot be recycled and should go to general waste.';
    }
  };

  const color = getColor();

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <div className={`classification-card ${result.category}`}>
        <div className="flex items-center space-x-4 mb-4">
          <div className={`bg-${color}-100 p-3 rounded-full`}>
            {getIcon()}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {getCategoryName()}
            </h3>
            <p className="text-gray-600">{getDescription()}</p>
          </div>
        </div>

        {/* Confidence Score */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Confidence</span>
            <span className="text-sm font-bold text-gray-900">
              {Math.round(result.confidence * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`bg-${color}-500 h-2 rounded-full transition-all duration-500`}
              style={{ width: `${result.confidence * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Suggestions */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>Disposal Suggestions</span>
          </h4>
          <ul className="space-y-2">
            {result.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClassificationResult;