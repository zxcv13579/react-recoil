import { atom, selector } from "recoil";

export const todoQuery = selector({
  key: "todoQuery",
  get: async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const todos = res.json();
    return todos;
  },
});

export const todoState = atom({
  key: "todoState",
  default: selector({
    key: "todoState/default",
    get: ({ get }) => {
      const todos = get(todoQuery);
      console.log(todos.state);
      return todos;
    },
  }),
});
