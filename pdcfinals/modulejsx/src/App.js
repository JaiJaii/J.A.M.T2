
import Login from './Login';
import Main from './main';
import { useState } from 'react';
import './App.css';
import {Navbar, Container, Nav, NavDropdown, Cards, Form, Button, FormControl, Row, Col, Image} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (loggedInUsername) => {
    setLoggedIn(true);
    setUsername(loggedInUsername);


  }
    return(
      <div>
        {isLoggedIn? (
          <Main username = {username}/>
        ) : (
          <Login onLogin={handleLogin}/>
        )}
      </div>
    )
}
export default App;
