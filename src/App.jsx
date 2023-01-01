//
import { CharactersProvider } from "./contexts/charactersContext";
//components
import { Characters } from "./components/Characters";

export const App = () => {
  return (
    <div>
      <div className="container">
        <h2 className="alert alert-success text-center">Rick and Morty App</h2>
        <CharactersProvider>
          <Characters />
        </CharactersProvider>
      </div>
    </div>
  );
};
