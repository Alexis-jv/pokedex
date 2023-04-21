import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Pokemon() {
    const {id} = useParams();
    const [isPending, setIsPending] = useState(true)

    const [pokemon, setPokemon] = useState({})
    const [types, setTypes] = useState([])

    useEffect(() => {
        async function fetchPokemon() {
          setIsPending(true);
          try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await res.json();
            setPokemon(data);
            setTypes(data.types.map(type => type.type.name));
            setIsPending(false);
            console.log(pokemon)
          } catch (e) {
            console.log("Cannot fetch the Pokemon data.");
          }
        }
        fetchPokemon();
      }, [id]);

    return (
        <main className="Pokemon">
            <section>
                {/* Content after fetching */}
                {!isPending && <img src={pokemon.sprites.front_default} alt={pokemon.name + " sprite"} />}
                {!isPending && <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>}
                <ul>
                    <li>Id: {id}</li>
                    {/* Content after fetching */}
                    {!isPending && <li>Type: {types.join(", ")}</li>}
                    {!isPending && <li>Height: {pokemon.height / 10 + "m"}</li>}
                    {!isPending && <li>Weight: {pokemon.weight / 10 + "kg"}</li>}
                </ul>
            </section>
            <section>
                {/* statistics */}
            </section>
        </main>
    )
}