import React from 'react';
import Header from '../../components/Header';
import Task from '../../components/Task';
import beach from '../../assets/beach.svg';
import './style.css';

const Home = () => {
  
  return(
    <>
      <Header />
    
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
export default Home;