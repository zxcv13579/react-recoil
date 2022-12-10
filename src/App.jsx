import { Routes, Route, Link, Outlet } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import AsyncTodoListPage from "./pages/AsyncTodoListPage";

const Dashboard = () => {
  return (
    <>
      <header className="header">
        <Link to="todo">TodoList Page</Link>
        <Link to="custom">Custom Page</Link>
      </header>
      <hr />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="todo" element={<TodoListPage />} />
        <Route path="custom" element={<AsyncTodoListPage />} />
      </Route>
    </Routes>
  );
}

export default App;
