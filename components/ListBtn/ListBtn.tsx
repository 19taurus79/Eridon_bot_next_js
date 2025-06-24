import React from "react"; // Важно импортировать React для React.ReactNode
import css from "./ListBtn.module.css";

// 1. Определяем базовый интерфейс для элемента списка.
//    Каждый элемент в вашем 'list' должен соответствовать этому интерфейсу.
//    Мы требуем только 'id', так как оно используется для key={item.id}.
//    [key: string]: any; позволяет иметь любые другие свойства в объекте.
interface ListItem {
  id: string; // ID может быть строкой или числом
  [key: string]: string; // Это позволяет элементу иметь любые другие свойства
}

// 2. Определяем типы для пропсов компонента ListBtn.
//    <T extends ListItem> делает компонент дженериком.
//    Это означает, что 'T' будет конкретным типом элемента в списке,
//    и этот тип должен соответствовать ListItem (т.е., иметь 'id').
interface ListBtnProps<T extends ListItem> {
  list: T[]; // 'list' теперь массив элементов типа 'T'
  // 'getLabel' - это функция, которая принимает элемент типа 'T'
  // и возвращает 'React.ReactNode' (что может быть JSX, строкой, числом и т.д.)
  getLabel: (item: T) => React.ReactNode;
}

// 3. Типизируем сам функциональный компонент.
//    Важно добавить <T extends ListItem> перед ({ list, getLabel }) => { ... }
const ListBtn = <T extends ListItem>({ list, getLabel }: ListBtnProps<T>) => {
  return (
    <ul className={css.list}>
      {list.map((item) => (
        // item.id гарантированно существует благодаря T extends ListItem
        <li className={css.listItem} key={item.id}>
          {getLabel(item)}
        </li>
      ))}
    </ul>
  );
};

export default ListBtn;
