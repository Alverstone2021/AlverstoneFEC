import React from 'react';
import {useEffect, useState} from 'react';
import RelatedProductsTray from './RelatedProductsTray.jsx';
import OutfitTray from './OutfitTray.jsx';

//represents the section that contains the related products tray and the outfit tray
const RelatedProducts = (props) => {

  return (
    <React.Fragment>
      <RelatedProductsTray relatedProductIds={props.relatedProductIds} currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct}/>
      <OutfitTray currentProduct={props.currentProduct}/>
    </React.Fragment>
  )
}

export default RelatedProducts;
