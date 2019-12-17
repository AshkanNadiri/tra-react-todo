import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        
        }
    }


    render() {
        return (
            <div style={ this.getStyle() }>
                <input type="checkbox"/> 
                 <p> {this.props.todo.title}</p>
            </div>
        )
    }
}

//propTypes
TodoItem.proptype = {
    todo: PropTypes.object.isRequired
}


export default TodoItem;