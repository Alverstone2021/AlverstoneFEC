import React from 'react'
import plusSign from '../../assets/assets.js'

const AddToOutfit = (props) => {

  return (
      <div className='add-to-outfit-btn' onClick={() => {
        addToLocalStorage(props.currentProduct);
        props.setTrigger(props.trigger + 1);
      }}>
        <img className='ato-btn' src={plusSign} height='300' width='300'/>

      </div>
  )
}

const addToLocalStorage = (item) => {
  var stringifiedItemId = JSON.stringify(item.id)
  localStorage.setItem(stringifiedItemId, JSON.stringify(item))
}

export default AddToOutfit;