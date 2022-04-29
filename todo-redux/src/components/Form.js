import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions/actions";

export default function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleAddTask = (event) => {
    event.preventDefault();
    if (!value) return;
    const newTask = {
      title: value,
      id: Date.now().toString(),
    };
    dispatch(addTask(newTask));
    setValue("");
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        fullWidth
        label="Task title"
        id="standart-title"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleAddTask}
      >
        Add task
      </Button>
    </form>
  );
}
