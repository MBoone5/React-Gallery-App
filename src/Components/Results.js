// dependecies
import React from 'react';
import PropTypes from 'prop-types';

// components
import NotFound from './NotFound';
import Image from './Image';
import Loader from './Loader';

// stateless wrapper component for image results
const Results = ({data, loading}) => {
  // counter for key props
  let counter = 0;

  // mapping the array of image components from the request data
  const imageArray = data.map(image => 
    <Image 
      url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      key={counter += 1}
    />
  );

  // function to handle what will be displayed
  const handleDisplay = () => {
    // if there are imagez to display
    if (imageArray.length > 0) {
      return (
        <>
          {imageArray}
        </>
      );
    // if the data is still being requested
    } else if (loading === true) {
      return (
        // loading animation
        <Loader />
      );
    }else {
      // if there were no results for the image request
      return (
        <NotFound />
      );
    }
  };
  // rendering the final content
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {handleDisplay()}
      </ul>
    </div>
  );
};

// prop validaiton
Results.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};

export default Results;