import React, {Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
//import {Route, Redirect} from 'react-router';
import Home from './Components/Home'
import Register from './Components/Register'
import Login from './Components/Login'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
  
  }

  submitClicked() {
    const username = document.getElementById('usernameInput').value;
    console.log('username:', username);
    const password = document.getElementById('passwordInput').value;
    console.log('password:', password);

    if(true){
      //Do some logic to connect to backend and then check username and PASS against database
      this.setState({isLoggedIn:true});
    }

  }
  submitRegister(){
  }

  render() {
    return(
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    )
    
    }


    //return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome! username</h1>
      //   </header>
      //   <p className="App-intro">

      //     <Switch>
      //       <Route path='/register'/>
      //     </Switch>
      //     <p> Please Log in.</p>
      //     <form>
      //       <label>Username:
      //       <input id='usernameInput' type="text" name="name" />
      //       </label>
      //     </form>
      //     <form>
      //       <label>
      //         Password:<input id='passwordInput' type="password" name="password"
      //         />
      //       </label>
      //     </form>
      //     <button onClick={this.submitClicked.bind(this)}>Login</button>
      //     <button>
      //       Not signed up? Register now!
      //     </button>
      //   </p>
      // </div>
    //);
  }


export default App;
