import './index.css';

import Login from './screens/Login';
import Signup from './screens/Signup';
import OrgSignup from './components/OrgSignup';
import './App.css';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/Org" element={<OrgSignup />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Switch>
    </Router>
  );
}




export default App;
