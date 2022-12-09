import React from "react";
import TodoListStats from "../components/todoList/TodoListStats";
import TodoListCreator from "../components/todoList/TodoListCreator";
import TodoItem from "../components/todoList/TodoItem";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../states/todo";
import TodoListFilter from "../components/todoList/TodoListFilter";

const TodoListPage = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStats />
      <TodoListFilter />
      <TodoListCreator />
      <div className="items">
        {todoList.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TodoListPage;
