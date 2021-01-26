import React, { useEffect, useState } from "react";
import Task from "../../components/Task";
import beach from "../../assets/beach.svg";
import plus from "../../assets/plus.svg";
import api from "../../services/api";
import "./style.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks()
  }, [tasks])
  
  async function handleSubmit(event){
    event.preventDefault();

    const inputText = event.target.querySelector('input');
    if(inputText.value.trim() === '') return

    const data = {
      taskText: inputText.value,
      taskStatus: 0
    }

    await api.post('tasks', data);

    inputText.value = '';
  }

  async function getTasks(){
    await api.get('tasks').then(res => setTasks(res.data));
  }


  return (
    <>
      <header className="header">
        <h1 className="u-task">uTask</h1>

        <form className="inputTask" onSubmit={handleSubmit}>
          <input
            type="text"
            className="todoInput"
            placeholder="Adicione uma tarefa"
          />
          <button className="submitButton" type="submit">
            <img src={plus} alt="Adicionar tarefa" />
          </button>
        </form>
      </header>

      <div className="todo-container">
        <span className="titleBox">TODO</span>
        <div className="taskToDo">
          
          {tasks.filter(task => !task.taskStatus).length !== 0 ?
            tasks.map((task) => {
              if(!task.taskStatus){
                return(<Task 
                  key={task._id}
                  id={task._id}
                  inputText={task.taskText}
                  status={task.taskStatus} />)
              }
            }) :
              (
                <div className="empty">
                  <img src={beach} alt="Sem tarefas" />
                  <span>Nada por aqui!</span>
                </div>
              )
          
          }
        </div> 
        
        <span className="titleBox">DONE</span>
        <div className="taskDone">
        {tasks.filter(task => task.taskStatus).length !== 0 ?
            tasks.map((task) => {
              if(task.taskStatus){
                return(<Task
                  key={task._id}
                  id={task._id}
                  inputText={task.taskText}
                  status={task.taskStatus} />
                )
              }
            }) :
            (
              <div className="empty">
              <img src={beach} alt="Sem tarefas" />
              <span>Nada por aqui!</span>
              </div>
            )
          
          }
        </div>
      </div>
    </>
  );
};
export default Home;
