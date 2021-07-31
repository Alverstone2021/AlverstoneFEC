import React from 'react'
import {useEffect, useState} from 'react'
import RelatedProductCard from './RelatedProductCard.jsx'

//Renders a tray that holds all the related product cards, still needs to have scrolling functionality
const RelatedProductsTray = (props) => {

  const [visibleProductIds, setVisibleProductIds] = useState(props.relatedProductIds)
  const [allProductIds, setAllProductIds] = useState([])
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(3)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    setAllProductIds(props.relatedProductIds)
  }, [trigger])

  useEffect(() => {
    var renderedProductIds = [];
    for (var i = leftIndex; i < rightIndex; i++) {
      renderedProductIds.push(props.relatedProductIds[i])
    }
    setVisibleProductIds(renderedProductIds)
  }, [trigger])

  useEffect(() => {
    var renderedProductIds = [];
    for (var i = leftIndex; i < rightIndex; i++) {
      renderedProductIds.push(props.relatedProductIds[i])
    }
    setVisibleProductIds(renderedProductIds)
    setAllProductIds(props.relatedProductIds)
  }, [])

  const leftClickHandler = () => {
    if (leftIndex >= 0) {
      console.log(props.relatedProductIds)
      console.log(visibleProductIds)
      setLeftIndex(leftIndex - 1)
      setRightIndex(rightIndex - 1)
      setTrigger(trigger + 1)
    }
  }

  const rightClickHandler = () => {
    if (rightIndex <= props.relatedProductIds.length - 1) {
      console.log(props.relatedProductIds)
      console.log(visibleProductIds)
      setLeftIndex(leftIndex + 1)
      setRightIndex(rightIndex + 1)
      setTrigger(trigger + 1)
    }
  }

  return (
    <div className='related-products-container'>
      <div className='rp-right-arrow' onClick={() => {leftClickHandler()}}>Left Arrow</div>
      <div className='related-product-tray'>
        {visibleProductIds.map((productId) => {
          return <RelatedProductCard trigger={trigger} setTrigger={setTrigger} productId={productId} key={productId} currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct} />
        })}
      </div>
      <div className='rp-left-arrow' onClick={() => {rightClickHandler()}}>Right Arrow</div>
    </div>
  )
}

export default RelatedProductsTray;