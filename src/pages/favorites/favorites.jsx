import styles from './favorites.module.css';
import { MovieFavorites } from '@/components/movie/movie-favorites/MovieFavorites';

export const Favorites = () => {
    return (
        <div className={styles.favorites}>
            <MovieFavorites />
        </div>
    )
}
