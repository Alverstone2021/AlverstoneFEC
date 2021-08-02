import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';


const ImageCarousel = (props) => {
  {if (props.productImageCarousel !== []) {
    return (
      <div className="carousel-container">
        <IconContext.Provider value={{ style: {fontSize: "20px",  top: "0%", position: "absolute"}}}>
          <div className="up-arrow" >
            <AiOutlineArrowUp/>
          </div>
      </IconContext.Provider >
        {props.productImageCarousel.map((img, i) => {
          let total = props.productImageCarousel.length;
          return (
            <div className="indv-thumbnail-div">
              <img className="indv-thumbnail" id={'thumb' + i} src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); underline(e, total)}}></img>
            </div>
          )
        })}
        <IconContext.Provider value={{ style: {fontSize: "20px",  bottom: "0%", position: "absolute"}}}>
          <div className="down-arrow" >
            <AiOutlineArrowDown/>
          </div>
      </IconContext.Provider >
      </div>
    )
  } else {
    return null;
  }}
}

function underline(e, total) {
  e.preventDefault();
  // FOR ALL OTHER THUMBNAILS, SET BORDER TO NONE
  for (let i = 0; i < total; i++) {
    let thumbnail = document.getElementById('thumb' + i);
    thumbnail.style['border'] = "none"
  }
  let current = document.getElementById(e.target.id)
  current.style['border-bottom'] = "5px solid black"
}


export default ImageCarousel;
