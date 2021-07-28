import React from 'react';
import {useEffect, useState} from 'react';
import RelatedProductsTray from './RelatedProductsTray.jsx';
import OutfitTray from './OutfitTray.jsx';

//represents the section that contains the related products tray and the outfit tray
const RelatedProducts = (props) => {

  const currentProductChecker = () => {
    var products = [];
    for (var i = 0; i < props.allProducts.length; i++) {
      if (props.allProducts[i].id !== props.currentProduct.id) {
        products.push(props.allProducts[i])
      }
    }
    return products;
  }

  return (
    <div>
      <h2>Start of Related Products</h2>
      <RelatedProductsTray allProducts={currentProductChecker()} currentProduct={props.currentProduct}/>
      <OutfitTray />
      <h2>End of Related Products</h2>
    </div>
  )
}

export default RelatedProducts;
