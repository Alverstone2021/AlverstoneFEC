import React from 'react';

import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const StyleThumbnails = (props) => {
  return (
    <div className="style-thumb-cont">
      {props.productStyles.map((style, index) => {
        let styleStuff = { order: index }

        return (
          <div className="indv-thumb-container" onClick={(e) => {props.setCurrentStyle(style); props.setProductImageCarousel(style.photos); props.setProductImage(style.photos[0].url); props.setSelected(index); placeCheck(style, props.productStyles)}}>
            <img className="style-thumbnails" id={style.style_id} style={styleStuff} src={style.photos[0].thumbnail_url}></img>
            <IconContext.Provider value={{ style: {fontSize: "15px", position: "absolute", top: "5px"}}}>
              {/* <div className="check-circle" style={props.selected === index ? {display: "block"} : {display: "none"}}> */}
                <AiOutlineCheckCircle className="inner-check-circle" id={'check' + style.style_id}/>
              {/* </div> */}
            </IconContext.Provider >
          </div>
        )
      })}
    </div>
  )
}

function placeCheck(currentStyle, allStyles) {
  let current = document.getElementById(currentStyle.style_id);
  console.log('hi', current)

  allStyles.map((style) => {
    let div = document.getElementById('check' + style.style_id);
    console.log('div', div);
    console.log(currentStyle.style_id);
    console.log(style.style_id)
    if (currentStyle.style_id === style.style_id) {
      div.style.display = "block";
    } else {
      console.log('hey wtf b4', div)
      div.style.display = "none";
      console.log('hey wtf afth', div)
    }
  })
}

export default StyleThumbnails;