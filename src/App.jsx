import { Layout } from './components/layaot/layout';
import { Header } from './components/header/header';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Movies } from './pages/movies/Movie';

function App() {
  return (
    <>
      <Layout>
         <Header home = "Home" movie="Movie" serial="Serial" favorites="Favorites" />
         <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
         </main>
      </Layout>
    </>
  );
}

export default App;
