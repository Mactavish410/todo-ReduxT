import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      title: "Выучить Redux Toolkit",
      completed: false,
      createdAt: "2025-05-15T09:00:00Z",
    },
    {
      id: "2",
      title: "Сделать тестовое задание",
      completed: true,
      createdAt: "2025-05-14T18:30:00Z",
    },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    complitedTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo(
      state,
      action: PayloadAction<{ id: string; changes: Partial<Todo> }>
    ) {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        Object.assign(todo, action.payload.changes);
      }
    },
    deliteTodo(state, action: PayloadAction<string>) {
      state.todos = state.todos.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addTodo, complitedTodo, editTodo, deliteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
