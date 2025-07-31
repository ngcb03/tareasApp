import { useReducer } from "react"
import { TaskListContext } from "./taskListContext"

const initialState = [{
  id: 1,
  tasks: [{
    id: 1,
    title: "Sample Task 1",
    description: "This is sample task description.",
  },
  {
    id: 2,
    title: "Sample Task 2",
    description: "This is another sample task description.",
  }],
  title: "Sample Task List",
  description: "This is a sample task description. This is sample task description. This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.This is sample task description.",
  completed: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
},
{
  id: 2,
  tasks: [{
    id: 1,
    title: "Sample Task 1",
    description: "This is sample task description.",
  },
  {
    id: 2,
    title: "Sample Task 2",
    description: "This is another sample task description.",
  }],
  title: "Sample Task List",
  description: "This is a sample task description.",
  completed: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}]

export const TaskListProvider = ({ children }) => {

  const taskListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TASK_LIST':
        return {
          ...state,
          tasks: [...state.tasks, action.payload],
        }
      case 'EDIT_TASK_LIST':
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload.id ? { ...task, ...action.payload.updatedTask } : task
          ),
        }
      case 'REMOVE_TASK_LIST':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload.id),
        }
      default:
        return state
    }
  }

  const [taskList, dispatch] = useReducer(taskListReducer, initialState)

  const addTaskList = (task) => {
    dispatch({ type: 'ADD_TASK_LIST', payload: task })
  }

  const editTaskList = (taskId, updatedTask) => {
    dispatch({ type: 'EDIT_TASK_LIST', payload: { id: taskId, updatedTask } })
  }

  const removeTaskList = (taskId) => {
    dispatch({ type: 'REMOVE_TASK_LIST', payload: { id: taskId } })
  }

  return (
    <TaskListContext.Provider value={{ taskList, addTaskList, editTaskList, removeTaskList }}>
      {children}
    </TaskListContext.Provider>
  )
}
