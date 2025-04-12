

# Book Explorer

## Project Overview

**Book Explorer** is a React-based web application that allows users to search for books using the Google Books API, view detailed book information, and manage a personal list of favorite books. This app demonstrates proficiency in modern JavaScript, React fundamentals, state management (Redux), routing, form handling, testing, and accessibility and performance best practices.

---

## Functional Requirements

### 1. Search Functionality
- **Feature:** Provide a multi-field search form where users can input queries by title, author, or genre/keyword.
- **Behavior:** 
  - On submission, fetch a list of books from the Google Books API based on the provided inputs.
  - Display search results in a responsive grid or list format.
- **Display:** Each book should show:
  - Title
  - Author(s)
  - Cover image (thumbnail)
  - Brief description (if available)

### 2. Book Details
- **Feature:** Allow users to click on a book to view more detailed information.
- **Implementation:** 
  - Use a dedicated details page accessible via a unique URL (e.g., `/book/:id`).
  - Optionally, implement a modal overlay as an alternative.
- **Optimization:** Use code-splitting (e.g., React.lazy and Suspense) to lazy load the details view for performance.

### 3. Favorites Management
- **Feature:** Enable users to add and remove books from a "favorites" list.
- **State Management:** Use Redux for state management.
- **Display:** Provide a dedicated page (e.g., `/favorites`) to view all favorite books.

### 4. Routing and Navigation
- **Feature:** Implement client-side routing using React Router.
- **Routes:**
  - `/`: Search page with the search form and results.
  - `/book/:id`: Book details page for a specific book.
  - `/favorites`: Page displaying the user's favorite books.
- **Navigation:** Include a navigation bar or menu with links to the Search and Favorites pages.

### 5. Form Handling
- **Feature:** Implement a search form with multiple fields (title, author, genre) and validation.
- **Behavior:** 
  - Ensure at least one field is filled before allowing submission.
  - Display user-friendly error messages for invalid submissions.

### 6. User Interface & Experience
- **Responsiveness:** Ensure the application is fully responsive and works on mobile, tablet, and desktop devices.
- **Accessibility:** Use semantic HTML and include proper ARIA attributes to meet accessibility standards.
- **Styling:** Use CSS (or a CSS-in-JS solution) with attention to maintainability and scalability.

---

## Technical Requirements

### 1. Modern React & JavaScript
- Use functional components and hooks (e.g., `useState`, `useEffect`, `useMemo`) for most of the implementation.
- Write clean, modular, and well-documented code using ES6+ features.

### 2. React Router
- Implement routing with at least three routes: `/`, `/book/:id`, and `/favorites`.
- Use dynamic routing for the book details page (e.g., `/book/:id`).
- Ensure proper navigation between pages using `Link` or `NavLink`.

### 3. Form Handling
- Use controlled components to manage form state.
- Implement form validation to ensure at least one search field is filled.
- Handle form submissions and integrate with the Google Books API.

### 4. Optional: TypeScript
- You may choose to use TypeScript to add type safety to your application. (This is optional but considered a plus.)

### 5. Build Tools & Bundlers
- Set up the project using a modern build toolchain (e.g., Create React App, Vite, or a custom Webpack/Babel configuration).
- Ensure that the project can be built and served locally with clear instructions.

### 6. Testing
- Write unit and integration tests using Jest and React Testing Library.
- Test critical components, including:
  - Search form (validation and submission)
  - Routing (navigation between pages)
  - Favorites functionality (adding/removing books)
- Aim for good test coverage to demonstrate a commitment to code quality.

### 7. Performance Optimization
- Implement performance optimizations where applicable:
  - Use memoization (e.g., `useMemo`, `React.memo`) to avoid unnecessary re-renders.
  - Apply code-splitting for lazy loading the book details page.

### 8. Version Control & Documentation
- Use Git for version control and commit your work in a logical, well-documented manner.
- Provide a README.md file that includes:
  - A brief overview of the project.
  - Instructions on how to set up, run, and test the application.
  - An explanation of your approach to routing, form handling, state management, and any trade-offs made.

---

## How to Use the Google Books API

### API Endpoint

**Base URL:**  
`https://www.googleapis.com/books/v1/volumes?q={searchQuery}`

This API allows you to search for books by title, author, or genre, and retrieves detailed information about each book.

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Satvikpatil7/Book-Explorer.git
   ```

2. Navigate to the project folder:
   ```bash
   cd book-explorer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to see the app.

---

## Folder Structure

```
C:.
│   App.css
│   App.jsx
│   App.test.jsx
│   index.css
│   main.jsx
│
├───assets
│   placeholder.jpg
│   react.svg
│
├───components
│   BookCard.jsx
│   Header.jsx
│   SearchForm.jsx
│   Shimmer.jsx
│   ShimmerDetails.jsx
│
├───pages
│   BookDetails.jsx
│   FavoritesPage.jsx
│   Notfound.jsx
│   SearchPage.jsx
│
├───redux
│   BookSlice.js
│   store.js
│       
└───routes
    AppRoutes.jsx
```

---

## Performance Considerations

- **Code-splitting:** Book details pages are loaded lazily using `React.lazy()` to improve the initial load performance.
- **Memoization:** Used `React.memo` and `useMemo` where applicable to avoid unnecessary re-renders of components.
- **Search Optimization:** The search query is built dynamically and optimized by reducing unnecessary whitespace.

---

## Future Improvements

- **Pagination:** Implement pagination for search results if the Google Books API returns too many results.
- **Error Handling:** Improve error handling to display user-friendly messages for API errors.
- **User Notes:** Allow users to add notes or tags when adding books to the favorites list.

---

