import { useRecoilState } from "recoil";
import { idState } from "../../states/async";

const TodoInput = () => {
  const [todoId, setTodoId] = useRecoilState(idState);
  return (
    <input
      type="text"
      value={todoId}
      onChange={(e) => setTodoId(e.target.value)}
    />
  );
};

export default TodoInput;
