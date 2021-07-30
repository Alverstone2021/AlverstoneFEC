import React from 'react';


const DropDownMenus = (props) => {

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
        {inventory.map((sku) => {
          if (props.sizeSelection === sku.size) {
          let amount = [];
          for (let i = 1; i < sku.quantity; i++) {
            amount.push(<option value={i} key={i}>{i}</option>);
          }
          return(
            <select id="QUANTITY">
              {amount}
            </select>)
        } else {
          return null
        }
        })}
          </form>
    )}
  } else {
    return (
      <select id="QUANTITY">
        <option value="">1</option>
      </select>
    )
  }
}

export default DropDownMenus;
