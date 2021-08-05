import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';


const ImageCarousel = (props) => {
  console.log('car props', props.selectedIndex)
  {if (props.productImageCarousel.length !== 0) {
    return (
      <div className="carousel-container">
        <IconContext.Provider value={{ style: {fontSize: "20px",  top: "0%", position: "absolute"}}}>
          <div className="up-arrow" onClick={() => {moveCarousel(props.startIndex, props.endIndex, props.selectedIndex);
          props.setStartIndex(props.startIndex - 1); props.setEndIndex(props.endIndex - 1); props.setSelectedIndex(1)}}>
            <AiOutlineArrowUp/>
          </div>
        </IconContext.Provider >
        {props.productImageCarousel.map((img, i) => {
          let total = props.productImageCarousel.length;
          if (i <= props.endIndex) {
            //underline(props.selectedIndex, total);
            return (
              <div className="indv-thumbnail-div">
                <img className="indv-thumbnail" id={'thumb' + i} src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); underline(e, total)}}></img>
              </div>
            )
          }
        })
        }
        <IconContext.Provider value={{ style: {fontSize: "20px",  bottom: "0%", position: "absolute"}}}>
          <div className="down-arrow" onClick={() => {moveCarousel(props.startIndex, props.endIndex, props.selectedIndex);
          props.setStartIndex(props.startIndex + 1); props.setEndIndex(props.endIndex + 1); props.setSelectedIndex(1)}}>
            <AiOutlineArrowDown/>
          </div>
        </IconContext.Provider >
      </div>
    )
  } else {
    return null;
  }}
}
// CREATE INDEX HOOK

// CREATE START AND END INDEX HOOKS THAT DEFAULT AT 0 AND 7
// increment by one every down arrow click
// decrement by one every up arrow click

function underline(selectedIndex, total) {
  // e.preventDefault();
  // can i pass in the index instead?

  // find the index of the currentStyle and underline that thumbnail
  // if theres no current style underline the 0 index only

  for (let i = 0; i < total; i++) {
    let thumbnail = document.getElementById('thumb' + i);
    thumbnail.style['border'] = "none"
  }
  //find element by current index instead?
  let current = document.getElementById(e.target.id)
  current.style['border-bottom'] = "2px solid black";
}

// DOES THIS NEED TO BE A USE EFFECT IN THE APP FILE?

function moveCarousel(start, end, current) {
  //e.preventDefault();
  console.log('hi', start, end, current)

}


export default ImageCarousel;

