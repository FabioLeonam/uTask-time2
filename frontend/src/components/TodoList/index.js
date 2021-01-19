import React from 'react';
import './style.css';
import beach from '../../assets/beach.svg';

const TodoList = () => {
  return(
    <>
      <div className="todo-container">

        <span className="titleBox">TODO</span>
        <div className="taskTodo">
          <img src={beach} alt="Sem tarefas"/>          
          <span>Nada por aqui!</span>
        </div>

        <span className="titleBox">DONE</span>
        <div className="taskDone">
          <img src={beach} alt="Sem tarefas"/>          
          <span>Nada por aqui!</span>
        </div>

      </div>
    </>
  )

}

export default TodoList;