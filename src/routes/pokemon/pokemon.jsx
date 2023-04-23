import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Statbar from "./components/statbar";
import Button from "../../components/Button/index.js";

export default function Pokemon() {
  const { id } = useParams();
  const [isPending, setIsPending] = useState(true);

  const [pokemon, setPokemon] = useState({});
  const [types, setTypes] = useState([]);

  const navigates = useNavigate();

  useEffect(() => {
    async function fetchPokemon() {
      setIsPending(true);
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();
        setPokemon(data);
        setTypes(data.types.map((type) => type.type.name));
        setIsPending(false);
        console.log(pokemon);
      } catch (e) {
        console.log("Cannot fetch the Pokemon data.");
      }
    }
    fetchPokemon();
  }, [id]);

  return (
    <div className="DetailsPage">
      <header>
        <img src={require("../../Pokédex_logo.png")} alt="Pokédex logo" />
        <Button buttonValue="Home" onButtonClick={() => navigates("/")} />
      </header>
      <main className="Pokemon">
        <section className={isPending ? "gray" : types[0]}>
          {/* Content while fetching */}
          {isPending && (
            <img src={require("./pokemon-ball-icon-9.jpg")} alt="Loading" />
          )}
          {isPending && <h2>------</h2>}
          {/* Content after fetching */}
          {!isPending && (
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name + " sprite"}
            />
          )}
          {/* Content while fetching */}
          {isPending && (
            <span>
              <h2>------</h2>
              <p>#--</p>
            </span>
          )}
          {isPending && (
            <span>
              <p>Type:</p>
              <p>----, ----</p>
            </span>
          )}
          {isPending && (
            <span>
              <p>Height:</p>
              <p>--m</p>
            </span>
          )}
          {isPending && (
            <span>
              <p>Weight:</p>
              <p>--kg</p>
            </span>
          )}
          {/* Content after fetching */}
          {!isPending && (
            <span>
              <h2>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
              </h2>
              <p>#{pokemon.id}</p>
            </span>
          )}
          {!isPending && (
            <span>
              <p>Type:</p>
              <p>{types.join(", ")}</p>
            </span>
          )}
          {!isPending && (
            <span>
              <p>Height:</p>
              <p>{pokemon.height / 10 + "m"}</p>
            </span>
          )}
          {!isPending && (
            <span>
              <p>Weight:</p>
              <p>{pokemon.weight / 10 + "kg"}</p>
            </span>
          )}
        </section>
        <section>
          {/* statistics */}
          {!isPending &&
            pokemon.stats.map((stat) => (
              <Statbar
                label={
                  stat.stat.name.charAt(0).toUpperCase() +
                  stat.stat.name.slice(1)
                }
                min="0"
                max="255"
                value={stat.base_stat}
                color={pokemon.types[0].type.name}
              />
            ))}
          {/*isPending && (() => {for (let i=0; i<5; i++) {<Statbar key={i} label="------" min="0" max="200" value="100" color="gray" />}})*/}
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
