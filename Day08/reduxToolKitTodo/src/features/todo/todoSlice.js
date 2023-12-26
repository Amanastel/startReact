import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: "Learn React"},
        { id: 2, text: "Learn JSX" },
        { id: 3, text: "Build a React App"},
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        toggleCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            todo.completed = !todo.completed
        },
        updateTodo: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo.text = action.payload.text
        }

    }
})


export const {addTodo, removeTodo, toggleCompleted, updateTodo} = todoSlice.actions

export default todoSlice.reducer