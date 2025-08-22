import './index.css'; // <-- Ton fichier CSS principal
import { useEffect, useRef } from 'react';

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play().catch(() => {
      // Certains navigateurs bloquent l'autoplay : on lance au clic
      const playOnClick = () => {
        audioRef.current.play();
        window.removeEventListener('click', playOnClick);
      };
      window.addEventListener('click', playOnClick);
    });
  }, []);

  return (
    <div className="container">
      <audio ref={audioRef} src="/happy_birthday.mp3" loop />
      <img
        src="/Clow-Magic-Circle.png"
        alt="Magic Circle"
        className="magic-circle slow-rotate"
      />
      <img
        src="/Clow-Magic-Circle.png"
        alt="Magic Circle"
        className="magic-circle fast-rotate"
      />
      <div className="magic-text">
        Happy Birthday<br />ma WEEOO<br />Mokona Lisa Buds Chouchou
      </div>
    </div>
  );
}
