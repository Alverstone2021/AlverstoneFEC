import React from 'react'
import {useEffect, useState} from 'react';
import OutfitCard from './OutfitCard.jsx'
import AddToOutfit from './AddToOutfit.jsx'

const OutfitTray = (props) => {
  const [outfit, setOutfit] = useState([]);
  const [trigger, setTrigger] = useState(0);

  const parser = () => {
    var array = []
    for (var key in localStorage) {
      if (typeof localStorage[key] === 'string') {
        var outfitItem = JSON.parse(localStorage[key])
        array.push(outfitItem)
      }
    }
    setOutfit(array)
  }

  useEffect(() => {
    parser()
  }, [trigger])

  return (
    <div className='outfit-tray'>
      <AddToOutfit trigger={trigger} setTrigger={setTrigger} currentProduct={props.currentProduct}/>
        {outfit.map((product) => {
          return <OutfitCard key={product.id+20000} product={product} />
        })}
    </div>
  )
}

export default OutfitTray;