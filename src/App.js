import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Route exact path="/" component={ Home } />
          <Route exact path="/services" component={ Services} />
          <Route exact path="/projets" component={ Projects } />
          <Route exact path="/contact" component={ Contact } />
        </Router>
    </React.Fragment>
  );
}

export default App;
