import React from 'react'
import {useEffect, useState} from 'react'
import RelatedProductCard from './RelatedProductCard.jsx'
import classNames from 'classnames'

//Renders a tray that holds all the related product cards, still needs to have scrolling functionality
const RelatedProductsTray = (props) => {

  const [visibleProductIds, setVisibleProductIds] = useState([])
  const [allProductIds, setAllProductIds] = useState([])
  const [leftIndex, setLeftIndex] = useState(0)
  const [rightIndex, setRightIndex] = useState(4)
  const [trigger, setTrigger] = useState(0)

  useEffect(() => {
    var renderedProductIds = [];
    for (var i = leftIndex; i < rightIndex; i++) {
      if (props.relatedProductIds[i] !== props.currentProduct.id) {
        renderedProductIds.push(props.relatedProductIds[i])
      }
    }
    setVisibleProductIds(renderedProductIds)
    setAllProductIds(props.relatedProductIds)
  }, [trigger])

  useEffect(() => {
    var renderedProductIds = [];
    for (var i = leftIndex; i < rightIndex; i++) {
      if (props.relatedProductIds[i] !== props.currentProduct.id) {
        renderedProductIds.push(props.relatedProductIds[i])
      }
    }
    setVisibleProductIds(renderedProductIds)
    setAllProductIds(props.relatedProductIds)
  }, [props.relatedProductIds])

  /* click handlers */
  const leftClickHandler = () => {
    if (leftIndex > 0) {
      setLeftIndex(leftIndex - 1)
      setRightIndex(rightIndex - 1)
      setTrigger(trigger + 1)
    }
  }

  const rightClickHandler = () => {
    if (rightIndex <= props.relatedProductIds.length - 1) {
      setLeftIndex(leftIndex + 1)
      setRightIndex(rightIndex + 1)
      setTrigger(trigger + 1)
    }
  }

  const leftArrowClass = classNames('rp-left-arrow', 'fas fa-arrow-circle-left')
  const rightArrowClass = classNames('rp-right-arrow', 'fas fa-arrow-circle-right')

  return (
    <div className='related-products-container'>
      {leftIndex === 0 ? <div className='rp-left-arrow'></div> : <i className={leftArrowClass} onClick={() => {leftClickHandler()}} />}
      <div className='related-product-tray'>
        {visibleProductIds.map((productId) => {
          return <RelatedProductCard trigger={trigger} setTrigger={setTrigger} productId={productId} key={productId} currentProduct={props.currentProduct} setCurrentProduct={props.setCurrentProduct} />
        })}
      </div>
      {rightIndex === props.relatedProductIds.length ? <div className='rp-right-arrow'></div> : <i className={rightArrowClass} onClick={() => {rightClickHandler()}}/>}
    </div>
  )
}

export default RelatedProductsTray;