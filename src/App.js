import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resources from './Resources.js';
import ResourceMenu from './components/ResourceMenu.js';

function App() {
  return (
    <>
      <ResourceMenu />
      <Router>
        <Routes>
          <Route exact path='/html'>
            <Resources category='html' />
          </Route>
          <Route exact path='/css'>
            <Resources category='css' />
          </Route>
          <Route exact path='/javascript'>
            <Resources category='javascript' />
          </Route>
          <Route exact path='/react'>
            <Resources category='react' />
          </Route>
          <Route exact path='/sanity'>
            <Resources category='headless-cms' />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

