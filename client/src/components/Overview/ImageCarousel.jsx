import React from 'react';

// const style = {
//   maxWidth: '80px',
//   height: '300px',
// }

const ImageCarousel = (props) => {
  return (
    <div>
      {props.productStyles.map((style) => {
        return (
          <div></div>
        )
      })}
    </div>
  )
}

export default ImageCarousel;