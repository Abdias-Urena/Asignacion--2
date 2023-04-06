import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

const Sidebar: React.FC = () => {
  const { todos, updateTodo } = useContext(TodoContext);
  
  const handleEdit = (index: number) => {
    const newTodo = { ...todos[index], active: !todos[index].active };
    updateTodo(index, newTodo);
  };
  
  return (
    <div className='form-list'>
      <h2>Lista de Tareas</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.title} - {todo.active ? 'Activo' : 'Inactivo'}
            <button className="btn" onClick={() => handleEdit(index)}>Cambiar estado</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
