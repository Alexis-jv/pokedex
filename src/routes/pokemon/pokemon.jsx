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
          } catch (e) {
            console.log("Cannot fetch the Pokemon data.");
          }
        }
        fetchPokemon();
      }, [id]);

    return (
        <main>
            <section>
                <img src="" alt="" />
                <h2>{pokemon.name}</h2>
                <ul>
                    <li>Id: {id}</li>
                    <li>Type: {types}</li>
                    <li>Height: {pokemon.height}</li>
                    <li>Weight: {pokemon.weight}</li>
                    <li></li>
                </ul>
            </section>
            <section>
                {/* statistics */}
            </section>
        </main>
    )
}