import { taskTypes } from "../types";

const { ADD_TASK, DELETE_TASK, SELECT_TASK, CHECK_STATUS } = taskTypes;

const initialState = {
    taskList: [],
    selectedTask: null,
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TASK:
            return {
              ...state,
              taskList: [...state.taskList, action.task],
            };

        case DELETE_TASK:
            return {
                ...state,
                taskList: state.taskList.filter((item) => item.id !== action.taskId),
                selectedTask: null,
            };

        case SELECT_TASK:
            const indexTask = state.taskList.findIndex(
                (task) => task.id === action.taskId);
            if (indexTask === -1) return state;
            return {
                ...state,
                selectedTask: state.taskList[indexTask],
            };

        case CHECK_STATUS:
            return {
                ...state,
                taskList: state.taskList.map((currItem) => ({ id: currItem.id, value: currItem.value, done: ((currItem.id === action.taskId) ? !currItem.done : currItem.done) }))
            };

        default:
            return state;
    }
};

export default tasksReducer; 