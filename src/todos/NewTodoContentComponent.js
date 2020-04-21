import React, {useState, useEffect} from 'react';

import NewAddTodoComponent from './NewAddTodoComponent'
import TodoListComponent from './TodoListComponent';
import Grid from '@material-ui/core/Grid';

const NewTodoContentComponent = () =>{
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadListTodo();
        return () => {

        };
    }, []);
    
    const loadListTodo = () => {
        fetch('http://localhost:3000/todos')
            .then((res) => {
                console.log(res, 'res');
                return res.json();
            })
            .then((data) => {
                console.log(data, 'data');
                setTodos(data);
            });
    };

    const addTodo = (newTodo) => {
        fetch("http://localhost:3000/todos", {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(newTodo)
        })
            .then(() => {
                loadListTodo();
            });
    };

    const updateTodo = (updatedTodo) => {
        fetch(`http://localhost:3000/todos/${updatedTodo.id}`, {
            method: 'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(updatedTodo)
        })
            .then(() => {
                loadListTodo();
            });
    };

    const deleteTodo = (id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                loadListTodo();
            });
    };
    
    return(
        <div className="todo-content">
                <Grid container spacing={3}>
                    <NewAddTodoComponent addTodo={addTodo} />
                    <TodoListComponent todos={todos}
                                       updateTodo={updateTodo}
                                       deleteTodo={deleteTodo}
                    />
                </Grid>
            </div>
    );
};

export default NewTodoContentComponent;