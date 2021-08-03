import React from 'react';
import { useEffect, useState } from 'react';

const QaSearchBar = ({updateSearch}) => {
  const [search, setSearch] = useState('')
  return (
    <div className='center'>
      <input className='qasearchbar' type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." value={search} onChange={(e) => {setSearch(e.target.value); updateSearch(e.target.value)}} ></input>
    </div>
  )
}

export default QaSearchBar;