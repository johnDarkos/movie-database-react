# MovieCard Components

## Описание
Компоненты для отображения карточек фильмов с поддержкой скелетона загрузки.

## Компоненты

### MovieCard / MovieCardWrapper
Основной компонент-обертка для отображения карточек фильмов.

**Props:**
- `className` (string) - дополнительные CSS классы

**Пример использования:**
```jsx
import { MovieCard } from '@/components/movie-card';

<MovieCard className="custom-class" />
```

### MovieCardItem
Компонент отдельной карточки фильма.

**Props:**
- `Title` (string) - название фильма
- `Year` (string) - год выпуска
- `Type` (string) - тип (movie/series)
- `Poster` (string) - URL постера
- `imdbID` (string) - ID фильма
- `className` (string) - дополнительные CSS классы

**Пример использования:**
```jsx
import { MovieCardItem } from '@/components/movie-card';

<MovieCardItem 
  Title="Movie Title"
  Year="2023"
  Type="movie"
  Poster="url"
  imdbID="tt1234567"
  className="custom-class"
/>
```

### MovieCardSkeleton
Компонент скелетона для состояния загрузки.

**Props:**
- `count` (number) - количество скелетонов для отображения (по умолчанию 6)
- `className` (string) - дополнительные CSS классы

**Пример использования:**
```jsx
import { MovieCardSkeleton } from '@/components/movie-card';

<MovieCardSkeleton count={8} className="custom-class" />
```

## Состояния

1. **Загрузка** - автоматически показывается скелетон при `isLoading: true` в store
2. **Пустое состояние** - показывается когда нет фильмов
3. **Обычное состояние** - отображение карточек фильмов

## Стили

Компоненты используют современный дизайн в стиле киберпанк/неон с:
- Градиентными фонами
- Свечением и тенями
- Плавными анимациями
- Hover эффектами
- Адаптивным дизайном

## Анимации

- **Skeleton shimmer** - анимация загрузки с движущимся градиентом
- **Hover effects** - поднятие и масштабирование при наведении
- **Smooth transitions** - плавные переходы между состояниями
