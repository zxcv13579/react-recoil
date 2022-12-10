import { useRecoilValueLoadable } from "recoil";
import { todoState } from "../../states/async";

const TodoInfo = () => {
  const todoLoadable = useRecoilValueLoadable(todoState);

  if (todoLoadable === "hasError") return <p>has Error!!!</p>;
  if (todoLoadable === "loading") return <p>loading...</p>;
  return <div>{todoLoadable.contents.title}</div>;
};

export default TodoInfo;
