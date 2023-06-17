import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          curtidas={522}
          mensagens={28}
          compartilhamentos={134}
          conta="MarioAnder"
          legenda="sai sai sai que é tua Taffareeeel"
          musica="Interstellar - Main Theme"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
        />
        <Video 
          curtidas={315}
          mensagens={12}
          compartilhamentos={98}
          conta="oGato"
          legenda="a animação dele é contagiante kk"
          musica="Clap Your Hands (accelerated).mp3"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4?t=2023-05-22T19%3A40%3A47.052Z"
        />
      </div>
    </div>
  );
}

export default App;
