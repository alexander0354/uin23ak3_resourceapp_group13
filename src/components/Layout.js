import React from 'react';

export default function Layout(props) {
  return (
    <div className="container">
      <header>
        <h1>RESSURSARKIV</h1>
      </header>
      <nav id="menu">
        <ul>
          <li><a href="/html">HTML</a></li>
          <li><a href="/css">CSS</a></li>
          <li><a href="/javascript">JavaScript</a></li>
          <li><a href="/react">React</a></li>
          <li><a href="/sanity">Sanity</a></li>
        </ul>
      </nav>
      <main>
        <h2>{props.categoryName}</h2>
        {props.resources && props.resources.map((resource) => (
          <div key={resource.url}>
            <h3>{resource.title}</h3>
            <p>{resource.url}</p>
          </div>
        ))}
      </main>
    </div>
  );
}