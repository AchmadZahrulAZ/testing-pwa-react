import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo } from '../redux/todos/actions';
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({ editMode, setEditMode, currentTodo, setCurrentTodo }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.language);

  const translations = {
    en: { placeholder: 'Add a new task...', addButton: 'Add', updateButton: 'Update' },
    id: { placeholder: 'Tambahkan tugas baru...', addButton: 'Tambah', updateButton: 'Perbarui' },
  };

  // Perbarui teks di input form saat currentTodo berubah
  useEffect(() => {
    if (currentTodo) {
      setText(currentTodo.text);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      dispatch(updateTodo(currentTodo.id, text)); // Dispatch updateTodo
      setEditMode(false); // Kembali ke mode tambah
      setCurrentTodo(null); // Reset todo yang sedang diedit
    } else {
      dispatch(addTodo({ id: uuidv4(), text: text, completed: false }));
    }
    setText(''); // Reset input
  };

  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={translations[lang].placeholder}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button
          className={`btn ${editMode ? 'btn-warning' : 'btn-primary'}`}
          type="submit"
        >
          {editMode
            ? translations[lang].updateButton
            : translations[lang].addButton}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
