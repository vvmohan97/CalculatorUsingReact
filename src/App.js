import React, { useState } from 'react';
import searchImages from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';


function App() {
    const [images,setImages] = useState([])
    const handlesubmit = async (term) => {
        const responce = await searchImages(term);
        setImages(responce)
    }

  return (
    <div>
        <SearchBar onSubmit = {handlesubmit}/>
        <ImageList images={images}/>
    </div>
  )
}

export default App