import React, { useState } from "react";
import "./styles.css"

import Form from "../components/Form";
import CategoryFilter from "../components/CategoryFilter";
import PendingTasks from "../components/PendingTasks";
import TODOList from "../components/TODOList";

function Home(){

    const [ todos, setTodos ] = useState([])
    const [categoriaFiltro, setCategoriaFiltro] = useState(["Todas"]);
    const categorias = [
        { value: "Todas", label: "Todas" },
        { value: "Trabajo", label: "Trabajo" },
        { value: "Casa", label: "Casa" },
        { value: "Estudio", label: "Estudio" },
        { value: "Otros", label: "Otros" },
    ];

    const todosFiltrados =
    categoriaFiltro.includes("Todas") || categoriaFiltro.length === 0
        ? todos
        : todos.filter((todo) => categoriaFiltro.includes(todo.category));


    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;
    const total_todos = todos.length

    return(
        <div className='box'>
            <div className='container'>
                <Form 
                    todos={ todos } 
                    setTodos={ setTodos } 
                    categoriaFiltro={ categoriaFiltro } 
                    setCategoriaFiltro={ setCategoriaFiltro } 
                    categorias={ categorias }
                />
                <div className="tasks--header">
                    <PendingTasks 
                        todosCompleted={ todos_completed }
                        totalTodos={ total_todos } 
                    />
                    <CategoryFilter
                        categorias={ categorias }
                        categoriaFiltro={ categoriaFiltro }
                        setCategoriaFiltro={ setCategoriaFiltro }
                    />
                </div>
                <hr />
                <TODOList 
                    todos={ todosFiltrados } 
                    setTodos={ setTodos } 
                />
            </div>
        </div>
    )
}

export default Home