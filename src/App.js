import './App.css';
import React,{useState,useEffect} from 'react';
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import useVideos from '../src/hooks/useVideos'

const App = () => {

  const [selectedVideo,setSelectedVideo] = useState(null);

  const [video,search]=useVideos('I ate All cadies');

  useEffect (()=>{
    setSelectedVideo(video[0]);
  },[video])



  return (
    <div className="ui container">
     <SearchBar onFormSubmit={search}/>
     <div className="ui grid">
       <div className="ui row">
         <div className="eleven wide column">
       <VideoDetails video={selectedVideo}/>

         </div>
       <div className="five wide column">
           
      <VideoList onVideoSelect={(video)=>{setSelectedVideo(video)}} videos={video}/>
         </div>
       </div>
     </div>
    
    </div>
  );


}

export default App;
