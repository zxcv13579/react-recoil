import React from "react";
import TodoListStats from "../components/todoList/TodoListStats";
import TodoListCreator from "../components/todoList/TodoListCreator";
import TodoItem from "../components/todoList/TodoItem";

const TodoListPage = () => {
  return (
    <div>
      <TodoListStats />
      <TodoListCreator />
      <TodoItem />
    </div>
  );
};

export default TodoListPage;
