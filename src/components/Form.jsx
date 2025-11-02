import { useState } from "react";

function Form({ setTodos }) {
    
    const handleOnSubmit = (event) => {
        event.preventDefault(); //Impide que se envíe y recargue toda la app
        
        const value = event.target.todo.value;
        setTodos(( prevTodos ) => [
            ...prevTodos,
            { title: value, id: self.crypto.randomUUID(), is_completed: false }
        ])
        
        event.target.reset()

    }
        return(
            <form className='form' onSubmit={ handleOnSubmit }>
            <span className='signup'>Todo App</span>
                <div className='flex--row'>
                    <input 
                        id='inputTodo'
                        name='todo'
                        type="text" 
                        placeholder="Crea una tarea" 
                        className='form--input'
                    />
                    <button className='form--submit'> + </button>
                </div>
        </form>
    )
}

export default Form