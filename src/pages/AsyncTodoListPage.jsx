import { Suspense, useState } from "react";
import TodoInfo from "../components/async/TodoInfo";
import TodoInfoWithoutSuspense from "../components/async/TodoInfoWithoutSuspense";
import { useSetRecoilState } from "recoil";
import { todoRequestIdState } from "../states/async";

const useRefreshTodoInfo = (id) => {
  // 這裡的 id 會是唯一不會重複的，每一個不同的 id 都表示的是 Atom Family 中不同的 Atom
  const setTodoRequestId = useSetRecoilState(todoRequestIdState(id));
  return () => {
    setTodoRequestId((prev) => prev + 1);
  };
};

const AsyncTodoListPage = () => {
  const [id, setId] = useState("1");

  const refreshTodoInfo = useRefreshTodoInfo(id);

  return (
    <div>
      <button onClick={refreshTodoInfo}>強制刷新 todo {id}</button>
      <select value={id} onChange={(e) => setId(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
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
