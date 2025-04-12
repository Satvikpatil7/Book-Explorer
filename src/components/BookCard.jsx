import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImg from '../assets/placeholder.jpg'; // make sure the path is correct

const BookCard = React.memo(({ book }) => {
  const { title, authors, description, imageLinks } = book.volumeInfo;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col justify-between">
      <img
        src={imageLinks?.thumbnail || placeholderImg}
        alt={title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = placeholderImg;
        }}
        className="w-full h-52 object-cover mb-4 rounded-lg"
      />
      
      <div>
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        {authors && (
          <p className="text-sm text-gray-600 line-clamp-1">
            {authors.join(', ')}
          </p>
        )}
        {description && (
          <p className="text-sm mt-2 text-gray-700 line-clamp-3">
            {description}
          </p>
        )}
      </div>

      <Link
        to={`/book/${book.id}`}
        className="mt-4 inline-block text-blue-600 hover:underline text-sm font-medium"
      >
        View Details →
      </Link>
    </div>
  );
});

export default BookCard;
