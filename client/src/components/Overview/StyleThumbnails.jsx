import React from 'react';

import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const StyleThumbnails = (props) => {

  return (
    <div className="style-thumb-cont">
      {props.productStyles.map((style, index) => {
        // IF THE CURRENT INDEX IS 0, ADD ICON WITH DISPLAY BLOCK
        // ELSE
        let styleStuff = { order: index }
        return (
          <div className="indv-thumb-container" onClick={(e) => {props.setCurrentStyle(style); props.setProductImageCarousel(style.photos); props.setProductImage(style.photos[0].url); placeCheck(style, props.productStyles)}}>
            <IconContext.Provider value={{ style: {fontSize: "15px", position: "absolute", "z-index": "9"}}}>
              <div className="check-circle" id={'check' + style.style_id}>
                <AiOutlineCheckCircle/>
              </div>
            </IconContext.Provider >
            <img className="style-thumbnails" id={style.style_id} style={styleStuff} src={style.photos[0].thumbnail_url}></img>
          </div>
        )
      })}
    </div>
  )
}

function placeCheck(currentStyle, allStyles) {
  let current = document.getElementById('check' + currentStyle.style_id);
  console.log('WHERE AM I WTF?!?!?!?')

  allStyles.map((style) => {
    let div = document.getElementById('check' + style.style_id);
    if (currentStyle.style_id === style.style_id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  })
}

export default StyleThumbnails;

/*
FROM CONTEXT PROVIDER STYLE
position: "absolute", "z-index": "9"
*/