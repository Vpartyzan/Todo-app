import React from 'react';
import Grid from '@material-ui/core/Grid';
import TodoComponent from './TodoComponent';

const TodoListComponent = (props) => {
    const {todos, updateTodo} = props;
    return (
        <Grid item xs={12} spacing={8}>
            {todos.map((item) => (
                <TodoComponent status={item.status}
                               title={item.title}
                               key={item.id}
                               id={item.id}
                               updateTodo={updateTodo}
                />
            ))}
        </Grid>
    )
};

export default TodoListComponent;