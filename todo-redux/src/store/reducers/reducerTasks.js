import { ADD_TASK, DELETE_TASK, UPDATE_TASK } from "../types";

const initialState = {
  tasks: [],
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case UPDATE_TASK:
      const updatedTask = state.tasks.map((task) =>
        task.id === action.payload.id
          ? {
              ...state,
              title: action.payload.title,
            }
          : task
      );
      return {
        ...state,
        tasks: updatedTask,
      };
    default:
      return state;
  }
};
