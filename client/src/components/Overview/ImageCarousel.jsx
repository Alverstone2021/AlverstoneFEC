import React from 'react';

// const style = {
//   maxWidth: '80px',
//   height: '300px',
// }

const ImageCarousel = (props) => {
  {if (props.productImageCarousel !== []) {
    return (
      <div className="carousel-container">
        {props.productImageCarousel.map((img) => {
          return (
            <div>
              <img className="indv-thumbnail" src={img.thumbnail_url} onClick={() => {props.setProductImage(img.url)}}></img>
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