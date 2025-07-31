import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to={'/tareas'} className="navbar-brand" href="#">ToDoApp</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to={'/tareas'} className="nav-link active" href="#">Tareas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/cuentas'} className="nav-link" href="#">Cuenta</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};