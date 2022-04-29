import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/actions/actions";

export default function Form() {
  const dispatch = useDispatch();
  const [value, setValue] = useState({ title: "", description: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (!value) return;
    const newTask = {
      title: value.title,
      description: value.description,
      id: Date.now().toString(),
    };
    dispatch(addTask(newTask));
    setValue((prevState) => ({
      ...prevState,
      title: "",
      description: "",
    }));
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        fullWidth
        label="Task title"
        id="standart-title"
        value={value.title}
        name={"title"}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        label="Task description"
        id="standart-title"
        value={value.description}
        name={"description"}
        onChange={handleChange}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        onClick={handleAddTask}
        style={{ marginTop: 10 }}
      >
        Add task
      </Button>
    </form>
  );
}
