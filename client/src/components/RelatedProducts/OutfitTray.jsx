import React from 'react'
import OutfitCard from './OutfitCard.jsx'
import AddToOutfit from './AddToOutfit.jsx'

const OutfitTray = (props) => {
  return (
    <div>
      <div>
      This is the outfit tray placeholder
        {console.log(localStorage)}
      </div>
      <div>
        card that adds things to outfit list
      </div>
    </div>
  )
}

export default OutfitTray;