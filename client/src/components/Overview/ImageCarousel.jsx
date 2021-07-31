import React from 'react';

// const style = {
//   maxWidth: '80px',
//   height: '300px',
// }

const ImageCarousel = (props) => {
  {if (props.productImageCarousel !== []) {
    return (
      <div className="carousel-container">
        {props.productImageCarousel.map((img, i) => {
          let total = props.productImageCarousel.length;
          return (
            <div>
              <img className="indv-thumbnail" id={'thumb' + i} tabindex="1"src={img.thumbnail_url} onClick={(e) => {props.setProductImage(img.url); underline(e, total)}}></img>
            </div>
          )
        })}
      </div>
    )
  } else {
    return null;
  }}
}

function underline(e, total) {
  e.preventDefault();
  // FOR ALL OTHER THUMBNAILS, SET BORDER TO NONE
  for (let i = 0; i < total; i++) {
    let thumbnail = document.getElementById('thumb' + i);
    thumbnail.style['border'] = "none"
  }
  console.log('targ', e.target.id)
  let current = document.getElementById(e.target.id)
  console.log('currr', current)
  current.style['border-bottom'] = "5px solid black"
}


export default ImageCarousel;
