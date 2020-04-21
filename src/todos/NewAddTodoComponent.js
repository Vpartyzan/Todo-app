import React, {useState} from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const NewAddTodoComponent = (props) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const onClickAddTodo = () => {
        const newTodo = {
            status: false,
            description: '',
            title: inputValue
        };
        props.addTodo(newTodo);
        setInputValue('');     
    };
    
        
    
    return (
        <Grid container item xs={12} spacing={3} alignItems="center">
                <Grid item xs={8}>
                    <TextField label="Todo title" 
                               variant="outlined" 
                               fullWidth 
                               value={inputValue} 
                               onChange={onChangeInput}
                    />
                </Grid>
                <Grid item xs={4}>
                    <Button variant="contained" color="primary" onClick={onClickAddTodo}>Add todo</Button>
                </Grid>
            </Grid>
    );
};

export default NewAddTodoComponent;