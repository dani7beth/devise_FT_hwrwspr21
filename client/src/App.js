import { Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import NavBar from "./Components/NavBar";
import NoMatch from "./Components/NoMatch";
import RegisterForm from "./Components/RegisterForm";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
