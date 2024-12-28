import { useEffect, useSyncExternalStore } from "react";
import { CatchPokemon, geState, subscribe } from "./store/store";

const index = () => {
  const { pokemons } = useSyncExternalStore(subscribe, geState);
  useEffect(() => {
    CatchPokemon();
  }, []);
  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.length === 0 ? (
          <p> Loading...</p>
        ) : (
          pokemons.map((pokemon: { name: string }, i) => (
            <li key={i}>{pokemon.name}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default index;
