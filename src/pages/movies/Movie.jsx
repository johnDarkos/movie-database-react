import { MovieCardWrapper } from "@/components/movie/movie-card"
import { MovieGrid } from "@/components/movie/movie-grid/MovieGrid"
import styles from "./movies.module.css"



export const Movies = () => {

    return (
        <MovieGrid>
            <MovieCardWrapper className={styles.movieCard}/>
        </MovieGrid>
    )
}