import React, { useState } from 'react';
import { resources } from '../resources/ressurser';
import { NavLink } from 'react-router-dom';

export default function Layout(props) {
  const [selectedCategory, setSelectedCategory] = useState('html');
  const resources = props.resources ? props.resources.filter(resource => resource.category === selectedCategory) : [];
  //console.log(resources)
  return (
    <div className="container">
      <header>
        <h1>RESSURSARKIV</h1>
      </header>
      <nav id="menu">
        <ul>
          <li onMouseEnter={() => setSelectedCategory('html')}>
            <NavLink to="/html">HTML</NavLink>
          </li>
          <li onMouseEnter={() => setSelectedCategory('css')}>
            <NavLink to="/css">CSS</NavLink>
          </li>
          <li onMouseEnter={() => setSelectedCategory('javascript')}>
            <NavLink to="/javascript">JavaScript</NavLink>
          </li>
          <li onMouseEnter={() => setSelectedCategory('react')}>
            <NavLink to="/react">React</NavLink>
          </li>
          <li onMouseEnter={() => setSelectedCategory('sanity')}>
            <NavLink to="/sanity">Sanity</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        {props.children}
      </main>
    </div>
  );
}