import React, { Component } from "react";
import icon from "./icon.png";

// importing screens
import LoginScreen from "./pages/LoginScreen";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      // <div className="form-inLine">
      // <h2> Sign Up </h2>
      // <div className="form-group" >
      // <input
      //   className = "form-control"
      //   type = "text"
      //   placeholder = "ID"
      //   onChange={event=>this.setState({email: event.target.value})}
      //   />
      // <button
      //   className="btn btn-primary"
      //   type = "button"
      //   onClick={()=>this.signUp}
      // >
      //   Sign Up
      // </button>
      // </div>
      // </div>
      
      <LoginScreen />
    );
  }
}

export default App;
