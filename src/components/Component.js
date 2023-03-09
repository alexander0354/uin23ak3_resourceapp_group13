import React from 'react';
import { useParams } from 'react-router-dom';
import Resources from './Resources';

export default function Component({category}) {
  
  return (
    <>
    <h1>{category}</h1>
    <Resources category={category} />
    </>
  );
}