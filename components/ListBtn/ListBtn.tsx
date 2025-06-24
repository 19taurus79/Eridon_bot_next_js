import css from "./ListBtn.module.css";

const ListBtn = ({ list, getLabel }) => {
  return (
    <ul className={css.list}>
      {list.map((item) => (
        <li className={css.listItem} key={item.id}>
          {getLabel(item)}
        </li>
      ))}
    </ul>
  );
};
export default ListBtn;
