import React from 'react';

const ShimmerDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-6 inline-block text-blue-600 text-sm font-medium">
        <div className="bg-gray-300 h-6 w-20 rounded-md"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-48 h-64 bg-gray-300 rounded-lg"></div>

        <div className="flex-1 space-y-4">
          <div className="bg-gray-300 h-8 w-3/4 rounded-md"></div>
          <div className="bg-gray-300 h-6 w-1/2 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-2/3 rounded-md"></div>
          <div className="bg-gray-300 h-4 w-1/3 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerDetails;
