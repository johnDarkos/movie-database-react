import { SearchInput } from "../search-input/searchInput";
import { Checkbox } from "../checkbox/Checkbox";
import { useState, useEffect, memo } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { NAV_ITEMS } from "@/constants/constants";


export const Header = memo((props) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Определяем активный элемент на основе текущего пути
  const getActiveItemFromPath = (pathname) => {
    const item = NAV_ITEMS.find(nav => nav.path === pathname);
    return item ? item.name : "/404";
  };

  const [activeNavItem, setActiveItem] = useState(() => getActiveItemFromPath(location.pathname));

  // Синхронизируем активный элемент с текущим маршрутом
  useEffect(() => {
    setActiveItem(getActiveItemFromPath(location.pathname));
  }, [location.pathname]);  // если location.pathname изменится, то вызовется setActiveItem

  const handleNavClick = (name, path) => {
    setActiveItem(name);
    navigate(path);
  };

  return (
    <header className={`${styles.header} fade-in`}>
      <nav className={`${styles.headerNavigation} slide-in-left`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item.name, item.path);
            }}
            className={activeNavItem === item.name ? "active" : ""}
          >
            {props[item.labelProp]}
          </Link>
        ))}
      </nav>

      <div className={`${styles.controlsContainer} slide-in-right`}>
        <div className={styles.filtersContainer}>
          <Checkbox />
        </div>
        <div className={styles.searchContainer}>
          <SearchInput placeholder="найти фильм" />
        </div>
      </div>
    </header>
  );
});