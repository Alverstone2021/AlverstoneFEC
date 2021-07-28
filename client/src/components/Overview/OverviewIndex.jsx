import React from 'react';
import ImageView from './ImageView.jsx';
import StaticDescription from './StaticDescription.jsx';
import AnnouncementBanner from './AnnouncementBanner.jsx';
import StyleSelector from './StyleSelector.jsx';

const Overview = (props) => {
  return (
    <div className="overview-container">
      <AnnouncementBanner/>
      <div className="product-info-container">
        <ImageView className="image-view-container"/>
        <div className="name-and-style-container">
          <h4>CATEGORY</h4>
          <h1>Product Name Placeholder</h1>
          <h5>price</h5>
          <StyleSelector className="style-selector"/>
        </div>
      </div>
      <StaticDescription className="static-description"/>
      <h2>------END OF OVERVIEW-------</h2>
    </div>
  )
}

export default Overview;