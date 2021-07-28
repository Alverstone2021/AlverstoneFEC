import React from 'react'
import RelatedProductCard from './RelatedProductCard.jsx'

//Renders a tray that holds all the related product cards, still needs to have scrolling functionality
const RelatedProductsTray = (props) => {
  return (
    <div className='related-product-tray'>
      {props.allProducts.map((product) => {
        return <RelatedProductCard product={product} key={product.id}/>
      })}
    </div>
  )
}

export default RelatedProductsTray;