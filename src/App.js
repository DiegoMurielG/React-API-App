import logo from "./logo.svg";
import img_rick_y_morty from "./media/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  const rectAPI = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterAPI = await api.json();
    // console.log(characterAPI);
    setCharacters(characterAPI.results);
  };
  // console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          // De esta forma pasamos la funcion de setState() de setCharacters al componente
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <div>
            <img src={img_rick_y_morty} alt="Rick & Morty" className="img-home" />
            <button onClick={rectAPI} className="btn-search">
              Buscar Personajes
            </button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
