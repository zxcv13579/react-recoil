import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "all",
});

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const lists = get(todoListState);
    const filter = get(todoListFilterState);

    switch (filter) {
      case "completed":
        return lists.filter((list) => list.isCompleted);
      case "uncompleted":
        return lists.filter((list) => !list.isCompleted);
      default:
        return lists;
    }
  },
});

export const todoListDashboard = selector({
  key: "todoListDashboard",
  get: ({ get }) => {
    const lists = get(todoListState);
    const totalNum = lists.length;
    const totalCompleted = lists.filter((list) => list.isCompleted).length;
    const totalUncompleted = totalNum - totalCompleted;
    const percent = totalNum === 0 ? 0 : (totalCompleted / totalNum) * 100;

    return {
      totalNum,
      totalCompleted,
      totalUncompleted,
      percent,
    };
  },
});
