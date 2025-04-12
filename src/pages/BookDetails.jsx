import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import placeholderImg from '../assets/placeholder.jpg'; 
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/BookSlice';
import ShimmerDetails from '../components/ShimmerDetails'; // ✅ Imported shimmer component

const BookDetails = React.memo(() => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const hasFetched = useRef(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For confirmation modal

  const fetchBookDetails = useCallback(async () => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
      if (!response.ok) throw new Error('Failed to fetch book details');
      const data = await response.json();
      setBook(data);
    } catch (err) {
      setError('Error loading book details');
      console.error(err);
    }
  }, [id]);

  useEffect(() => {
    fetchBookDetails();
  }, [fetchBookDetails]);

  const handleBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const favorites = useSelector((state) => state.books.favorites);
  const isFavorite = favorites.some((favorite) => favorite.id === book?.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(book));
    } else {
      dispatch(addFavorite(book));
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (error) return <p className="text-center mt-6 text-red-500">{error}</p>;
  if (!book) return <ShimmerDetails />; // ✅ Replaced "Loading..." with shimmer

  const { title, authors, description, imageLinks, publisher, publishedDate } = book.volumeInfo;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={handleBack}
        className="mb-6 inline-block text-blue-600 hover:underline text-sm font-medium"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={imageLinks?.thumbnail || placeholderImg}
          alt={title}
          className="w-48 h-64 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          {authors && <p className="text-gray-700 mb-2">By {authors.join(', ')}</p>}
          {publisher && (
            <p className="text-sm text-gray-500 mb-2">
              Published by {publisher} on {publishedDate}
            </p>
          )}
          {description && <div className="mt-4 text-gray-800">{description}</div>}

          <button
            onClick={handleToggleFavorite}
            className={`mt-4 text-white px-4 py-2 rounded-md ${
              isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      </div>

      {/* ✅ Modal for confirming add/remove action */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">
              {isFavorite ? 'Removed from Favorites' : 'Added to Favorites'}
            </h2>
            <p className="mb-4">
              The book has been successfully {isFavorite ? 'removed from' : 'added to'} your favorites.
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default BookDetails;
