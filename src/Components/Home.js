import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props);

    }

    loginClicked(){

    }
    render() {
        return (
            <div>
                <p> Welcome to the Homo</p>
                {/* <button onClick {}> Log In</button> */}
                <button href="/login">Login</button>
            </div>
        )


    }
}

export default Home;