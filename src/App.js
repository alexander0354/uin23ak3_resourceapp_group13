<<<<<<< HEAD
import logo from './logo.svg';
import './sass/App.scss';
import './App.css';
=======
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Routes from './components/Resources';
>>>>>>> f84d77d1af29e3e4b117ef945667fbc1e9db38d4

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Routes} />
        <Route path="/html" render={() => <Routes category="html" />} />
        <Route path="/css" render={() => <Routes category="css" />} />
        <Route
          path="/javascript"
          render={() => <Routes category="javascript" />}
        />
        <Route path="/react" render={() => <Routes category="react" />} />
        <Route path="/sanity" render={() => <Routes category="headless-cms" />} />
      </Layout>
    </Router>
  );
}

export default App;