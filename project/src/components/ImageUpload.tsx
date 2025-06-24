import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Camera, Loader2 } from 'lucide-react';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  isLoading: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload, isLoading }) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      onImageUpload(file);
    }
  }, [onImageUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.bmp', '.webp']
    },
    multiple: false,
    disabled: isLoading
  });

  const clearImage = () => {
    setUploadedImage(null);
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {!uploadedImage ? (
        <div
          {...getRootProps()}
          className={`
            border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-all duration-300
            ${isDragActive 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-gray-300 hover:border-primary-400 hover:bg-gray-50'
            }
            ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-4">
            {isLoading ? (
              <Loader2 className="h-16 w-16 text-primary-500 animate-spin" />
            ) : (
              <div className="bg-primary-100 p-4 rounded-full">
                <Upload className="h-12 w-12 text-primary-600" />
              </div>
            )}
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {isLoading ? 'Processing...' : 'Upload Waste Image'}
              </h3>
              <p className="text-gray-600 mb-4">
                {isDragActive
                  ? 'Drop the image here...'
                  : isLoading
                  ? 'Please wait while we classify your image'
                  : 'Drag & drop an image here, or click to select'
                }
              </p>
              <p className="text-sm text-gray-500">
                Supports: JPG, PNG, GIF, BMP, WebP
              </p>
            </div>
            
            {!isLoading && (
              <button className="btn-primary flex items-center space-x-2">
                <Camera className="h-5 w-5" />
                <span>Choose Image</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="relative">
              <img
                src={uploadedImage}
                alt="Uploaded waste"
                className="w-full h-64 object-cover rounded-lg"
              />
              <button
                onClick={clearImage}
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors"
                disabled={isLoading}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            {isLoading && (
              <div className="mt-4 flex items-center justify-center space-x-2">
                <Loader2 className="h-5 w-5 text-primary-500 animate-spin" />
                <span className="text-gray-600">Classifying image...</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;