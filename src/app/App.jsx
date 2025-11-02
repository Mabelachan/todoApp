import React, { useState } from "react";
import "./styles.css"

import Form from "../components/Form";
import PendingTasks from "../components/PendingTasks";
import TODOList from "../components/TODOList";

function Home(){
    const [ todos, setTodos ] = useState([])

    const todos_completed = todos.filter(
        (todo) => todo.is_completed === true
    ).length;
    const total_todos = todos.length

    return(
        <div className='box'>
            <div className='container'>
                <Form setTodos={ setTodos } />
                <PendingTasks todosCompleted={ todos_completed } totalTodos={ total_todos } />
                <TODOList todos={ todos } setTodos={ setTodos } />
            </div>
        </div>
    )
}

export default Home