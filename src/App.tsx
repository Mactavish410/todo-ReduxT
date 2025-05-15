import { Container, Typography, Box, Paper } from "@mui/material";
import "./App.css";
import ToDoForm from "./components/Todo/ToDoForm/ToDoForm";
import ToDoTable from "./components/Todo/ToDoTabele/ToDoTable";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <Box py={4}>
          <Typography variant="h4" align="center" gutterBottom>
            📝 To-Do List
          </Typography>
          <Paper elevation={3} sx={{ p: 2, mb: 4 }}>
            <ToDoForm />
          </Paper>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ToDoTable />
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default App;
