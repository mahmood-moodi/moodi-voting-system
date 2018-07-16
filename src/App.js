import React, { Component } from "react";
import icon from "./icon.png";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// importing screens
import LoginScreen from "./pages/LoginScreen";
import AddCampaign from "./pages/AddCampigns";
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
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginScreen} />
          <Route path="/add-campigns" component={AddCampaign} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
