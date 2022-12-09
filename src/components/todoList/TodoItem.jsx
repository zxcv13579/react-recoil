import React, { useId } from "react";

const TodoItem = () => {
  const id = useId();
  return (
    <div className="item">
      <label className="label">
        <input type="checkbox" />
        <p>第一項</p>
      </label>
      <button>X</button>
    </div>
  );
};

export default TodoItem;
