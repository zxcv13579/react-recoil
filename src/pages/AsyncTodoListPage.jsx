import { useCallback, Suspense, useState } from "react";
import TodoInfo from "../components/async/TodoInfo";
import TodoInfoWithoutSuspense from "../components/async/TodoInfoWithoutSuspense";
import TodoInput from "../components/async/TodoInput";
import { useSetRecoilState } from "recoil";
import { todoRequestIdState } from "../states/async";

const AsyncTodoListPage = () => {
  // 這裡的 id 會是唯一不會重複的，每一個不同的 id 都表示的是 Atom Family 中不同的 Atom
  const setTodoRequestId = useSetRecoilState(todoRequestIdState("1"));

  const refreshTodoInfo = useCallback(() => {
    setTodoRequestId((prev) => prev + 1);
  }, [setTodoRequestId]);

  return (
    <div>
      <button onClick={refreshTodoInfo}>強制刷新 todo 1</button>
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
