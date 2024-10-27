import './index.css';

import Login from './screens/Login';
import Signup from './screens/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={ <Login />}></Route>
        <Route exact path="/Signup" element={ <Signup />} />
      </Switch>
    </Router>
=======




export default App;
