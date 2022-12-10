import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }

    }
    render(){
        return(
            <div> 
                <h1>Login </h1>
                <form>
                    <label name="email" > 
                <input type="email" placeholder="Email" />
                </label>
                </form>
            </div>
        )
    }
}