import React from 'react';

const QaLoadAdd = (props) => {
  // console.log('load props', props)
  return (
    <div>
      <button onClick={props.qLimitPlusTwo}>MORE ANSWERED QUESTIONS</button>
      <button>ADD A QUESTION +</button>
    </div>
  )
}

export default QaLoadAdd;