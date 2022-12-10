import { useRecoilValue } from "recoil";
import { todoListDashboard } from "../../states/todo";
import styles from "./styles.module.css";

export const TodoListStats = () => {
  const { totalNum, totalCompleted, totalUncompleted, percent } =
    useRecoilValue(todoListDashboard);
  return (
    <div className={styles.dashboard}>
      <p>
        所有清單：<span>{totalNum}</span>
      </p>
      <p>
        已完成清單：<span>{totalCompleted}</span>
      </p>
      <p>
        未完成清單：<span>{totalUncompleted}</span>
      </p>
      <p>
        目前完成進度：<span>{percent}%</span>
      </p>
    </div>
  );
};

export default TodoListStats;
