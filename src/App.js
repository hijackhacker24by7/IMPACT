import './index.css';
import Home from './components/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import OrgSignup from './components/OrgSignup';
import Profile from './components/Profile'
import Header from './components/Header';
import Test from './components/test';
import Test2 from './components/test2';
import Dashboard from './screens/Dashboard';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <div>     
    <Router>
      <Header />
      <Switch>        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Org" element={<OrgSignup />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Login />} />
        <Route exact path="/Profile/*" element={<Profile />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/test2" element={<Test2 />} />
      </Switch>
    </Router>
    </div>
  );
}




export default App;
