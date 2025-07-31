import React, { useContext, useEffect } from 'react';
import { TaskListContext } from '../../context/taskListContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

let initialTaskListForm = {
  title: '',
  description: '',
  completed: false
};

export const EditTaskList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { taskList, editTaskList } = useContext(TaskListContext);

  useEffect(() => {
    const taskEdit = taskList.find(tl => tl.id === id);

    if (taskEdit) {
      initialTaskListForm = {
        title: taskEdit.title,
        description: taskEdit.description,
        completed: taskEdit.completed
      };
    } else {
      navigate('/tareas');
    }
  }, [id, taskList, navigate]);

  const { title, description, completed, onChangeInput } = useForm(initialTaskListForm);

  const onChangeInputCheckbox = ({ target }) => {
    const { name, checked } = target;
    onChangeInput({ target: { name, value: checked } });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const taskListSave = {
      title,
      description,
      completed,
      updatedAt: new Date().toISOString()
    };

    editTaskList(id, taskListSave);
    navigate('/tareas');
  };

  return (
    <div className="container mt-3">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-gradient-primary py-3">
          <h2 className="card-title mb-0">
            <i className="bi bi-list-check me-2"></i>Editar una Lista de Tareas
          </h2>
        </div>
        <div className="card-body p-4">
          <form onSubmit={onSubmit}>
            {/* Título */}
            <div className="mb-4">
              <label htmlFor="title" className="form-label fw-semibold">
                <i className="bi bi-type" /> Título
              </label>
              <input
                id="title"
                type="text"
                className="form-control form-control-lg rounded-pill border-primary shadow-sm"
                placeholder="Ingresa el título"
                name="title"
                value={title}
                onChange={onChangeInput}
                required
              />
            </div>

            {/* Descripción */}
            <div className="mb-4">
              <label htmlFor="description" className="form-label fw-semibold">
                <i className="bi bi-text-paragraph" /> Descripción
              </label>
              <textarea
                id="description"
                className="form-control rounded-3 border-primary shadow-sm"
                name="description"
                rows="5"
                placeholder="Describe tu lista de tareas"
                value={description}
                onChange={onChangeInput}
                required
              />
            </div>

            {/* Estado */}
            <div className="form-check form-switch form-switch-lg mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="completed"
                name="completed"
                checked={completed}
                onChange={onChangeInputCheckbox}
              />
              <label className="form-check-label fw-semibold" htmlFor="completed">
                <i className="bi bi-check2-circle me-1"></i> Marcada como completada
              </label>
            </div>

            {/* Botones */}
            <div className="d-flex justify-content-end gap-3">
              <button type="submit" className="btn btn-primary btn-lg px-4">
                <i className="bi bi-save2 me-2"></i>Guardar cambios
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
                onClick={() => navigate('/tareas')}
              >
                <i className="bi bi-x-circle me-2"></i>Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );


};
