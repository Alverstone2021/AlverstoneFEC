import React from 'react';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import ImageView from './ImageView.jsx';
import StaticDescription from './StaticDescription.jsx';
import AnnouncementBanner from './AnnouncementBanner.jsx';
import StyleSelector from './StyleSelector.jsx';

const Overview = (props) => {

  const [productImage, setProductImage] = useState('');
  const [productImageCarousel, setProductImageCarousel] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [zoomClicked, setZoomClicked] = useState(false);
  const [sizeSelection, setSizeSelection] = useState('');
  const [available, setAvailable] = useState(1);

  useEffect(() => {
    apiCalls.getStyles(props.currentProduct.id || '19089')
      .then((styles) => {
        setProductStyles(styles.data.results);
        let hasDefault = false; // will this work?
        styles.data.results.map((style, index) => {
          if (style.['default?']) {
            hasDefault = true;
            setProductImage(style.photos[0].url || 'http://placecorgi.com/260/180')
            setCurrentStyle(style)
            setProductImageCarousel(style.photos)
          } // else if its the last index and it doesnt have a default and hasDefault is false
        })
      })
  }, [props]);

  return (
    <div className="overview-container">
      <AnnouncementBanner/>
      <div className="product-info-container">
        <ImageView className="image-view-container" currentProduct={props.currentProduct} currentStyle={currentStyle} productStyles={productStyles} productImage={productImage} productImageCarousel={productImageCarousel} setProductImage={setProductImage} setZoomClicked={setZoomClicked} zoomClicked={zoomClicked}/>
        <div className="name-and-style-container">
          <p className="rating">⭐️⭐️⭐️⭐️⭐️ </p>
          <h4 className="category">{props.currentProduct.category}</h4>
          <h1 className="product-name">{props.currentProduct.name}</h1>
          <h5 className="price">${props.currentProduct.default_price}</h5>
          <StyleSelector className="style-selector" currentProduct={props.currentProduct} productStyles={productStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} setProductImageCarousel={setProductImageCarousel} setProductImage={setProductImage} setSizeSelection={setSizeSelection} sizeSelection={sizeSelection} setAvailable={setAvailable} available={available}/>
        </div>
      </div>
      <StaticDescription className="static-description" currentProduct={props.currentProduct}/>
      <h2>------END OF OVERVIEW-------</h2>
    </div>
  )
}

export default Overview;

/* 'http://placecorgi.com/260/180' */