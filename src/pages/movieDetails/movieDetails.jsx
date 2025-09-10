import { useState, useEffect } from "react";
import { getMovieById } from "@/services/api/getMovieById"
import { useParams } from "react-router-dom"
import { useOmdbMoviesApi } from "@/services/api/OMDB/useOmdbApi" 
import styles from "./movieDetails.module.css";


export const MovieDetails = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    
    useEffect(() => {
        const fetchMovie = async () => {
            const movie = await getMovieById(useOmdbMoviesApi, id);
            setMovie(movie);
        }
        fetchMovie();
    }, [id]);

    return (
        <div className={styles.movieDetails}>
            <div className={styles.movieDetailsPoster}>
                <img src={movie?.Poster || 'no poster'} alt={movie?.Title} />
            </div>
                <h3 className={styles.movieDetailsTitle}>{movie?.Title}</h3>
                <p className={styles.movieDetailsYear}>{movie?.Year}</p>
                <p className={styles.movieDetailsType}>{movie?.Type}</p>
                <p className={styles.movieDetailsPlot}>{movie?.Plot}</p>
                <p className="movie-"></p>
        </div>
    )
}