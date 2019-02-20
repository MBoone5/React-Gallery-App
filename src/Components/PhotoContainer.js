import React from 'react';
import Results from './Results';

const PhotoContainer = props => {
  const results = props.data;

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Results results={results}/>
      </ul>
    </div>
  );
};

export default PhotoContainer;