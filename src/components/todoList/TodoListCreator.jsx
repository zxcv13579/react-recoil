import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../states/todo";
import styles from "./styles.module.css";

const getKey = () => Math.random().toString().substring(2);

const TodoListCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const changeValue = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.length === 0) return;
    setTodoList((lists) => [
      ...lists,
      {
        id: getKey(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <div className={styles.creator}>
      <input
        className={styles.input}
        type="text"
        value={inputValue}
        onChange={changeValue}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
};

export default TodoListCreator;
