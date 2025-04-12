import React, { useState, useCallback } from 'react';

const SearchForm = React.memo(({ onSearch }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');

  // Memoized handleSubmit function
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!title && !author && !genre) {
        setError('Please fill at least one search field.');
        return;
      }

      setError('');

      let query = '';
      if (title) query += `intitle:${title}+`;
      if (author) query += `inauthor:${author}+`;
      if (genre) query += `${genre}`;

      onSearch(query.trim().replace(/\s+/g, '+'));
    },
    [author, genre, onSearch, title] // Depend on title, author, genre, and onSearch
  );

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
      <div>
        <label className="block mb-1 text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="e.g., Harry Potter"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="e.g., J.K. Rowling"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Genre / Keyword</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2"
          placeholder="e.g., fantasy"
        />
      </div>

      {error && <p className="text-red-500 text-sm col-span-full">{error}</p>}

      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded col-span-full md:col-span-1"
      >
        Search
      </button>
    </form>
  );
});

export default SearchForm;
