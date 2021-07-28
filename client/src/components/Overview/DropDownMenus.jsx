import React from 'react';

// MAP FOR OPTIONS AND USE THEM TO CHANGE THE STATE OF THE CURRENTLY SELECTED STYLE
const DropDownMenus = (props) => {
  return (
    <div className="select">
      <select id="STYLE">
        <option value="">Option 1</option>
      </select>
      <select id="QUANTITY">
        <option value="1">1</option>
      </select>
    </div>
  )
}

export default DropDownMenus;