import React from 'react';

const Rating = () => {
  const ratings = [
    { value: 5, count: 100 },
    { value: 4, count: 30 },
    { value: 3, count: 10 },
    { value: 2, count: 5 },
    { value: 1, count: 3 }
  ];

  // Calculate total count of ratings
  const totalCount = ratings.reduce((total, rating) => total + rating.count, 0);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex flex-col items-start">
        <div className="flex items-center">
          <span className="text-4xl font-semibold text-green-500 mr-2">4.5</span>
          <span className="text-4xl text-green-500">&#9733;</span>
        </div>
        <div className="text-gray-600">{totalCount} Ratings & 103 Reviews</div>
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center mt-2">
            <span className="mr-2">{rating.value}</span>
            <div className="w-32 h-2 bg-gray-200 rounded">
              <div className="h-full bg-green-500 rounded" style={{ width: `${(rating.count / totalCount) * 100}%` }}></div>
            </div>
            <span className="ml-2">{Math.round((rating.count / totalCount) * 100)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Rating
