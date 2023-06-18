import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              curtidas={item.curtidas}
              mensagens={item.mensagens}
              compartilhamentos={item.compartilhamentos}
              conta={item.conta}
              legenda={item.legenda}
              musica={item.musica}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
