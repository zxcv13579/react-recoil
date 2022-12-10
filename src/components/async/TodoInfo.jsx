import { useRecoilValue } from "recoil";
import { todoQuery } from "../../states/async";

const TodoInfo = ({ id }) => {
  const todo = useRecoilValue(todoQuery({ id }));
  return <div>{todo.title}</div>;
};

export default TodoInfo;
