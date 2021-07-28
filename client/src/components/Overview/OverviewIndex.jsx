import React from 'react';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import ImageView from './ImageView.jsx';
import StaticDescription from './StaticDescription.jsx';
import AnnouncementBanner from './AnnouncementBanner.jsx';
import StyleSelector from './StyleSelector.jsx';

const Overview = (props) => {

  const [productImage, setProductImage] = useState('');
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    apiCalls.getStyles(props.currentProduct.id || '19089')
      .then((styles) => {
        setProductStyles(styles.data.results);
        styles.data.results.forEach((style) => {
          if (style.['default?']) {
            setProductImage(style.photos[0].url || 'http://placecorgi.com/260/180')
            setCurrentStyle(style)
          }
        })
      })
  }, [props])

  return (
    <div className="overview-container">
      <AnnouncementBanner/>
      <div className="product-info-container">
        <ImageView className="image-view-container" currentProduct={props.currentProduct} currentStyle={currentStyle} productStyles={productStyles} productImage={productImage}/>
        <div className="name-and-style-container">
          <h4>{props.currentProduct.category}</h4>
          <h1>{props.currentProduct.name}</h1>
          <h5>${props.currentProduct.default_price}</h5>
          <StyleSelector className="style-selector" currentProduct={props.currentProduct} productStyles={productStyles} currentStyle={currentStyle}/>
        </div>
      </div>
      <StaticDescription className="static-description" currentProduct={props.currentProduct}/>
      <h2>------END OF OVERVIEW-------</h2>
    </div>
  )
}

export default Overview;

/* 'http://placecorgi.com/260/180' */