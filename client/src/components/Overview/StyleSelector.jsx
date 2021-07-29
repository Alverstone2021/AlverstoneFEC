import React from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import DropDownMenus from './DropDownMenus.jsx';

const StyleSelector = (props) => {
  // {console.log('style props', props)}

  return (
    <div >
      <h4>STYLE > <b>{props.currentStyle.name}</b></h4>
      <StyleThumbnails productStyles={props.productStyles}/>
      <DropDownMenus/>
      <button>ADD TO BAG</button>
      <button>❤️</button>
    </div>
  )
}

export default StyleSelector;