import { useContext } from 'react';
import '../assets/taskList.css';
import { TaskListContext } from '../context/taskListContext';

/* formato "Hace X días" */
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export const TaskList = () => {

  const { taskList } = useContext(TaskListContext)

  return (
    <div className="m-3">
      <h1 className="text-center mb-3">Lista de Tareas</h1>
      <div className="list-group">

        {taskList.length > 0 ? taskList.map(tl => (
          <a key={tl.id} href="#" className="list-group-item list-group-item-action" aria-current="true">
            <div className="task-list-item">
              {/* Título y fecha de actualización */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0">{tl.title}</h5>
                <small className="text-muted">
                  Actualizado {formatDistanceToNow(new Date(tl.updatedAt), { addSuffix: true, locale: es })}
                </small>
              </div>

              {/* Fecha de creación */}
              <small className="text-muted">Creado el: {new Date(tl.createdAt).toLocaleString()}</small>

              <div className="d-flex flex-wrap gap-2 mt-2 mb-3">
                <span className="badge rounded-pill bg-primary px-3 py-2 fs-6">
                  Tareas: {tl.tasks.length}
                </span>
                <span
                  className={`badge rounded-pill px-3 py-2 fs-6 ${tl.completed ? 'bg-success' : 'bg-warning text-dark'
                    }`}
                >
                  {tl.completed ? 'Completado' : 'Pendiente'}
                </span>
              </div>

              {/* Badges alineadas a la derecha */}
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="mb-0 text-secondary overflow-hidden" style={{ maxHeight: '100px' }}>{tl.description}</p>
              </div>

              {/* Botones de acción */}
              <div className="d-flex flex-wrap gap-2 justify-content-end" role="group">
                <button className="btn btn-warning" >
                  <i className="bi bi-pencil-fill me-1"></i> Editar
                </button>
                <button className="btn btn-danger">
                  <i className="bi bi-trash-fill me-1"></i> Eliminar
                </button>
              </div>

            </div>
          </a>
        )) : <p>No tasks available</p>}

      </div>
      <button
        className="btn btn-primary rounded-circle fab-button"
        title='Crear Lista de Tareas'
      >
        +
      </button>
    </div >
  )
}
