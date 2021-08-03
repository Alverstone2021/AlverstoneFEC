import React from 'react';
import {useEffect, useState} from 'react';

const CompareModal = (props) => {

  if (!props.show) {
    return null
  }

  const tableMaker = () => {

    var features = []
    var current = props.currentProduct.features
    var card = props.productOnCard.features

    for (var i = 0; i < current.length; i++) {
      if (current[i].feature !== undefined) {
        var newObj = {}
        newObj['feature'] = current[i].feature
        newObj['currentProdValue'] = current[i].value
        newObj['prodOnCard'] = '-'
        features.push(newObj)
      }
    }

    for (var j = 0; j < card.length; j++) {
      for (var n = 0; n < features.length; n++) {
        //if two products have the same feature
        if (card[j].feature === features[n].feature) {
          features[n]['prodOnCard'] = card[j].value
        }
        //if feature array does not contain feature
        if (card[j].feature !== features[n].feature && n === features.length - 1) {
          newObj = {}
          newObj['feature'] = card[j].feature
          newObj['currentProdValue'] = '-'
          newObj['prodOnCard'] = card[j].value
          features.push(newObj)
        }
      }
    }

    return features
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close-button" onClick={props.onClose} >X</button>
        <div className="modal-header">
          <h4 className="modal-title">Comparing</h4>
        </div>
        <table className="modal-body-table">
          <thead>
            <tr>
              <th>{props.currentProduct.name}</th>
              <th>....X....</th>
              <th>{props.productOnCard.name}</th>
            </tr>
          </thead>
          {tableMaker().map((product) =>
            <tr>
              <td>{product.currentProdValue}</td>
              <td>{product.feature}</td>
              <td>{product.prodOnCard}</td>
            </tr>
          )}
        </table>
        <div className="modal-footer">
        </div>
      </div>
    </div>
  )
}

export default CompareModal;