let state = { pokemons: [] }; // Initial state

let listeners: any = []; // List of subscribers

export const CatchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  state = { pokemons: data.results };
  listeners.forEach((l: any) => l()); // Notify all of the subscriber
};

export const geState = () => state;

export const subscribe = (listener: any) => {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l: any) => l !== listener);
  };
};
