import { createContext, useContext } from "react";


export const TodoContext = createContext({

    todos: [
        { id: 1, todo: "Learn React", completed: true },
        { id: 2, todo: "Learn JSX", completed: false },
        { id: 3, todo: "Build a React App", completed: false },
    ],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    updateTodo: (id, todo) => { },


})
export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider
