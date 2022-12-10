import { Suspense } from "react";
import TodoInfo from "../components/async/TodoInfo";
import TodoInfoWithoutSuspense from "../components/async/TodoInfoWithoutSuspense";
import TodoInput from "../components/async/TodoInput";

const AsyncTodoListPage = () => {
  return (
    <div>
      <TodoInput />
      <Suspense fallback="loading...">
        <TodoInfo />
      </Suspense>
      <hr />
      <p>沒有使用 Suspense</p>
      <TodoInfoWithoutSuspense />
    </div>
  );
};

export default AsyncTodoListPage;
