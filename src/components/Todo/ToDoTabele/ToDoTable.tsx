import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  TextField,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
import {
  complitedTodo,
  deliteTodo,
  editTodo,
} from "../../../features/todosSlice/todoSlice";
import type { Todo } from "../../../features/todosSlice/todoSlice";

const ToDoTable = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempTitle, setTempTitle] = useState("");

  const startEditing = (todo: Todo) => {
    setEditingId(todo.id);
    setTempTitle(todo.title);
  };

  const finishEditing = (todo: Todo) => {
    if (tempTitle.trim() && tempTitle !== todo.title) {
      dispatch(editTodo({ id: todo.id, changes: { title: tempTitle } }));
    }
    setEditingId(null);
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Дата создания</TableCell>
            <TableCell>Выполнено</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id}>
              <TableCell>
                {editingId === todo.id ? (
                  <TextField
                    value={tempTitle}
                    onChange={(e) => setTempTitle(e.target.value)}
                    onBlur={() => finishEditing(todo)}
                    onKeyDown={(e) => e.key === "Enter" && finishEditing(todo)}
                    autoFocus
                    fullWidth
                  />
                ) : (
                  <span
                    onDoubleClick={() => startEditing(todo)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {todo.title}
                  </span>
                )}
              </TableCell>
              <TableCell>{new Date(todo.createdAt).toLocaleString()}</TableCell>
              <TableCell>
                <Checkbox
                  checked={todo.completed}
                  onChange={() => dispatch(complitedTodo(todo.id))}
                />
                <IconButton
                  onClick={() => dispatch(deliteTodo(todo.id))}
                  aria-label="delete"
                  sx={{
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box display="flex" justifyContent="space-around" gap={1} margin={1}>
        <Button variant="outlined">Back</Button>
        <Button variant="outlined">Next</Button>
      </Box>
    </TableContainer>
  );
};

export default ToDoTable;
