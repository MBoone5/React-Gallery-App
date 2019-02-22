// dependecies
import React from 'react';

// components
import NotFound from './NotFound';
import Image from './Image';
import Loader from './Loader';


const Results = ({data, loading}) => {
  let counter = 0;
  const imageArray = data.map(image => 
    <Image 
      url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      key={counter += 1}
    />
  );

  const handleDisplay = () => {
    if (imageArray.length > 0) {
      return (
        <>
          {imageArray}
        </>
      );
    } else if (loading === true) {
      return (
        <Loader />
      );
    }else {
      return (
        <NotFound />
      );
    }
  };
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {handleDisplay()}
      </ul>
    </div>
  );
};

export default Results;