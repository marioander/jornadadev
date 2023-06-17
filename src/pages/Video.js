import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter.js";
import VideoSidebar from "./components/sidebar/VideoSidebar.js";
import "./Video.css";

function Video({curtidas, mensagens, compartilhamentos, url, conta, legenda, musica}) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handdleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      <VideoSidebar 
        curtidas={curtidas}
        mensagens={mensagens}
        compartilhamentos={compartilhamentos}
      />
      <VideoFooter 
        conta={conta}
        legenda={legenda}
        musica={musica}
      />
    </div>
  );
}

export default Video;
