import React from 'react';
import Layout from './Layout';
import resourcesData from '../resources/ressurser';
import { Route, Link, useParams } from 'react-router-dom';

export default function Resources({ category }) {
  const resources = resourcesData.filter(
    (resource) => resource.category === category
  );

  return (
    <Layout categoryName={category}>
      {resources.map((resource) => (
        <div key={resource.url}>
          <h3>{resource.title}</h3>
          <p>
            <Link key={resource.url} to={resource.url} target="_blank">
              {resource.url}
            </Link>
          </p>
        </div>
      ))}
    </Layout>
  );
}
