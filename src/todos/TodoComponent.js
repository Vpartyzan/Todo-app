import React, {Component} from 'react';

import Checkbox from '@material-ui/core/Checkbox';

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
            <div>
                <Checkbox checked={this.props.status}
                          onChange={this.onChangeCheckbox}
                />
                {this.props.title}
            </div>
        );
    }
}

export default TodoComponent;