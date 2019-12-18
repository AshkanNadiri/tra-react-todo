import React, { Component } from 'react'

export class AddTodo extends Component {
    // Adding state to the seach bar 
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState ({ title: ''})
    }


    onChange =(e) => {this.setState({ [e.target.name]: e.target.value})}

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    style={{ flex:'10' , padding: '5p x'}} 
                    type='text' 
                    name='title' 
                    placeholder='Add Todo ...'
                    // adding the state above to the value of this input
                    value={this.state.title}   
                    onChange = {this.onChange}
                />
                <input 
                    type='submit' 
                    value='Submit' 
                    className='btn' 
                    style={{ flex: '1' }}/>
            </form>
        )
    }
}

export default AddTodo
