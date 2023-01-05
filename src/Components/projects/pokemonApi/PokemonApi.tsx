import React, { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

const LoadingIndicator = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
};

interface PokedexResponse {
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

interface PokedexProps {
  limit?: number;
}

const Pokedex = ({ limit = 151 }: PokedexProps) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState("");

  const loadPokemon = async (limit: number) => {
    setLoading(true);
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=" + limit
    );
    let pokedex: PokedexResponse = await response.json();

    setPokemon(pokedex.results);
    setLoading(false);
  };

  useEffect(() => {
    loadPokemon(limit);
  }, [limit]);

  return (
    <div>
      {loading && <LoadingIndicator />}
      <input
        type="text"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />

      <ul>
        {pokemon
          .filter((p) =>
            p.name.toUpperCase().startsWith(filterText.toUpperCase())
          )
          .map((pokemon) => {
            return <li key={pokemon.name}>{pokemon.name}</li>;
          })}
      </ul>
    </div>
  );
};
const PokedexResult = () => {
  const [limit, setLimit] = useState(10);
  const [activeLimit, setActiveLimit] = useState(10);
  return (
    <div>
      <Pokedex limit={activeLimit} />

      <input
        type="number"
        onChange={(e) => setLimit(Number(e.target.value))}
        value={limit}
      ></input>
      <button
        onClick={() => {
          setActiveLimit(limit);
        }}
      >
        Set Limit
      </button>
    </div>
  );
};

export default PokedexResult;
