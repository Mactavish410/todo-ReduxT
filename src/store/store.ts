import { configureStore } from "@reduxjs/toolkit";
import todoReduser from "../features/todosSlice/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
