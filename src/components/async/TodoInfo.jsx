import { useRecoilValue } from "recoil";
import { todoQuery } from "../../states/async";

const TodoInfo = () => {
  const todo = useRecoilValue(todoQuery);
  return <div>{todo.title}</div>;
};

export default TodoInfo;
