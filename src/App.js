import './App.css';
import { Page1 } from './Components/Page1';
import { Page2 } from './Components/Page2';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Abhay Sachan's Task</h1>

        <Switch>
          <Route exact path="/" component={Page1} />

          <Route exact path="/Page2" component={Page2} /> 
        </Switch>

      </Router>

    </div>
  );
}

export default App;
