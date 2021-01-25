import React from 'react';
import './style.css';
import Task from '../Task';
import beach from '../../assets/beach.svg';

const TodoList = () => {
  
  
  return(
    <>
      <div className="todo-container">

        <span className="titleBox">TODO</span>
        <div className="taskToDo">
          <Task />
        </div>
        <div className="empty">
          <img src={beach} alt="Sem tarefas"/>          
          <span>Nada por aqui!</span>
        </div>

        <span className="titleBox">DONE</span>
        {/* <div className="taskDone">Aqui vem as Tasks feitas</div> */}
        <div className="empty">
          <img src={beach} alt="Sem tarefas"/>          
          <span>Nada por aqui!</span>
        </div>

      </div>
    </>
  )

}

export default TodoList;