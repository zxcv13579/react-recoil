import { atom, selector } from "recoil";

export const idState = atom({
  key: "idState",
  default: "1",
});

export const todoQuery = selector({
  key: "todoQuery",
  get: async ({ get }) => {
    const id = get(idState);
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
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
      return todos;
    },
  }),
});
