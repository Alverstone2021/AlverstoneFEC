import React from 'react';
import ImageCarousel from './ImageCarousel.jsx';
import { IconContext } from 'react-icons';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';


const ImageView = (props) => {
  return (
    <div className="image-view-container">
      <IconContext.Provider value={{ style: {fontSize: "30px",  bottom: "50%", position: "absolute"}}}>
        <div className="left-arrow" id="left-arrow" onClick={(e) => {previousPhoto(e)}}>
          <AiOutlineArrowLeft/>
        </div>
      </IconContext.Provider >
        <ImageCarousel className="carousel" productImageCarousel={props.productImageCarousel} currentStyle={props.currentStyle} setProductImage={props.  setProductImage}/>
      <div className="main-image-div" id="main-image-div" onMouseMove={(e) => {mouseMove(e)}} onMouseLeave={(e) => {mouseLeave(e)}} onClick={(e) => {extendedView(e)}}>
        <img src={props.productImage} className="main-image" id="main-image"/>
      </div>
      <div className="right-arrow">
        <IconContext.Provider value={{ style: {fontSize: "30px", bottom: "50%", position: "absolute"}}}>
          <div onClick={(e) => {nextPhoto(e)}}>
            <AiOutlineArrowRight className="right-arrow" id="right-arrow"/>
          </div>
      </IconContext.Provider>
      </div>
    </div>
  )

  // ON ARROW CLICK
  function nextPhoto(e) {
    let end = (props.currentStyle.photos.length - 1);
    props.currentStyle.photos.map((photo, index) => {
      if (props.productImage === photo.url) {
        props.setProductImage(props.currentStyle.photos[index+1].url)
        if (index === end) {
          let arrow = document.getElementById('right-arrow');
          arrow.style.display = "none";
        }
      }
    })
  }

  function previousPhoto(e) {
    props.currentStyle.photos.map((photo, index) => {
      if (props.productImage === photo.url) {
        props.setProductImage(props.currentStyle.photos[index-1].url)
      }
    })
  }

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
      mouseLeave(e)
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