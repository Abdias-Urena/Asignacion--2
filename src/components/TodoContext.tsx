import React, { createContext, useState } from 'react';

export interface Todo {
  title: string;
  active: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (index: number, todo: Todo) => void;
  children?: React.ReactNode;
}

export const TodoContext = createContext<TodoContextProps>({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
});

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (title: string) => {
    setTodos([...todos, { title, active: true }]);
  };
  
  const updateTodo = (index: number, todo: Todo) => {
    const newTodos = [...todos];
    newTodos[index] = todo;
    setTodos(newTodos);
  };
  
  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, children }}>
      {children}
    </TodoContext.Provider>
  );
};
