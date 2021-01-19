import React from 'react';
import './style.css';
import plus from '../../assets/plus.svg';

const Header = () => {

  return(
    <> {/* Fragment */}
      <header className="header">
        <h1 className="u-task">uTask</h1>

        <form className="inputTask">
          <input type="text" className="todoInput" placeholder="Adicione uma tarefa"/>
          <button className="submitButton" type="submit">
            <img  src={plus} alt="Adicionar tarefa" />
          </button>
        </form>
      </header>
    </>
  )
}

export default Header;