import axios from 'axios'

const searchImages = async(term) =>{
    const responce = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID lRdPPDC8shhIzfXeiot0b2ikwmou2I3rJ78xLiX-nwM'
        },
        params:{
            query: term,
        }
    })
    
    return responce.data.results;
}

export default searchImages;