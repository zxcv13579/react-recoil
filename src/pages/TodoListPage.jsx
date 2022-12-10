import React from "react";
import TodoListStats from "../components/todoList/TodoListStats";
import TodoListCreator from "../components/todoList/TodoListCreator";
import TodoItem from "../components/todoList/TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../states/todo";
import TodoListFilter from "../components/todoList/TodoListFilter";
import styles from "../components/todoList/styles.module.css";

const TodoListPage = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recoil TodoList</h2>
      <TodoListStats />
      <TodoListFilter />
      <div className={styles.listContainer}>
        <TodoListCreator />
        <div className={styles.list}>
          {todoList.map((item) => (
            <TodoItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoListPage;
