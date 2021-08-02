import React from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import DropDownMenus from './DropDownMenus.jsx';

const StyleSelector = (props) => {

  return (
    <div >
      <h4>STYLE > <b>{props.currentStyle.name}</b></h4>
      <StyleThumbnails productStyles={props.productStyles} setCurrentStyle={props.setCurrentStyle} setProductImageCarousel={props.setProductImageCarousel} setProductImage={props.setProductImage}/>
      <DropDownMenus currentStyle={props.currentStyle} setSizeSelection={props.setSizeSelection} sizeSelection={props.sizeSelection} setQuantity={props.setQuantity} quantity={props.quantity}/>
      <button className="cart-button">ADD TO BAG</button>
      <button className="favorite-button">❤️</button>
    </div>
  )
}

export default StyleSelector;