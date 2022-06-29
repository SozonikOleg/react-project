import React from "react";
import { GlobalStyle } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Signup } from "./pages/signup/Signup";
import { Pricing } from "./pages/pricing/Pricing";
import { Authorization } from "./pages/authorization/Authorization";
import "./App.css";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Authorization} />
        <Route path="/home" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/pricing" exact component={Pricing} />
      </Switch>
    </Router>
  );
}

export default App;
