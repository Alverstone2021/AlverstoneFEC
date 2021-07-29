import React from 'react'

const AddToOutfit = (props) => {

  return (
    <div>

      <div onClick={() => {
        addToLocalStorage(props.currentProduct);
        props.setTrigger(props.trigger + 1);
      }}>
        PLUS (clicking this adds something to the outfit.)
      </div>
      <div onClick={() => {
        localStorage.clear();
        props.setTrigger(props.trigger + 1)
      }}>
        CLICKING THIS CLEARS OUTFIT
      </div>
    </div>
  )
}

const addToLocalStorage = (item) => {
  var stringifiedItemId = JSON.stringify(item.id)
  localStorage.setItem(stringifiedItemId, JSON.stringify(item))
}

export default AddToOutfit;