import { Suspense } from "react";
import TodoInfo from "../components/async/TodoInfo";
import TodoInfoWithoutSuspense from "../components/async/TodoInfoWithoutSuspense";
import TodoInput from "../components/async/TodoInput";
import { useSetRecoilState } from "recoil";
import { todoRequestIdState } from "../states/async";

const AsyncTodoListPage = () => {
  const setRequestId = useSetRecoilState(todoRequestIdState);

  const handleRefresh = () => {
    setRequestId((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={handleRefresh}>強制刷新</button>
      <TodoInput />
      <Suspense fallback="loading...">
        <TodoInfo id="1" />
        <TodoInfo id="2" />
        <TodoInfo id="3" />
      </Suspense>
      <hr />
      <p>沒有使用 Suspense</p>
      <TodoInfoWithoutSuspense />
    </div>
  );
};

export default AsyncTodoListPage;
