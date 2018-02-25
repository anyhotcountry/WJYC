import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import About from './pages/About';
import Contact from './pages/Contact';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer'
import './css/bootstrap.css'

const App = () => (
  <Router>
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              WJYC
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/schedule">
              <NavItem>
                Schedule
            </NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem>
                Contact
      </NavItem>
            </LinkContainer>
            <LinkContainer to="/about">
              <NavItem>
                About
        </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </Router>
);

export default App;