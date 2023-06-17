import React, { useState } from "react";
import "./VideoSidebar.css";
import SemLike from "@mui/icons-material/FavoriteBorder";
import ComLike from "@mui/icons-material/Favorite";
import IconeChat from "@mui/icons-material/Chat";
import Compartilhar from "@mui/icons-material/Share";

function VideoSidebar({curtidas, mensagens, compartilhamentos}) {
    
    const [curtida, setarCurtida] = useState(false);
  
    function darLike() {
        setarCurtida(!curtida)
  }
  return (
    <div className="VideoSidebar">
      <div className="VideoSidebar__options" onClick={darLike}>
        {curtida ? <ComLike fontSize="large" /> : <SemLike fontSize="large" />}

        <p>{ curtida ? curtidas + 1 : curtidas }</p>
      </div>
      <div className="VideoSidebar__options">
        <p>
          <IconeChat fontSize="large" />
        </p>
        <p>{mensagens}</p>
      </div>
      <div className="VideoSidebar__options">
        <p>
          <Compartilhar fontSize="large" />
        </p>
        <p>{compartilhamentos}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
