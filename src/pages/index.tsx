import Sidebar from "@/components/Sidebar";
import { TodoProvider } from "../components/TodoContext";
import TodoForm from "../components/TodoForm";

const IndexPage = () => {
  return (
    <TodoProvider>
      <div className="container">
        <Sidebar />
        <TodoForm />
      </div>
    </TodoProvider>
  );
};

export default IndexPage;
