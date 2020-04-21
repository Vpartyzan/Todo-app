import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class TodoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowDescription: false,
            descriptionValue: props.description,
            isEditTitle: false,
            title: props.title
        };

        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
        this.onDeleteTodo = this.onDeleteTodo.bind(this);
        this.onShowHideDescription = this.onShowHideDescription.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onStartEditTitle = this.onStartEditTitle.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onUpdateTitle = this.onUpdateTitle.bind(this);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeCheckbox(e) {
        this.props.updateTodo({
            id: this.props.id,
            status: e.target.checked,
            title: this.state.title,
            description: this.state.descriptionValue
        });
    }

    onDeleteTodo() {
        this.props.deleteTodo(this.props.id);
    }

    onShowHideDescription(){
        this.setState({
            isShowDescription: !this.state.isShowDescription
        });
    }

    onChangeInput(e) {
        this.setState({
            descriptionValue: e.target.value
        });
        this.props.updateTodo({
            id: this.props.id,
            status: this.props.status,
            title: this.state.title,
            description: e.target.value
        });
    }
    
    onStartEditTitle() {
        this.setState({
            isEditTitle: true
        });
    }

    onUpdateTitle() {
        this.props.updateTodo({
            id: this.props.id,
            title: this.state.title,
            description: this.state.descriptionValue,
            status: this.props.status
        });
        this.setState({
            isEditTitle: false
        });
    }

    render() {
        return (
            <div className="checkbox">
                <Checkbox checked={this.props.status}
                          onChange={this.onChangeCheckbox}
                          color='primary'
                />
                <div className={`todoTitleContainer ${this.props.status ? 'done' : ''}`}>
                    {this.state.isEditTitle ? (
                        <div>
                            <TextField label="Title"
                                       value={this.state.title}
                                       onChange={this.onChangeTitle}
                            />
                            <Button onClick={this.onUpdateTitle}>Save</Button>
                        </div>
                    ) 
                    : (
                        <div className="todoTitle" 
                             onClick={this.onStartEditTitle}
                        >
                        {this.props.title}                        
                    </div>
                    ) }
                    
                    <Button color='primary'
                                onClick={this.onShowHideDescription}
                        >
                            {this.state.isShowDescription ? 'Hide' : 'Show more'}
                        </Button>
                    {this.state.isShowDescription && (
                        <div>
                            <TextField label="Description"                                         
                                       fullWidth 
                                       value={this.state.descriptionValue} 
                                       onChange={this.onChangeInput}
                            />

                        </div>
                    )}                    
                </div>

                <IconButton aria-label='delete' onClick={this.onDeleteTodo}>
                    <DeleteIcon className='X' />
                </IconButton>
            </div>
        );
    }
}

export default TodoComponent;