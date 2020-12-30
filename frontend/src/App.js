import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/main/Home.js'
import VisitPreview from "./components/visitPreview/VisitPreview";
import Visit from './components/visit/Visit'
import Nav from "./components/main/Nav"
import Contact from "./components/contact/Contact";
import VisitAdded from './components/visit/VisitAdded'

export default function App() {
  return (
    <Router>
        <Nav />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/visitPreview">
                <VisitPreview />
            </Route>
            <Route path="/visit">
                <Visit />
            </Route>
            <Route path="/visitAdded">
                <VisitAdded />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>

    </Router>
  );
}
