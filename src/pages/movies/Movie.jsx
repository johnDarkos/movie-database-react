import { MovieCardWrapper } from "@/components/movie-card/MovieCard"
import { MovieGrid } from "@/components/movie-grid/MovieGrid"
import styles from "./movies.module.css"



export const Movies = () => {

    return (
        <MovieGrid>
            <MovieCardWrapper className={styles.movieCard}/>
        </MovieGrid>
    )
}