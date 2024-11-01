import './index.css';
import Home from './components/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import OrgSignup from './components/OrgSignup';
import Profile from './components/Profile'

import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

import Dashboard from './screens/Dashboard';
function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Org" element={<OrgSignup />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Login />} />
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
      </Switch>
    </Router>
  );
}




export default App;
