import { useState } from "react";
import { FiPlus } from "react-icons/fi";

function Form({ setTodos, todos, categorias }) {
    const [category, setCategory] = useState("");
    const [shake, setShake] = useState(false);
    
    const handleOnSubmit = (event) => {
        event.preventDefault(); 
        const value = event.target.todo.value;
        
        if (!value.trim() || !category) {
            
            setShake(true); 

            setTimeout(() => setShake(false), 500);
            return;
        }
        setTodos(( prevTodos ) => [
            ...prevTodos,
            { 
                title: value, 
                id: self.crypto.randomUUID(), 
                is_completed: false, 
                category: category 
            }
        ])
        
        event.target.reset()
        setCategory("")
    }

        return(
            <form className='form' onSubmit={ handleOnSubmit } autoComplete="off">
            <span className='signup'>Todo App</span>
                <div className='flex--row'>
                    <input 
                        id='inputTodo'
                        name='todo'
                        type="text" 
                        placeholder="Crea una tarea" 
                        className='form--input'
                    />
                    <button className='form--submit'>
                        <FiPlus />
                    </button>
                </div>

                <div className="pills--select">

                {/* Pills categorías */}
                <div className={`pills--row ${shake ? "shake" : ""}`}>
                    { categorias
                    .filter(( cat ) => cat.value !== "Todas")
                    .map(( cat ) => (
                        <span
                            key={ cat.value }
                            className={`pill ${category === cat.value ? cat.value.toLowerCase() : ""}`}
                            data-type={ cat.value.toLowerCase() }
                            onClick={ () => setCategory(cat.value) }
                        >
                        { cat.label }
                        </span>
                    ))}
                </div>
                    
                </div>
        </form>
    )
}

export default Form