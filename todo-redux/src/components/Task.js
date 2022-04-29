import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/actions/actions";

function Task({ task }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState({ title: "", description: "" });
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleUpdateTask = (task) => {
    const updatedTask = {
      title: value.title,
      description: value.description,
      id: task.id,
    };
    dispatch(updateTask(updatedTask));
    setEdit(false);
  };

  return (
    <Card style={{ marginTop: 10, marginBottom: 10 }}>
      <CardActionArea>
        <CardContent>
          {edit ? (
            <>
              <TextField
                fullWidth
                label="Title edit"
                value={value.title}
                name={"title"}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Description edit"
                value={value.description}
                name={"description"}
                onChange={handleChange}
              />
              <Button
                size="small"
                color="primary"
                onClick={() => handleUpdateTask(task)}
              >
                Save
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => setEdit(false)}
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="h2">
                {task.title}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {task.description}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="error"
          onClick={() => handleDeleteTask(task.id)}
        >
          Delete
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            setEdit(true);
            setValue(task.title);
          }}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
export default Task;
