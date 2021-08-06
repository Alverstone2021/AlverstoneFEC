import React from 'react';
import { useEffect, useState } from 'react';

import { IconContext } from 'react-icons';
import { AiOutlineCheckCircle } from 'react-icons/ai';


const StyleThumbnails = (props) => {
  const [checkedStyle, setCheckedStyle] = useState({});

  useEffect(() => {
    let current = document.getElementById(checkedStyle.style_id);

    props.productStyles.forEach((style) => {
      let div = document.getElementById('check' + style.style_id);

      if (checkedStyle.style_id === style.style_id) {
        div.style.display = "block";
        div.style.position = "absolute";
      } else {
        div.style.display = "none";
      }
    })
  }, [props])

  return (
    <div className="style-thumb-cont">
      {props.productStyles.map((style, index) => {
        let styleStuff = { order: index }
        return (
          <div className="indv-thumb-container" onClick={(e) => {props.setCurrentStyle(style); props.setProductImageCarousel(style.photos); props.setProductImage(style.photos[0].url); props.setSelected(index); props.setSalePrice(style.sale_price); setCheckedStyle(style)}}>
              <AiOutlineCheckCircle className="inner-check-circle" id={'check' + style.style_id}/>
            <img className="style-thumbnails" id={style.style_id} style={styleStuff} src={style.photos[0].thumbnail_url}></img>
          </div>
        )
      })}
    </div>
  )
}

export default StyleThumbnails;