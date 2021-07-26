import React from 'react';
import {useEffect, useState} from 'react'
import RelatedProductsTray from './RelatedProductsTray.jsx';
import OutfitTray from './OutfitTray.jsx';

const RelatedProducts = (props) => {
  return (
    <div>
      <RelatedProductsTray />
      <OutfitTray />
    </div>
  )
}

export default RelatedProducts;
