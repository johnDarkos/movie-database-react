import styles from "../checkbox/CheckBox.module.css";
import { useStorageMovies } from "@/store/useStorageMovies";

export const Checkbox = () => {
    const { setFilterMovies, filterMovies } = useStorageMovies();

    const handleFilterChange = (type) => {
        setFilterMovies(type);
    };

    return (
        <div className={styles.checkbox}>
            <div className={filterMovies === "all" ? styles.active : ""}>
                <input
                    type="radio"
                    id="all"
                    name="contentType"
                    className={styles.checkboxInput}
                    checked={filterMovies === "all"}
                    onChange={() => handleFilterChange("all")}
                />
                <label htmlFor="all">All</label>
            </div>

            <div className={filterMovies === "movie" ? styles.active : ""}>
                <input
                    type="radio"
                    id="movie"
                    name="contentType"
                    className={styles.checkboxInput}
                    checked={filterMovies === "movie"}
                    onChange={() => handleFilterChange("movie")}
                />
                <label htmlFor="movie">Movie</label>
            </div>

            <div className={filterMovies === "series" ? styles.active : ""}>
                <input
                    type="radio"
                    id="series"
                    name="contentType"
                    className={styles.checkboxInput}
                    checked={filterMovies === "series"}
                    onChange={() => handleFilterChange("series")}
                />
                <label htmlFor="series">Series</label>
            </div>
        </div>
    );
};

