import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login-out/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import SignUpPlayer from "./components/SignUp/SignUpPlayer";
import Logout from "./components/Login-out/Logout";
import CreateOrganisation from "./components/CreateOrganisation/CreateOrganisation";
import ProfilePage from "./components/Profile/ProfilePage";
import "./App.css";
import CreateCompetition from "./components/CreateCompetition/CreateCompetition";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/player-signup" exact component={SignUpPlayer} />
        <Route
          path="/create-organisation"
          exact
          component={CreateOrganisation}
        />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="/create-competition" exact component={CreateCompetition} />
      </Switch>
    </div>
  );
}

export default App;
