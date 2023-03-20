import React from 'react'
import ImageShow from './ImageShow'
import './imagelist.css'
function ImageList({images}) {
    
    const renderedimages = images.map((image)=>{
        return <ImageShow image={image} key={image.id}/>
    })

  return (
    <div className='image-list'>
        {renderedimages}
    </div>
  )
}

export default ImageList