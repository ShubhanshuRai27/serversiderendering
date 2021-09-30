import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/Home.jsx";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={(props) => <Home {...props}></Home>} />
      </Switch>
    );
  }
}

export default App;
