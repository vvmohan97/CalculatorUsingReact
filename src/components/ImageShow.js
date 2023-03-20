import React from 'react'

function ImageShow({image}) {

  return (
    <div>
        <img src={image.urls.full} alt={image.discription}/>
    </div>
  )
}

export default ImageShow