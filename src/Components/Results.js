import React from 'react';
import NotFound from './NotFound';
import Image from './Image';

const Results = props => {
  const data = props.data;
  let counter = 0;
  const imageArray = data.map(image => 
    <Image 
      url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
      key={counter += 1}
    />
  );

  // console.log(imageArray);
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {
          (imageArray.length > 0)
            ? <>
                {imageArray}
              </>
            : <NotFound />
        }
      </ul>
    </div>
  );
};

export default Results;