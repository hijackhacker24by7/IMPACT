import './index.css';
import Home from './components/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import OrgSignup from './components/OrgSignup';
import Profile from './components/Profile'
import Header from './components/Header';

// import Test3 from './components/test3';
import Dashboard from './screens/Dashboard';
import Eventsinfo from './events/Event';
import CreateEvent from './events/CreateEvent';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import SecureLS from "secure-ls";
import { useEffect, useState } from 'react';
import Global_chat_box from './screens/Global_chat_box';

const ls = new SecureLS({ encodingType: "aes" });
function App() {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const id = ls.get("user_id"); // Retrieve user_id
    setUserId(id);
  }, []);

console.log(userId)
  return (
    <div>     
    <Router>
      <Header />
      <Switch>        
        <Route exact path="/" element={userId? <Global_chat_box/>:<Home />} />
        <Route exact path="/Org" element={<OrgSignup />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/Signin" element={<Login />} />
        <Route exact path="/Profile/*" element={<Profile />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        {/* <Route exact path="/test" element={<Test />} />
        <Route exact path="/test2" element={<Test2 />} />
        <Route exact path="/test3" element={<Test3 />} /> */}
        <Route exact path="/Profile/Eventd_details" element={<Eventsinfo/>} />
        <Route exact path="/Profile/CreateEvent" element={<CreateEvent/>} />
      </Switch>
    </Router>
    </div>
  );
}




export default App;
