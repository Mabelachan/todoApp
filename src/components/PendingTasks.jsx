
function PendingTasks({ todosCompleted, totalTodos }) {
    return(
        <div className='flex--row--title'>
            <h2>Mis tareas
                <span> { todosCompleted }/{ totalTodos }</span>
            </h2> 
            <hr />
        </div>
    )
}

export default PendingTasks