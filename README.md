# Movie Database React

A modern web application for searching and viewing movies, built with React using the OMDB API.

## 🚀 Features

- **Movie Search**: Fast search by movie title
- **Detailed Information**: View detailed movie information
- **Favorites**: Add movies to favorites list (saved in localStorage)
- **Responsive Design**: Optimized for various devices
- **Fast Loading**: Skeleton loading during data fetch
- **Modern Stack**: React 19, Vite, TanStack Query

## 🛠 Technologies

### Frontend
- **React 19** - Main library for building user interfaces
- **React Router DOM** - Application routing
- **Vite** - Fast build tool
- **Zustand** - Global state management with persistence

### UI/UX
- **CSS Modules** - Modular styles
- **SVG Icons** - Vector icons for buttons
- **Skeleton Loading** - Skeletons for better UX during loading

### API
- **OMDB API** - External API for movie data
- **Axios** - HTTP client for API requests

### Code Quality
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks for automatic formatting
- **Lint-staged** - Run linter only on changed files

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── auth/           # Authentication components
│   ├── button/         # Various button types
│   ├── checkbox/       # Checkbox components
│   ├── header/         # Application header
│   ├── layout/         # Application layout
│   ├── movie/          # Movie-related components
│   └── search-input/   # Search input field
├── constants/          # Application constants
├── pages/             # Application pages
│   ├── favorites/     # Favorites page
│   ├── home/          # Home page
│   ├── movieDetails/  # Movie details page
│   └── movies/        # Movies list page
├── services/          # API services
│   └── api/           # API configuration
├── store/             # Global state (Zustand)
├── styles/            # Global styles
└── utils/             # Helper functions
```

## 🚀 Installation and Setup

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Account on [OMDB API](http://www.omdbapi.com/) to get API key

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/movie-database-react.git
   cd movie-database-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the project root:
   ```env
   VITE_OMDB_API_URL=http://www.omdbapi.com/
   VITE_OMDB_API_KEY=your_omdb_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:5173](http://localhost:5173)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the built application
- `npm run lint` - Run ESLint for code checking

## 🔧 API Documentation

The application uses [OMDB API](http://www.omdbapi.com/) to fetch movie data.

### Main endpoints:
- `?s={movie_title}` - Search movies by title
- `?i={imdb_id}` - Get detailed movie information

## 🎨 Components

### Main components:

- **Header** - Navigation bar with menu
- **SearchInput** - Search field with debounce
- **MovieCard** - Movie card with poster and basic info
- **MovieDetails** - Detailed movie page
- **MovieGrid** - Grid for displaying movies
- **MovieLike** - Button to add to favorites

## 📱 Functionality

### Movie Search
- Enter movie title in search field
- Automatic search with debounce
- Display results as a grid of cards

### View Details
- Click on movie card to view details
- Display complete movie information
- Option to add to favorites

### Favorites
- Add/remove movies from favorites
- Saved in localStorage
- Separate page to view favorite movies

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Create a Pull Request

## 🙏 Acknowledgments

- [OMDB API](http://www.omdbapi.com/) for providing movie data
- React community for excellent documentation and tools

**Note**: To get an OMDB API key, register on their website and add the key to environment variables.
