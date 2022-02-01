import React from "react";
import "./MemeImage.css";

export const MemeImage = ({image, topText, bottomText}) => {
  return (
    <div className='meme-image'>
    <img
      key={image.id}
      src={image.url}
      alt={image.name}
      style={{height: '350px', minWidth: "400px"}}
    />
          <h2 className="top">{topText.toUpperCase()}</h2>
          <h2 className="bottom">{bottomText.toUpperCase()}</h2>
   </div>
  )
}