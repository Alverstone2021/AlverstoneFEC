import React from 'react';

const StyleThumbnails = (props) => {
  // ADD ON CLICK FUNCTION TO THUMBNAILS
  // ALSO TINY CHECKMARK
  return (
    <div>
      {props.productStyles.map((style) => {
        return (
          <img className="style-thumbnails" src={style.photos[0].thumbnail_url}></img>
        )
      })}
    </div>
  )
}

export default StyleThumbnails;