import React from 'react';

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className="animate-pulse p-4 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
