import { Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default App;
