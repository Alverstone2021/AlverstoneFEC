import React from 'react';

// MAP FOR OPTIONS AND USE THEM TO CHANGE THE STATE OF THE CURRENTLY SELECTED STYLE
const DropDownMenus = (props) => {
  //console.log('current size', props.sizeSelection)

  if (props.currentStyle.skus) {
    {let inventory = Object.values(props.currentStyle.skus)
    //console.log('inventory', inventory)
    return (
      <form className="selectors">
        <select id="SIZE" required onChange={(e) => {props.setSizeSelection(e.target.value)}}>
          <option value="">SELECT SIZE</option>
          {inventory.map((sku) => {
            //if the sku.size value already exists, skip it
            return (
              <option value={sku.size}>{sku.size}</option>
            )
          })}
        </select>
        <select id="QUANTITY">
          {inventory.map((sku) => {
            // IF THE CURRENT VALUE OF SIZE DROPDOWN IS EQUAL TO CURRENT SKU SIZE VALUE
            console.log('current', props.sizeSelection)
            if (props.sizeSelection === sku.size) {
              props.setAvailable(sku.quantity)
              console.log('AAAHHH!!!', props.available)
            }
            //console.log('forms?', document.forms[0])
            // let currentChoice = size.option.value
            // console.log('DID IT WORK?!', currentChoice)
            return (
              <option value="" required>0</option>
            )
          })}
        </select>
      </form>
    )
    }
  } else {
    return null;
  }
}

export default DropDownMenus;


    // return (
    //   <div className="select">

    //     <select id="STYLE">
    //       <option value="">Option 1</option>
    //     </select>
    //     <select id="QUANTITY">
    //       <option value="1">1</option>
    //     </select>
    //     </div>
    //     )
