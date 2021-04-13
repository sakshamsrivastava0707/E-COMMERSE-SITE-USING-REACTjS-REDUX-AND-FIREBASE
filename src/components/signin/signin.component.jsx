import React, { Component } from 'react';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            password: ''
        }

    }

    render() {
        return (
            <div>
                <form>
                    <label ></label>
                    <input type="text" name="" onChange= {()=> this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default SignIn;
