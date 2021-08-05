import React from 'react';


const DropDownMenus = (props) => {

  if (props.currentStyle.skus) {
    {let inventory = Object.values(props.currentStyle.skus)
    let sizeSelected = false;
    return (
      <form className="selectors">
        <select id="SIZE" required onChange={(e) => {props.setSizeSelection(e.target.value)}}>
          <option value="">SELECT SIZE</option>
          {inventory.map((sku, index) => {
            //if the sku.size value already exists, skip it     ------------FIX THIS!!--------------
              return (
                <option value={sku.size}>{sku.size}</option>
              )
          })}
        </select>
          {inventory.map((sku, index) => {
            if (props.sizeSelection === sku.size) {
              sizeSelected = true;
              let amount = [];
              for (let i = 1; i < sku.quantity; i++) {
                amount.push(<option value={i} key={i}>{i}</option>);
              }
              return(
                <select id="QUANTITY" required onChange={(e) => {props.setQuantity(e.target.value)}}>
                  {amount}
                </select>)
            } else if (sizeSelected === false && (inventory.length - 1) === index) {
              return (
                <select id="QUANTITY" required onChange={(e) => {props.setQuantity(e.target.value)}}>
                  <option value="">-</option>
                </select>
              )
            } else {
              return null;
            }
          })}
      </form>
    )}
  } else {
    return (
      <select id="QUANTITY">
        <option value="">-</option>
      </select>
    )
  }
}



export default DropDownMenus;
