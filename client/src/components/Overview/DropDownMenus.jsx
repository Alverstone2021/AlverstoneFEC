
// const DropDownMenus = (props) => {
//   return (
//     <div className="select">
//       <select id="STYLE">
//         <option value="">Option 1</option>
//       </select>
//       <select id="QUANTITY">
//         <option value="1">1</option>
//       </select>
//     </div>
//   )
// }

// export default DropDownMenus;

import React from 'react';


const DropDownMenus = (props) => {

  if (props.currentStyle.skus) {
    {let inventory = Object.values(props.currentStyle.skus)
    return (
      <form className="selectors">
        <select id="SIZE" required onChange={(e) => {props.setSizeSelection(e.target.value) /* OR JUST TRGGER RERENDER HERE */}}>
          <option value="">SELECT SIZE</option>
          {inventory.map((sku) => {
            //if the sku.size value already exists, skip it
            return (
              <option value={sku.size}>{sku.size}</option>
            )
          })}
        </select>
        <select id="QUANTITY" required onChange={(e) => {props.setQuantity(e.target.value)}}>
          <option value="">-</option>
          {inventory.map((sku) => {
            console.log('WTF', sku)
            if (props.sizeSelection === sku.size) {
            let amount = [];
            for (let i = 1; i < sku.quantity; i++) {
              amount.push(i);
            }
            amount.map((amt) => {
              //console.log('hi y u no work', amt)
              return (
              <option value={amt}>{amt}</option>
              )
            })
          } else {
            return null;
          }
        })}
        </select>
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
