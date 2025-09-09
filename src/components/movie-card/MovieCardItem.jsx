import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.css";

/**
 * Компонент отдельной карточки фильма
 * @param {object} props - свойства компонента
 * @param {string} props.Title - название фильма
 * @param {string} props.Year - год выпуска
 * @param {string} props.Type - тип (movie/series)
 * @param {string} props.Poster - URL постера
 * @param {string} props.imdbID - ID фильма
 * @param {string} props.className - дополнительные CSS классы
 * @returns {JSX.Element} компонент карточки фильма
 */
export const MovieCardItem = ({ Title, Year, Type, Poster, imdbID, className = "" }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = (e) => {
    setImageError(true);
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSJyZ2JhKDIyMCwgMjAsIDYwLCAwLjEpIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiPk5vIFBvc3RlcjwvdGV4dD4KPC9zdmc+';
  };

  const handleMovieDetails = () => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className={`${styles.movieCard} ${className}`} key={imdbID} onClick={handleMovieDetails}>
      <div className={styles.movieCardPoster}>
        <img 
          src={Poster !== 'N/A' ? Poster : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDAwIiBmaWxsPSJyZ2JhKDIyMCwgMjAsIDYwLCAwLjEpIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiPk5vIFBvc3RlcjwvdGV4dD4KPC9zdmc+'} 
          alt={`Poster for ${Title}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
          style={{ 
            opacity: imageLoaded ? 1 : 0,
            objectFit: imageError ? 'contain' : 'cover'
          }}
        />
      </div>
      <div className={styles.movieCardContent}>
        <h3 className={styles.movieCardTitle}>{Title}</h3>
        <div className={styles.movieCardInfo}>
          <div className={styles.movieCardInfoItem}>
            <span className={styles.movieCardInfoLabel}>Year:</span>
            <span className={styles.movieCardYear}>{Year}</span>
          </div>
          <div className={styles.movieCardInfoItem}>
            <span className={styles.movieCardInfoLabel}>Type:</span>
            <span className={styles.movieCardType}>{Type}</span>
          </div>
        </div>
      </div>
    </div>
  );
};