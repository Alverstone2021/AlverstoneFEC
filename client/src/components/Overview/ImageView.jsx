import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';


const ImageView = (props) => {
  return (
    <div className="image-view-container">
      <ImageCarousel className="carousel" productImageCarousel={props.productImageCarousel} currentStyle={props.currentStyle} setProductImage={props.setProductImage}/>
      <div className="main-image-div" id="main-image-div" onMouseMove={(e) => {mouseMove(e)}} onMouseLeave={(e) => {mouseLeave(e)}} onClick={(e) => {extendedView(e)}}>
        {/* <img src={} id="left" onClick={}></img> */}
        <img src={props.productImage} className="main-image" id="main-image"/>
        {/* <img src={} id="right" onClick={}></img> */}
      </div>
    </div>
  )

  // SCROLLING ZOOM
  function mouseMove(e) {
    if (props.zoomClicked) {
      let img = document.getElementById('main-image');
      let imgDiv = document.getElementById('main-image-div');

      let clientX = e.clientX - imgDiv.offsetLeft;
      let clientY = e.clientY - imgDiv.offsetTop;

      let mWidth = imgDiv.offsetWidth;
      let mHeight = imgDiv.offsetHeight;

      clientX = clientX / mWidth * 100;
      clientY = clientY / mHeight * 100;

      img.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2.5)`;
      //img.style.cursor = 'crosshair';
    }
  }

  function mouseLeave(e) {
    if (props.zoomClicked) {
      let img = document.getElementById('main-image');
      img.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  }

  // IMAGE ENLARGER
  function extendedView(e) {
    e.preventDefault();
    e.persist();
    if (props.zoomClicked) {
      props.setZoomClicked(false);
      let div = document.getElementsByClassName("name-and-style-container");
      div[0].style.display = "flex"
      //div[0].style.cursor = "zoom-in"
    } else {
      props.setZoomClicked(true);
      let div = document.getElementsByClassName("name-and-style-container");
      div[0].style.display = "none"
      //div[0].style.cursor = "crosshair"
    }

  }
}

export default ImageView;