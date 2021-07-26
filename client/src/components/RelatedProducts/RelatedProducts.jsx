import React from 'react';
import {useEffect, useState} from 'react'
import RelatedProductsTray from './RelatedProductsTray.jsx';
import OutfitTray from './OutfitTray.jsx';

const RelatedProducts = (props) => {
  return (
    <div>
      <h2>Start of Related Products</h2>
      <RelatedProductsTray allProducts={props.allProducts}/>
      <OutfitTray />
    </div>
  )
}

export default RelatedProducts;
