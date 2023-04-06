import React from "react";

interface Task {
  title: string;
  isActive: boolean;
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      <h1>Lista de Tareas</h1>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task.title}</span>
          <span>|| Estado: </span>
          <span>{task.isActive ? "Activa" : "Inactiva"}</span>
        </li>
      ))}
    </ul>
  );
};



const TaskForm: React.FC = () => {
  return (
    <form>
      <input type="text" placeholder="Título de la tarea" />
      <select>
        <option value="true">Activa</option>
        <option value="false">Inactiva</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
};



const TasksPage: React.FC = () => {
  const tasks: Task[] = [
    { title: "Comprar leche ", isActive: true },
    { title: "Pagar la factura de la luz ", isActive: false },
    { title: "Ir al gimnasio ", isActive: true },
  ];

  return (
    <div className="flex flex-row">
      <div className="middle-space">
        <TaskList tasks={tasks} />
      </div>
      <div className="middle-space">
        <TaskForm />
      </div>
    </div>
  );
};

export default TasksPage;
