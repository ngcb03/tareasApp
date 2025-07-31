import { useReducer } from "react";
import { TaskListContext } from "./taskListContext";

const initialState = [{
  id: new Date().toISOString(),
  tasks: [],
  title: '',
  description: '',
  completed: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}]

export const TaskListProvider = ({ children }) => {
  const taskListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK_LIST':
        return [
          ...state,
          action.payload
        ];
      case 'EDIT_TASK_LIST':
        return state.map(list =>
          list.id === action.payload.id
            ? { ...list, ...action.payload.updatedTask }
            : list
        );

      case 'REMOVE_TASK_LIST':
        // filtras sacando la que tenga el id
        return state.filter(list => list.id !== action.payload.id);

      default:
        return state;
    }
  };

  const [taskList, dispatch] = useReducer(taskListReducer, initialState);

  const addTaskList = task =>
    dispatch({ type: 'ADD_TASK_LIST', payload: task });

  const editTaskList = (taskId, updatedTask) =>
    dispatch({ type: 'EDIT_TASK_LIST', payload: { id: taskId, updatedTask } });

  const removeTaskList = taskId =>
    dispatch({ type: 'REMOVE_TASK_LIST', payload: { id: taskId } });

  return (
    <TaskListContext.Provider value={{ taskList, addTaskList, editTaskList, removeTaskList }}>
      {children}
    </TaskListContext.Provider>
  );
};
