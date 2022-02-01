import React from "react";
import "./MemeImage.css";

export const MemeImage = ({image = null, onClick  = null, selectedImage =  null}) => {
  return (
    <div className='meme-image'>
    <img
      key={image.id}
      src={image.url}
      alt={image.name}
      onClick={onClick}
      style={{maxWidth : '300px'}}
    />
      </div>
  )
}