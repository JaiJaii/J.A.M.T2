import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
}   from 'react-router-dom';
import Blogs from './Blog/BlogPage';
import PropsAct from './ClassProject/ClassProps';
import EventAct from './ReactEvent/Activity01-Event';
import DataAct1 from './DataFlow/Activity1-usestate';
import DataAct2 from './DataFlow/Activity3-dataflow-parent';
 
import logo from './logo.png';
import Blog from "./Blog/BlogPage";
import Contact from "./Contact";
import About from "./About";

 
class App extends Component {
    render(){
        const {username} = this.props;
        return (
            <Router>
                <div>
                    {/*<h1>React Router</h1>
                    <ul>
                        <li>
                            <Link to="/myblog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/myprops">Class Props</Link>
                        </li>
                        <li>
                            <Link to="/myevent">React Event</Link>
                        </li>
                    </ul>*/}
                    <h1>J.A.M.T Blog</h1>
                    <p>Welcome, {username}</p>
<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">

  <div class="container-fluid">
  <ul class="navbar-nav">
    <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
 
         <li class="nav-item">
        <Link to="/blog" class="nav-link">Blog</Link>
        </li>
        <li class="nav-item">
        <Link to="/about" class="nav-link">About</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link">Contact</Link>
        </li>

      </ul>
  </div>
</nav>
            <Routes>
              <Route exact path="/blog" element={<Blog />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
                </div>
            </Router>
        );
    };
};
 
export default App;