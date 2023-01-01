//Deps
import { useContext } from "react";

//Context
import { CharactersContext } from "../contexts/charactersContext";

//Component
import { Paginations } from "./Paginations";

export const Characters = () => {
  const { characters } = useContext(CharactersContext);
  return (
    <div className="row">
      <Paginations />
      {characters.map((character, idx) => {
        return (
          <div className="col-3" key={character.name + idx}>
            <div className="card mt-4">
              <img src={character.image} className="card-img-top" alt="photo" />
              <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">
                  <b>Status:</b> {character.status}
                </p>
                <p className="card-text">
                  <b>Species:</b> {character.species}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
