import React from 'react';

const CompareModal = (props) => {

  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          Modal Content
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} >Close</button>
        </div>
      </div>
    </div>
  )
}

export default CompareModal;