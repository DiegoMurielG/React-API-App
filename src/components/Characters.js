export default function Characters(props) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };
  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Regresar al incio
      </span>
      <div className="container-characters">
        {/* Colocamos el cuerpo de la funcion anónima que acepta .map() dentro de () en lugar de {}, esto implica que lo que obtengamos dentro de esta función, al terminar se regresará, a esto se le llama 'return implícito' */}
        {/* La alternativa sin un return implícito es la siguiente:
        
        {characters.map((character, index) => {
          return (
            <div className="character-container" key={index}>
              <p>{character.name}</p>
            </div>
          )
        })}

        */}
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name}></img>
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-gray">Episodios: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Tipo de especie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Regresar al inicio
      </span>
    </div>
  );
}
