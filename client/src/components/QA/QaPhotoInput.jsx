import React from 'react';
import {useState, useEffect} from 'react';

const QaPhotoInput = ({compilePhotos, index}) => {
  // console.log('key', index)
  const [urlValue, setUrlValue] = useState('')

  return (
    <input title={index} type="text" placeholder="Photo URL" value={urlValue} onChange={(e) => {setUrlValue(e.target.value); compilePhotos(e)}}/>
  )
}

export default QaPhotoInput;