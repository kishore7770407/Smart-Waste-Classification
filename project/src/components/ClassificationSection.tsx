import React, { useState } from 'react';
import ImageUpload from './ImageUpload';
import ClassificationResult, { ClassificationResultType } from './ClassificationResult';

const ClassificationSection: React.FC = () => {
  const [result, setResult] = useState<ClassificationResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock classification function - replace with actual API call
  const classifyImage = async (file: File): Promise<ClassificationResultType> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock results - replace with actual model prediction
    const categories: ClassificationResultType['category'][] = ['biodegradable', 'recyclable', 'trash'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    const suggestions = {
      biodegradable: [
        'Place in compost bin or organic waste collection',
        'Can be used for home composting if you have a garden',
        'Avoid mixing with non-organic materials'
      ],
      recyclable: [
        'Clean the item before placing in recycling bin',
        'Check local recycling guidelines for specific materials',
        'Remove any non-recyclable components first'
      ],
      trash: [
        'Place in general waste bin',
        'Consider if any parts can be separated for recycling',
        'Look for alternative disposal methods if hazardous'
      ]
    };

    return {
      category: randomCategory,
      confidence: 0.75 + Math.random() * 0.24, // Random confidence between 75-99%
      suggestions: suggestions[randomCategory]
    };
  };

  const handleImageUpload = async (file: File) => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const classificationResult = await classifyImage(file);
      setResult(classificationResult);
    } catch (error) {
      console.error('Classification failed:', error);
      // Handle error appropriately
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewClassification = () => {
    setResult(null);
  };

  return (
    <section id="classify" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Classify Your Waste
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload an image of your waste item and get instant AI-powered classification
            with disposal recommendations.
          </p>
        </div>

        <div className="space-y-8">
          {!result ? (
            <ImageUpload onImageUpload={handleImageUpload} isLoading={isLoading} />
          ) : (
            <>
              <ClassificationResult result={result} />
              <div className="text-center">
                <button
                  onClick={handleNewClassification}
                  className="btn-primary"
                >
                  Classify Another Item
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClassificationSection;