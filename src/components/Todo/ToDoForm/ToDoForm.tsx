import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/todosSlice/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

const ToDoForm = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (value.trim() !== "") {
      dispatch(
        addTodo({
          id: nanoid(),
          title: value.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        })
      );
      setValue("");
    }
  };
  return (
    <Box component="form" display="flex" justifyContent="space-between" gap={2}>
      <TextField
        fullWidth
        label="Введите задачу"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button onClick={handleClick} variant="contained">
        Добавить
      </Button>
    </Box>
  );
};

export default ToDoForm;
