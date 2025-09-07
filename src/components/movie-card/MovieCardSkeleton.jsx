import "./MovieCard.css";

/**
 * Компонент скелетона для MovieCard
 * @param {object} props - свойства компонента
 * @param {number} props.count - количество скелетонов для отображения
 * @param {string} props.className - дополнительные CSS классы
 * @returns {JSX.Element} компонент скелетона
 */
export const MovieCardSkeleton = ({ count = 6, className = "" }) => {
  return (
    <>
      {Array.from({ length: count }, (_, index) => (
        <div key={index} className={`movie-card movie-card--skeleton ${className}`}>
          <div className="movie-card__poster">
            {/* Скелетон постера */}
          </div>
          <div className="movie-card__content">
            <h3 className="movie-card__title">
              {/* Скелетон заголовка */}
            </h3>
            <div className="movie-card__info">
              <div className="movie-card__info-item">
                {/* Скелетон информации */}
              </div>
              <div className="movie-card__info-item">
                {/* Скелетон информации */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};