import React from 'react';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';


const ImageCarousel = (props) => {

  useEffect(() => {
    // gotta be a different edge case here DEFINITELY its breaking after its loaded lol
    // so what do we need to check for then, to take care of the null edgecase
    console.log('start', props.startIndex);
    console.log('end', props.endIndex)
    //console.log()
    if (document.getElementById('thumb' + props.endIndex)) {
      console.log('hi')
      for (let i = props.startIndex; i < props.endIndex; i++) {
        let thumbnail = document.getElementById('thumb' + i);
        thumbnail.style['border'] = "none";
      }
      let current = document.getElementById('thumb' + props.selectedIndex);
      current.style['border-bottom'] = "2px solid black";
    }
  }, [props.selectedIndex])


  {if (props.productImageCarousel.length !== 0) {
    let total = props.productImageCarousel.length;
    if (total <= 6) {
      console.log('where ur pics at bro')
      return (
        <div className="carousel-container">
          {props.productImageCarousel.map((img, i) => {
          return (
            <div className="indv-thumbnail-div">
              <img className="indv-thumbnail" id={'thumb' + i} src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); props.setSelectedIndex(i)}}></img>
            </div>
          )
      })}
        </div>
      )
    } else {
      let lessImages = props.productImageCarousel.slice(props.startIndex, props.endIndex);
      console.log('less', lessImages);
      return (
        <div className="carousel-container">
          <IconContext.Provider value={{ style: {fontSize: "20px",  top: "0%", position: "absolute"}}}>
            <div className="up-arrow" id="up-arrow" onClick={() => {moveCarousel(props.startIndex, props.endIndex, props.selectedIndex, total);
            props.setStartIndex(props.startIndex - 1); props.setEndIndex(props.endIndex - 1); props.setSelectedIndex(props.selectedIndex - 1)}}>
              <AiOutlineArrowUp/>
            </div>
          </IconContext.Provider >
          {lessImages.map((img, i) => {
              return (
                <div className="indv-thumbnail-div">
                  <img className="indv-thumbnail" id={'thumb' + i} src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); props.setSelectedIndex(i)}}></img>
                </div>
              )
          })
          }
          <IconContext.Provider value={{ style: {fontSize: "20px",  bottom: "0%", position: "absolute"}}}>
            <div className="down-arrow" id="down-arrow" onClick={() => {moveCarousel(props.startIndex, props.endIndex, props.selectedIndex, total);
            props.setStartIndex(props.startIndex + 1); props.setEndIndex(props.endIndex + 1); props.setSelectedIndex(props.selectedIndex + 1)}}>
              <AiOutlineArrowDown/>
            </div>
          </IconContext.Provider >
        </div>
      )
    }
  } else {
    return null;
  }}
 }

function moveCarousel(start, end, current, total) {
  //e.preventDefault();
  console.log('hi', start, end, current, total)

  // if (end === total) {
  //   let arrow = document.getElementById('down-arrow');
  //   console.log(arrow);
  //   arrow.style.display = "none";
  // } else if (start === 0) {
  //   let arrow = document.getElementById('up-arrow');
  //   console.log(arrow);
  //   arrow.style.display = "none";
  // } else {
  //   let downArrow = document.getElementById('down-arrow');
  //   downArrow.style.display = "block";
  //   let upArrow = document.getElementById('up-arrow');
  //   upArrow.style.display = "block";
  // }

}


export default ImageCarousel;

