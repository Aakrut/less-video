import React,{useState,useEffect} from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchTerm) => {

    const [video,setVideo] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
      },[defaultSearchTerm])

    const search = async(term) => {
        const response = await youtube.get('/search',{
          params:{
            q:term
          }
        });
    
    
        
        console.log(response);
    
        setVideo(response.data.items);
       
       
    }

    return [video,search];
}

export default useVideos
