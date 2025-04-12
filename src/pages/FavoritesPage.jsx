import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../redux/BookSlice';
import BookCard from '../components/BookCard'; // Assuming you already have a BookCard component

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.books.favorites);

  // Handle removing a book from favorites
  const handleRemoveFavorite = (book) => {
    dispatch(removeFavorite(book));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Favorite Books</h2>

      {/* Check if there are any favorites */}
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">You have no favorite books yet. Start adding some!</p>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Map through the favorites list and display each book */}
          {favorites.map((book) => (
            <div key={book.id} className="relative">
              <BookCard book={book} />

              {/* Remove button always visible */}
              <button
                onClick={() => handleRemoveFavorite(book)}
                className="absolute top-2 right-2 bg-red-500 text-white text-sm px-3 py-2 rounded-md"
              >
                Remove
              </button>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default FavoritesPage;
