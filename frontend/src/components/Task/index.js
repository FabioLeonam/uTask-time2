import React from 'react';
import api from '../../services/api';
import './style.css';
import doneIcon from '../../assets/done.svg';
import deleteIcon from '../../assets/deleteIcon.svg';


const Task = ({id, inputText, status}) => {

  function handleDone(){
    api.put(`/tasks/${id}`, {taskStatus: true});
  }

  function handleDelete(){
    api.delete(`/tasks/${id}`)
  }



  return(
    <div className="task">
      <p>{inputText}</p>
      <div className ="buttons">
        <button disabled={status} className="doneButton" onClick={handleDone}>
          <img src={doneIcon} alt="Tarefa feita"/>
        </button>
        <button disabled={!status} className=" task deleteButton" onClick={handleDelete}>
          <img src={deleteIcon} alt="Tarefa feita" />
        </button>
        
      </div>
      
    </div>

  )

}

export default Task;