import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';


const ImageView = (props) => {
  return (
    <div className="image-view-container">
      <ImageCarousel className="carousel" productImageCarousel={props.productImageCarousel} currentStyle={props.currentStyle}/>
      <div className="main-image-div">
        <img src={props.productImage} className="main-image"/>
      </div>
    </div>
  )
}

export default ImageView;