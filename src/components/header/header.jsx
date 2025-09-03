import { SearchInput } from "../search-input/searchInput";
import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./header.css";
import "../search-input/searchInput.css";

const NAV_ITEMS = [
  { name: "home", labelProp: "home", path: "/" },
  { name: "movie", labelProp: "movie", path: "/movies" },
  { name: "serial", labelProp: "serial", path: "/serial" },
  { name: "favorites", labelProp: "favorites", path: "/favorites" },
];

export const Header = (props) => {
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
  }, [location.pathname]);

  const handleNavClick = (name, path) => {
    setActiveItem(name);
    navigate(path);
  };

  return (
    <header className="header fade-in">
      <nav className="header_navigation slide-in-left">
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

      <div className="search-container slide-in-right">
        <SearchInput placeholder="найти фильм" />
      </div>
    </header>
  );
};