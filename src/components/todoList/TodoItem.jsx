import { useSetRecoilState } from "recoil";
import { todoListState } from "../../states/todo";

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
    <div className="item">
      <label className="label">
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
