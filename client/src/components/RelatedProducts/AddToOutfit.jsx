import React from 'react'

const AddToOutfit = (props) => {

  return (
      <div className='add-to-outfit-btn' onClick={() => {
        addToLocalStorage(props.currentProduct);
        props.setTrigger(props.trigger + 1);
      }}>
        PLUS (clicking this adds something to the outfit)
      </div>
  )
}

const addToLocalStorage = (item) => {
  var stringifiedItemId = JSON.stringify(item.id)
  localStorage.setItem(stringifiedItemId, JSON.stringify(item))
}

export default AddToOutfit;