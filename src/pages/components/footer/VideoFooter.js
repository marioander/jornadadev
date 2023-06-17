import React from "react";
import "./VideoFooter.css";
import NotaMusical from '@mui/icons-material/MusicNote'; /* para importar o ícone do site */

function VideoFooter({conta, legenda, musica}) {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter__text">
        <h3>@{conta}</h3>
        <p>{legenda}</p>
        <div className="VideoFooter__music">
          <p> <NotaMusical className="VideoFooter__icon" /> </p>
          <div className="VideoFooterMusic__title">
              <p>{musica}</p>
          </div>
        </div>
      </div>
      <img
        className="VideoFooter__record"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        alt="Imagem de um vinil girando"
      />
    </div>
  );
}

export default VideoFooter;
