import { NavBar } from './components/NavBar.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'

import { TaskListProvider } from './context/TaskListProvider.jsx'
import { TaskList } from './pages/TaskList/TaskList.jsx'
import { AddTaskList } from './pages/TaskList/AddTaskList.jsx'
import { EditTaskList } from './pages/TaskList/EditTaskList.jsx'

import './assets/global.css'

export const TareaApp = () => {
  return (
    <TaskListProvider>

      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<TaskList />} />

        <Route path="/tareas" element={<TaskList />} />
        <Route path="/tareas/registrar" element={<AddTaskList />} />
        <Route path="/tareas/:id/editar" element={<EditTaskList />} />
        <Route path="/tareas/:id/eliminar" element={<TareaApp />} />

        <Route path="/cuentas" element={<h1>Cuenta</h1>} />
        <Route path="/*" element={<Navigate to={'/'} />} />
      </Routes>

    </TaskListProvider>
  )
}
