import { taskTypes } from "../types";

const { ADD_TASK, DELETE_TASK, SELECT_TASK, CHECK_STATUS } = taskTypes;

export const addTask = (item) => ({
    type: ADD_TASK,
    task: item,
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    taskId: id,
});

export const selectTask = (id) => ({
    type: SELECT_TASK,
    taskId: id,
});

export const checkStatus = (id) => ({
    type: CHECK_STATUS,
    taskId: id,
});

