import styles from "./MovieCard.module.css";

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
        <div key={index} className={`${styles.movieCard} ${styles.movieCardSkeleton} ${className}`}>
          <div className={styles.movieCardPoster}>
            {/* Скелетон постера */}
          </div>
          <div className={styles.movieCardContent}>
            <h3 className={styles.movieCardTitle}>
              {/* Скелетон заголовка */}
            </h3>
            <div className={styles.movieCardInfo}>
              <div className={styles.movieCardInfoItem}>
                {/* Скелетон информации */}
              </div>
              <div className={styles.movieCardInfoItem}>
                {/* Скелетон информации */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};