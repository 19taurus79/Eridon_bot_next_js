// components/FilterButtons.tsx
"use client"; // Цей компонент є клієнтським

import { usePathname } from "next/navigation"; // Для App Router
// import { useRouter } from 'next/router'; // Для Pages Router

const FilterButtons = () => {
  const pathname = usePathname(); // Для App Router
  // const router = useRouter(); // Для Pages Router
  // const pathname = router.pathname; // Для Pages Router

  // Перевіряємо, чи URL містить "remains"
  // Можна також перевірити на повну відповідність, наприклад: pathname === '/remains'
  const shouldShowFilters = pathname.includes("remains");

  if (!shouldShowFilters) {
    return null; // Не рендеримо кнопки, якщо умова не виконується
  }

  return (
    <div className="filter-buttons-container">
      <h4>Віди діяльності:</h4>
      <button onClick={() => console.log("Фільтр Категорії")}>Категорія</button>
      <button onClick={() => console.log("Фільтр Найменування")}>
        Найменування
      </button>
      {/* Додайте інші кнопки фільтрів тут */}
    </div>
  );
};

export default FilterButtons;
