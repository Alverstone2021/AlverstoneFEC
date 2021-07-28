import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';


const ImageView = (props) => {
  return (
    <div className="image-view-container">
      <ImageCarousel className="carousel" productStyles={props.productStyles}/>
      <div className="">
        <img src={props.productImage} className=""/>
      </div>
    </div>
  )
}

export default ImageView;