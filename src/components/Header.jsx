// components/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4">
      <nav className="flex justify-between items-center max-w-5xl mx-auto">
        <h1 className="text-xl font-bold text-blue-600"> Book Explorer</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'
              }
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? 'text-blue-600 underline' : 'hover:text-blue-500'
              }
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
