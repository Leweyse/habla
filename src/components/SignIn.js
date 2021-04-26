import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: ''
        }

        this.changeUserName = this.changeUserName.bind(this)
        this.changePassword = this.changePassword.bind(this)

        this.onSubmit = this.onSubmit.bind(this)
    }

    changeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const loged = {
            userName: this.state.userName,
            password: this.state.password
        }

        axios.post('http://localhost:5000/api/signIn', loged)
          .then(res => console.log(res.data))

        this.setState({
            userName: '',
            password: ''
        })
    }

    render() {
        return (
            <div className='signIn__body'>
                <form className='signIn_form' onSubmit={this.onSubmit}>
                    <input
                        className='signIn_input--userName'
                        type='text'
                        placeholder='User Name'
                        onChange={this.changeUserName}
                        value={this.state.userName}
                    />
                    <input
                        className='signIn_input--password'
                        type='password'
                        placeholder='Password'
                        onChange={this.changePassword}
                        value={this.state.password}
                    />
                    <input
                        className='signIn_input--submitBtn'
                        type='submit'
                        value='Submit'
                    />
                </form>
            </div>
        );
    }
}

export default SignIn
