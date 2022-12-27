import { createSlice } from "@reduxjs/toolkit";
//import * as FileSystem from "expo-file-system";
import { insertItem, deleteItem, fetchItem, checkItem, editItem } from '../db';

import Task from "../models/tasks";

const initialState = {
    taskList: [],
    selectedTask: null,
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      addTask: (state, action) => {
        const newTask = new Task(
            action.payload.id.toString(),
            action.payload.value,
            action.payload.done,
            action.payload.imageurl
        );

        state.taskList.push(newTask);
      },
      loadTasks: (state, action) => {
        state.taskList = action.payload.tasks.map(item => new Task(
            item.id.toString(),
            item.value,
            item.done,
            item.imageurl
        ));
      },
      editTask: (state, action) => {
        state.taskList = state.taskList.map((currItem) => ({ id: currItem.id, value: ((currItem.id === action.payload.id) ? action.payload.value : currItem.value), done: currItem.done, imageurl: ((currItem.id === action.payload.id) ? action.payload.imageurl : currItem.imageurl) }));
        state.selectedTask = null;
      },
      deleteTask: (state, action) => {
        state.taskList = state.taskList.filter((item) => item.id !== action.payload);
        state.selectedTask = null;
      },
      selectTask: (state, action) => {
        const indexTask = state.taskList.findIndex(
            (task) => task.id === action.payload);
        if (indexTask !== -1) 
        {
            state.selectedTask = state.taskList[indexTask];
        }
      },
      checkStatus: (state, action) => {
        state.taskList = state.taskList.map((currItem) => ({ id: currItem.id, value: currItem.value, done: ((currItem.id === action.payload) ? !currItem.done : currItem.done), imageurl: currItem.imageurl }));
      },
    },
});

export const { selectTask, addTask, loadTasks, editTask, deleteTask, checkStatus } = taskSlice.actions;

export const saveTask = ({ value, done, imageurl }) => {
    return async (dispatch) => {
      // const fileName = imageurl.split("/").pop();
      // const newPath = FileSystem.documentDirectory + fileName;
  
      try {  
        //const address = data.results[0].formatted_address;
        // await FileSystem.copyAsync({
        //   from: imageurl,
        //   to: newPath,
        // });
        const dbresult = await insertItem(value, done, (!imageurl ? '' : imageurl));
        //console.log(dbresult);

        dispatch(addTask({ id: dbresult.insertId, value, done, imageurl }));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }; 
};

export const changeTask = ({ id, value, imageurl }) => {
    return async (dispatch) => {
      try {  
        const dbresult = await editItem(id, value, (!imageurl ? '' : imageurl));
        //console.log(dbresult);

        dispatch(editTask({ id, value, imageurl }));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }; 
};

export const dropTask = (id) => {
    return async (dispatch) => {
      try {  
        const dbresult = await deleteItem(id);
        console.log(dbresult);

        dispatch(deleteTask(id));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }; 
};

export const checkTask = (id) => {
    return async (dispatch) => {
      try {  
        const dbresult = await checkItem(id);
        //console.log(dbresult);

        dispatch(checkStatus(id));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }; 
};

export const loadTask = () => {
    return async (dispatch) => {
      try {  
        const dbresult = await fetchItem();
        //console.log('loadTask - dbresult', dbresult);
        //console.log('dbresult.rows._array', dbresult.rows._array);

        dispatch(loadTasks({ tasks: dbresult.rows._array }));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }; 
};

export default taskSlice.reducer;