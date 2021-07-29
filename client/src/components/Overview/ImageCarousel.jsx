import React from 'react';

// const style = {
//   maxWidth: '80px',
//   height: '300px',
// }

const ImageCarousel = (props) => {
  {if (props.currentStyle.photos) {
    // {console.log('FOR THUMBIES', props.currentStyle.photos)}
    return (
      <div className="carousel-container">
        {props.currentStyle.photos.map((img) => {
          return (
            <div>
              <img className="indv-thumbnail" src={img.thumbnail_url}></img>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null;
  }}
}

export default ImageCarousel;