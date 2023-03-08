
import React from 'react';
import resources from '../ressurser';

function ResourceMenu() {

  let menu = resources.map(resource => {
    let sources = resource.sources.map(source => (
      <li><a href={source.url}>{source.title}</a></li>
    ));

    return (
      <section className="menuCategory">
        <button onClick={menu}>{resource.category}</button>
        <div className="open">
          <p className="text">{resource.text}</p>
          <ul className="menuContent">{sources}</ul>
        </div>
      </section>
    ); 

  });

  return (
    <nav id="menu">
      {menu}
    </nav>
  );

 }
export default ResourceMenu