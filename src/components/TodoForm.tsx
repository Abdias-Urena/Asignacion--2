import React, { useContext, useState } from "react";
import {Todo, TodoContext} from "./TodoContext"


const TodoForm: React.FC = () => {
  const { todos, addTodo, updateTodo } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [index, setIndex] = useState<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (index !== null) {
      updateTodo(index, { title, active: true });
      setIndex(null);
    } else {
      addTodo(title);
    }
    setTitle("");
  };

  const handleEdit = (todo: Todo, index: number) => {
    setTitle(todo.title);
    setIndex(index);
  };

  return (
    <div className="form-tarea">
      <h2>Formulario Tareas</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button className="btn" type="submit">
          {index !== null ? " Actualizar Tarea" : "Agregar Tarea"}
        </button>
      </form>
      <h2>Editar Tareas</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title} - {todo.active ? "Activo" : "Inactivo"}
            <button className="btn" onClick={() => handleEdit(todo, index)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
