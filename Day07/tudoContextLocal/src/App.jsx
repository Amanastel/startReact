import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "Learn React",
      completed: false,
    },
    {
      id: 2,
      todo: "Learn React Native",
      completed: false,
    },
    {
      id: 3,
      todo: "Learn Node",
      completed: false,
    },
  ]);

  const addTodo = (todo) => {
    // Add todo
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    // Update todo
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    // Delete todo
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    // Toggle todo
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])


  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id}
                className="w-full flex justify-center"
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
