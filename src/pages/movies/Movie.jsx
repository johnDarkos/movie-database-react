import { MovieCardWrapper } from "@/components/movie-card/MovieCard"
import { MovieGrid } from "@/components/movie-grid/MovieGrid"



export const Movies = () => {

    return (
        <MovieGrid>
            <MovieCardWrapper className="movie__card"/>
        </MovieGrid>
    )
}