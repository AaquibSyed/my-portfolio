import "./App.css";
import { Sidebar, Projects, Skills } from "./Components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__circle1"></div>
      <div className="app__circle2"></div>
      <div className="app__circle3"></div>
      <div className="app_content">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/skills" exact>
              <Skills />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
