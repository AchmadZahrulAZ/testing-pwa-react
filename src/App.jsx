import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <TodoInput editMode={editMode} setEditMode={setEditMode} currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
                <TodoList setEditMode={setEditMode} setCurrentTodo={setCurrentTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
