import styles from './MovieFavorites.module.css';
import { useStorageMovies } from '@/store/useStorageMovies';
import { MovieCardItem } from '../movie-card/MovieCardItem';



export const MovieFavorites = () => {
    const { favorites } = useStorageMovies();


    return (
        <div className={styles.movieFavorites}>
            {favorites.length > 0 && (
                favorites.map(({Title, Year, Type, Poster, imdbID}) => (
                    <MovieCardItem key={imdbID} Title={Title} Year={Year} Type={Type} Poster={Poster} imdbID={imdbID} />
                ))
            )}
        </div>
    )
}

