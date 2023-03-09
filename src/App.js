import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Component from './components/Component';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/html" element={<Component category="html" />} />
          <Route path="/css" element={<Component category="css" />} />
          <Route path="/javascript" element={<Component category="javascript" />} />
          <Route path="/react" element={<Component category="react" />} />
          <Route path="/sanity" element={<Component category="headless-cms" />} />
        </Routes>
      </Layout>
  );
}

export default App;