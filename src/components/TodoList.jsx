import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todos/actions';

const TodoList = ({ setEditMode, setCurrentTodo }) => {
  const todos = useSelector((state) => state.todo.todos);
  const lang = useSelector((state) => state.lang.language);
  const dispatch = useDispatch();

  const translations = {
    en: { deleteButton: 'Delete', editButton: 'Edit' },
    id: { deleteButton: 'Hapus', editButton: 'Ubah' },
  };

  const handleEdit = (todo) => {
    setEditMode(true); // Aktifkan mode edit
    setCurrentTodo(todo); // Simpan todo yang sedang diedit
  };

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? 'list-group-item-success' : ''
          }`}
        >
          <span
            style={{
              cursor: 'pointer',
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </span>
          <div>
            <button
              className="btn btn-secondary btn-sm me-2"
              onClick={() => handleEdit(todo)}
            >
              {translations[lang].editButton}
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              {translations[lang].deleteButton}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
