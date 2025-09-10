import { Layout } from './components/layaot/layout';
import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Movies } from './pages/movies/Movie';
import { MovieDetails } from './pages/movieDetails/movieDetails';
import { Favorites } from './pages/favorites/favorites';
import styles from './components/layaot/layout.module.css';

function App() {
  return (
    <>
      <Layout>
         <Header home = "Home" movie="Movie" favorites="Favorites" />
         <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
         </main>
      </Layout>
    </>
  );
}

export default App;
