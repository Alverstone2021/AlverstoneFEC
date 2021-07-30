import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';


const ImageView = (props) => {
  return (
    <div className="image-view-container">
      <ImageCarousel className="carousel" productImageCarousel={props.productImageCarousel} currentStyle={props.currentStyle} setProductImage={props.setProductImage}/>
      <div className="main-image-div" onClick={(e) => {extendedView(e)}}>
        <img src={props.productImage} className="main-image"/>
      </div>
    </div>
  )
  // IMAGE ENLARGER
  function extendedView(e) {
    e.preventDefault();
    e.persist();
    if (props.zoomClicked) {
      props.setZoomClicked(false);
      let div = document.getElementsByClassName("name-and-style-container");
      div[0].style.display = "flex"
    } else {
      props.setZoomClicked(true);
      let div = document.getElementsByClassName("name-and-style-container");
      div[0].style.display = "none"
    }

  }
}

export default ImageView;