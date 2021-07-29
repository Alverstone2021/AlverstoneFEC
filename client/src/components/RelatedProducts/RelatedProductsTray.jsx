import React from 'react'
import RelatedProductCard from './RelatedProductCard.jsx'

//Renders a tray that holds all the related product cards, still needs to have scrolling functionality
const RelatedProductsTray = (props) => {

  return (
    <div className='related-product-tray'>

      {props.relatedProductIds.map((productId) => {
        return <RelatedProductCard productId={productId} key={productId} currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct}/>
      })}

    </div>
  )
}

export default RelatedProductsTray;