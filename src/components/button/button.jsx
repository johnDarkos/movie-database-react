import styles from "./button.module.css";

/**
 * Компонент Button для поиска фильмов
 * @param {object} props - свойства компонента
 * @param {string} props.text - текст кнопки
 * @param {function} props.onClick - функция обработчик клика
 * @param {boolean} props.disabled - состояние кнопки (активна/неактивна)
 * @returns {JSX.Element} компонент Button
 */
export const Button = ({ text = "Search", onClick, disabled = false }) => {
  return (
    <button 
      className={styles.searchButton} 
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {text}
    </button>
  );
};
