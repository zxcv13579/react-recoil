import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../states/todo";

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handelFilterValue = (e) => {
    setFilter(e.target.value);
  };
  return (
    <select value={filter} onChange={handelFilterValue}>
      <option value="all">顯示全部</option>
      <option value="completed">顯示已完成</option>
      <option value="uncompleted">顯示未完成</option>
    </select>
  );
};

export default TodoListFilter;
