import React from 'react';


const StyleThumbnails = (props) => {
  // ADD ON CLICK FUNCTION TO THUMBNAILS
  // ALSO TINY CHECKMARK
  // {console.log(props)}

  return (
    <div>
      {props.productStyles.map((style) => {
        return (
          <img className="style-thumbnails" src={style.photos[0].thumbnail_url} onClick={() => {props.setCurrentStyle(style); props.setProductImageCarousel(style.photos); props.setProductImage(style.photos[0].url)}}></img>
        )
      })}
    </div>
  )

}

export default StyleThumbnails;