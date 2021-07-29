import React from 'react';
import {useEffect, useState} from 'react';
import RelatedProductsTray from './RelatedProductsTray.jsx';
import OutfitTray from './OutfitTray.jsx';

//represents the section that contains the related products tray and the outfit tray
const RelatedProducts = (props) => {

  return (
    <div>
      <h2>Start of Related Products</h2>
      <RelatedProductsTray relatedProductIds={props.relatedProductIds} currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct}/>
      <OutfitTray currentProduct={props.currentProduct}/>
      <h2>End of Related Products</h2>
    </div>
  )
}

export default RelatedProducts;
