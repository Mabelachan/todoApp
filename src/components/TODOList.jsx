
function TODOList({ todos, setTodos }){
    
    return (
        <ul className='list'>
            { todos && todos.length > 0 ? todos?.map(( todo, index ) =>{
                return <Item key={ index } item={ todo } setTodos={ setTodos } />
            }) : <p>No tienes tareas pendientes</p>
        }
        </ul>
    )

}
function Item({ item, setTodos }){
    
    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== item.id));
    }
    const completeTodo = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === item.id
                ? { ...todo, is_completed: !todo.is_completed }
            : todo
            )
    );
    }
    const checkboxId = `task-${item.id}`;
    return(
        <li key={ item?.id } className='list--element'>
            <input 
                id={ checkboxId } 
                name={ checkboxId }
                type="checkbox" 
                checked={ item.is_completed }
                className='form--input--checkbox'
                onClick={ completeTodo }
                readOnly
            />
            <label 
                className='todo--desc' 
                htmlFor={ checkboxId }
                style={ item.is_completed ? { textDecoration: 'line-through'} : {}}
            >{ item?.title }</label>
            <button 
                className='form--submit'
                onClick={ handleDelete }
            >Eliminar</button>
        </li>
    )
}
export default TODOList