import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TareaApp } from './TareaApp.jsx'
import { NavBar } from './components/NavBar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { TaskListProvider } from './context/TaskListProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <TaskListProvider>

        <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<TareaApp />} />
          <Route path="/tareas" element={<TareaApp />} />
          <Route path="/cuentas" element={<h1>Cuenta</h1>} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>

      </TaskListProvider>
    </StrictMode>,
  </BrowserRouter>
)
