import { useState } from 'react';
import './App.css';
function Todolist() {


    const [todos, setTodos] = useState([])
    const [inputValue, setinputValue] = useState(' ')

    function handleAddTodo() {
        if (inputValue.trim()!=='') {
            setTodos([...todos, { id: Date.now(), text: inputValue }])
            setinputValue('')
        }
    }
    function handleEditTodo(id,newText){
       setTodos(todos.map(todo=>{
        if(todo.id===id){
            return{...todo,text:newText}
        }
        return todo;
       }))
    }


    function handleRemoveTodo(id){
           setTodos(todos.filter(todo=>
            todo.id!==id
            ))
    }

    function handleRemoveAll(){
        setTodos([])
    }
    return (<>
        <div className="todo-list">
            <h1>Todo List</h1>
            <div className="add-todo">
                <input type="text" placeholder="Enter a new Todo"
                    value={inputValue}
                    onChange={(e) => { setinputValue(e.target.value) }} />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul>
                {todos.map(todo => (

                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <div>
                            <button onClick={()=>handleEditTodo(todo.id, prompt("Edit Todo",todo.text))}>Edit</button>
                            <button onClick={()=>handleRemoveTodo(todo.id)}>Remove</button>


                        </div>
                        
                    </li>
                    
                ))}
                
            </ul>
            <div className='remove-all'>
                <button onClick={handleRemoveAll}>Remove All</button>
            </div>
            
        </div>

    </>);
}

export default Todolist;