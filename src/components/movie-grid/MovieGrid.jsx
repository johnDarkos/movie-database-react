

import styles from "./MovieGrid.module.css";

/**
 * Компонент MovieGrid для отображения сетки карточек фильмов
 * @param {object} props - свойства компонента
 * @param {React.ReactNode} props.children - дочерние элементы
 * @returns {JSX.Element} компонент MovieGrid
 */
export const MovieGrid = ({ children }) => {
    return (
        <div className={styles.movieGrid}>
            {children}
        </div>
    );
};