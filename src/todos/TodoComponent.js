import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

class TodoComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    }

    onChangeCheckbox(e) {
        this.props.updateTodo({
            id: this.props.id,
            status: e.target.checked
        })
    }

    render() {
        return (
            <div className="Checkbox">
                <Checkbox checked={this.props.status}
                          onChange={this.onChangeCheckbox}
                          color='primary'
                />
                {this.props.title}
                
                <IconButton aria-label='delete'>
                    <DeleteIcon className='X' />
                </IconButton>
            </div>
        );
    }
}

export default TodoComponent;