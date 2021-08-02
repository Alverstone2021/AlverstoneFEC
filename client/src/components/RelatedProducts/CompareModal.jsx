import React from 'react';
import {useEffect, useState} from 'react';

const CompareModal = (props) => {

  if (!props.show) {
    return null
  }

  useEffect(() => {
    console.log('current prod', props.currentProduct)
    console.log('on card', props.productOnCard)
  }, [])

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close-button" onClick={props.onClose} >X</button>
        <div className="modal-header">
          <h4 className="modal-title">Comparing</h4>
        </div>
        <div className="modal-body">
          <div className="current-product-left-column">
            {props.currentProduct.name}
          </div>
          <div className="modal-checkmarks">
            v
          </div>
          <div className="related-product-right-column">
            {props.productOnCard.name}
          </div>
        </div>
        <div className="modal-footer">

        </div>
      </div>
    </div>
  )
}

export default CompareModal;