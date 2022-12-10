import { useSetRecoilState } from "recoil";
import { todoListState } from "../../states/todo";
import styles from "./styles.module.css";

const TodoItem = ({ id, text, isCompleted }) => {
  const setTodoList = useSetRecoilState(todoListState);
  const toggleCompleted = () => {
    setTodoList((lists) =>
      lists.map((list) =>
        list.id === id
          ? {
              ...list,
              isCompleted: !list.isCompleted,
            }
          : list
      )
    );
  };
  const deleteItem = () => {
    setTodoList((lists) => lists.filter((list) => list.id !== id));
  };
  return (
    <div className={styles.item}>
      <label className={styles.label}>
        <input
          type="checkbox"
          onChange={toggleCompleted}
          checked={isCompleted}
        />
        <p>{text}</p>
      </label>
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;
