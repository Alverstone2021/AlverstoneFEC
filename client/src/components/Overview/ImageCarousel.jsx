import React from 'react';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';


const ImageCarousel = (props) => {

  useEffect(() => {
    // console.log('start', props.startIndex);
    // console.log('end', props.endIndex);
    // console.log('endtag', document.getElementById('thumb' + (props.endIndex - 1)));
    if (document.getElementById('thumb' + (props.endIndex - 1))) {
      for (let i = 0; i < props.endIndex - 1; i++) {
        let thumbnail = document.getElementById('thumb' + i);
        //console.log('thumbb loop', thumbnail);
        thumbnail.style['border'] = "none";
      }
      let current = document.getElementById('thumb' + props.selectedIndex);
      if (current) {current.style['border-bottom'] = "1px solid black";}
    }
  }, [props.selectedIndex])


  {if (props.productImageCarousel.length > 4) {
    let total = props.productImageCarousel.length;
    if (total <= 6) {
      return (
        <div className="carousel-container">
          {props.productImageCarousel.map((img, i) => {
          return (
            <div className="indv-thumbnail-div">
              <img className="indv-thumbnail" id={'thumb' + i} src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); props.setSelectedIndex(i)}}></img>
            </div>
          )})}
        </div>
      )
    } else {
      let lessImages = props.productImageCarousel.slice(props.startIndex, props.endIndex);
      //MAKRE SURE LESS IMAGES IS ALWAYS 6 IN LENGTH
      return (
        <div className="carousel-container">
          {props.startIndex === 0 ? <div style={{width: "20px", height: "20px"}}></div> : <IconContext.Provider value={{ style: {fontSize: "20px", left: "45%", position: "absolute"}}}>
            <div className="up-arrow" id="up-arrow" onClick={() => {moveCarousel(props.startIndex, props.endIndex, props.selectedIndex, total);
            props.setStartIndex(props.startIndex - 1); props.setEndIndex(props.endIndex - 1); props.setSelectedIndex(props.selectedIndex - 1)}}>
              <AiOutlineArrowUp/>
            </div>
          </IconContext.Provider >}

          {lessImages.map((img, i) => {
              return (
                <div className="indv-thumbnail-div">
                  <img className="indv-thumbnail" id={'thumb' + i} src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); props.setSelectedIndex(i)}}></img>
                </div>
              )
          })}
          {props.productImageCarousel[props.endIndex] === undefined ? <div style={{width: "20px", height: "20px"}}></div> : <IconContext.Provider value={{ style: {fontSize: "20px", left: "45%", position: "absolute"}}}>
            <div className="down-arrow" id="down-arrow" onClick={() => {moveCarousel(props.startIndex, props.endIndex, props.selectedIndex, total);
            props.setStartIndex(props.startIndex + 1); props.setEndIndex(props.endIndex + 1); props.setSelectedIndex(props.selectedIndex + 1)}}>
              <AiOutlineArrowDown/>
            </div>
          </IconContext.Provider >}
        </div>
      )
    }
  } else {
    return null;
  }}
 }

function moveCarousel(start, end, current, total) {
  //e.preventDefault();
  //console.log('hi', start, end, current, total)

}


export default ImageCarousel;

