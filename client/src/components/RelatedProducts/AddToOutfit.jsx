import React from 'react'

const AddToOutfit = (props) => {

  return (
      <div className='add-to-outfit-btn' onClick={() => {
        addToLocalStorage(props.currentProduct);
        props.setTrigger(props.trigger + 1);
      }}>
        <img className='ato-btn' src='https://cdn.icon-icons.com/icons2/1339/PNG/512/plussign_87467.png' height='300' width='300'/>
      </div>
  )
}

const addToLocalStorage = (item) => {
  var stringifiedItemId = JSON.stringify(item.id)
  localStorage.setItem(stringifiedItemId, JSON.stringify(item))
}

export default AddToOutfit;