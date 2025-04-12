import React, { useState, useCallback, useRef, lazy, Suspense } from 'react';
import SearchForm from '../components/SearchForm';
import Shimmer from '../components/Shimmer'; // Import the Shimmer component

// Lazy load the BookCard component
const BookCard = lazy(() => import('../components/BookCard'));

const SearchPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const hasSearchedRef = useRef(false);

  // Memoized handleSearch function to prevent unnecessary re-renders
  const handleSearch = useCallback(async (query) => {
    if (!query) return;
    hasSearchedRef.current = true;
    setLoading(true);
    setError(null); // Reset error before each search

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
      setError('Something went wrong. Please try again.');
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);
  
  return (
    <main className="px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center"> Search Books</h2>

      {/* Search Form always visible */}
      <SearchForm onSearch={handleSearch} />

      {/* Show loading shimmer if books are loading */}
      {loading ? (
        <div className="mt-6">
          <Shimmer /> {/* Show shimmer while loading */}
        </div>
      ) : error ? (
        <p className="text-center mt-6 text-red-500">{error}</p>
      ) : (
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.length > 0 ? (
            <Suspense >
              {books.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </Suspense>
          ) : hasSearchedRef.current ? (
            <p className="col-span-full text-center text-gray-500">
              No books found. Try searching by title, author, or genre.
            </p>
          ) : null}
        </section>
      )}
    </main>
  );
};

export default SearchPage;
