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
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0)

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
            setSelected(index)
          } // else if its the last index and it doesnt have a default and hasDefault is false
        })
      })
  }, [props]);

  return (
    <div className="overview-container">
      <header className="logo-header">
        <h2 className="logo-boi" >THE STORE</h2>
        <input type="text" className="search-bar" placeholder="Search.."></input>
      </header>
      <AnnouncementBanner/>
      <div className="product-info-container">
        <ImageView className="image-view-container" currentProduct={props.currentProduct} currentStyle={currentStyle} productStyles={productStyles} productImage={productImage} productImageCarousel={productImageCarousel} setProductImage={setProductImage} setZoomClicked={setZoomClicked} zoomClicked={zoomClicked}/>
        <div className="name-and-style-container">
          <p className="rating">⭐️⭐️⭐️⭐️⭐️ <a href="#reviews">Read all reviews</a></p>
          <h4 className="category">{props.currentProduct.category}</h4>
          <h1 className="product-name">{props.currentProduct.name}</h1>
          <h5 className="price">${props.currentProduct.default_price}</h5>
          <StyleSelector className="style-selector" currentProduct={props.currentProduct} productStyles={productStyles} currentStyle={currentStyle} setCurrentStyle={setCurrentStyle} setProductImageCarousel={setProductImageCarousel} setProductImage={setProductImage} setSizeSelection={setSizeSelection} sizeSelection={sizeSelection} setQuantity={setQuantity} quantity={quantity} setSelected={setSelected} selected={selected}/>
          <div class="sharethis-inline-share-buttons" id="share"></div>
        </div>
      </div>
      <StaticDescription className="static-description" currentProduct={props.currentProduct}/>
      <h2>------END OF OVERVIEW-------</h2>
    </div>
  )
}

export default Overview;

/* 'http://placecorgi.com/260/180'

STAR COMPONENT

<svg class="w-6 h-6" fill={fill} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>

*/
