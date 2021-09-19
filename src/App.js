import React from "react";
import "./sass/style.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Home from "./components/Home";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink exact to="/" className="nav-link">
                  Home
                </NavLink>
                <NavLink to="/news" className="nav-link">
                  News
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
