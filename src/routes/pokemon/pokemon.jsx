import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Statbar from "./components/statbar";

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
                {/* Content while fetching */}
                {isPending && <img src={require("./pokemon-ball-icon-9.jpg")} alt="Loading"/>}
                {isPending && <h2>------</h2>}
                {/* Content after fetching */}
                {!isPending && <img src={pokemon.sprites.front_default} alt={pokemon.name + " sprite"} />}
                {!isPending && <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>}
                <ul>
                    {/* Content while fetching */}
                    {isPending && <li>Id: --</li>}
                    {isPending && <li>Type: ----, ----</li>}
                    {isPending && <li>Height: --m</li>}
                    {isPending && <li>Weight: --kg</li>}
                    {/* Content after fetching */}
                    {!isPending && <li>Id: {pokemon.id}</li>}
                    {!isPending && <li>Type: {types.join(", ")}</li>}
                    {!isPending && <li>Height: {pokemon.height / 10 + "m"}</li>}
                    {!isPending && <li>Weight: {pokemon.weight / 10 + "kg"}</li>}
                </ul>
            </section>
            <section>
                {/* statistics */}
                {!isPending && pokemon.stats.map(stat => <Statbar label={stat.stat.name} min="0" max="200" value={stat.base_stat} color={pokemon.types[0].type.name} />)}
                {/*isPending && (() => {for (let i=0; i<5; i++) {<Statbar key={i} label="------" min="0" max="200" value="100" color="gray" />}})*/}
            </section>
        </main>
    )
}