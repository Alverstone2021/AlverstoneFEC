import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';

const ImageView = (props) => {
  return (
    <div className="image-view-container">
      {/* <ImageCarousel className="carousel"/> */}
      <img src="http://placecorgi.com/260/180" />
    </div>
  )
}

export default ImageView;