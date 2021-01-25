import React from 'react';
import './style.css';
import doneIcon from '../../assets/done.svg';
import deleteIcon from '../../assets/deleteIcon.svg';




const Task = () => {
  return(
    <div className="task">
      <p>Comprar leite no mercado</p>
      <div className ="buttons">
        <button className="doneButton">
          <img src={doneIcon} alt="Tarefa feita"/>
        </button>
        <button className="deleteButton">
          <img src={deleteIcon} alt="Tarefa feita"/>
        </button>
      </div>
      
    </div>

  )

}

export default Task;