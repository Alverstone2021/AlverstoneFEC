import React from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import DropDownMenus from './DropDownMenus.jsx';
import apiCalls from '../../../../helpers/shoppingApi.js';

const StyleSelector = (props) => {
  console.log('pops', props)

  return (
    <div >
      <h4>STYLE > <b>{props.currentStyle.name}</b></h4>
      <StyleThumbnails productStyles={props.productStyles} setCurrentStyle={props.setCurrentStyle} setProductImageCarousel={props.setProductImageCarousel} setProductImage={props.setProductImage}/>
      <DropDownMenus currentStyle={props.currentStyle} setSizeSelection={props.setSizeSelection} sizeSelection={props.sizeSelection} setQuantity={props.setQuantity} quantity={props.quantity}/>
      <button className="cart-button" onClick={(e) => {apiCalls.addToCart(props.currentStyle.skus, props.sizeSelection)}}>ADD TO BAG</button>
      <button className="favorite-button">❤️</button>
    </div>
  )
}

export default StyleSelector;