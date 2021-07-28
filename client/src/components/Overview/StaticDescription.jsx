import React from 'react';

const StaticDescription = (props) => {
  return (
    <div>
      <h3>{props.currentProduct.slogan}</h3>
      <p>{props.currentProduct.description}</p>
    </div>
  )
}

export default StaticDescription;