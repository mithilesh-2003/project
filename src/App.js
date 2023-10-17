import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './Login';
import React from 'react';
import Home from './Home';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import Shedule from './Shedule';
import Team from './Team';
import Service from './Service';
import About from './About'
import Faq from './Faq';
import Logon from './Logon';
import WebPage from './WebPage';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
    <WebPage/>
    <div className="App">
    <Routes>
      <Route path="/Login"element={<Login/>}/>
      
      <Route path="/Signup"element={<Signup/>}/>
      <Route path="/ForgetPassword"element={<ForgetPassword/>}/>
      <Route path='/ContactUs'element={<ContactUs/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='Shedule' element={<Shedule/>}/>
      <Route path='/Team' element={<Team/>}/>
      <Route path="/Home"element={<Home/>}/>
      <Route path="/Service"element={<Service/>}/>
      <Route path="/About"element={<About/>}/>
      <Route path="/Faq"element={<Faq/>}/>
      <Route path='/'element={<Logon/>}/>
      <Route path='/LoginForm'element={<LoginForm/>}/>
      {/* <Route path='/WebPage' element={<WebPage/>}/> */}

    </Routes>
    </div>
    </Router>
  );
}

export default App;
