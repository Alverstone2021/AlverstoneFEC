import React from 'react';

const style = {
  maxWidth: '80px',
  height: '300px',
}

const ImageCarousel = (props) => {
  return (
    <div>
      {/*FOR EACH THUMBNAIL, ADD A TINY PHOTO (and make the background some seethru gray or whatever)*/}
      <img style={style} src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
    </div>
  )
}

export default ImageCarousel;