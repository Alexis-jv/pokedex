import { useState } from "react";
import "./style.css";

export default function PokeCard({ pokemon, isPending }) {
  console.log(pokemon.color);
  return (
    <div className="PokeCard" style={{ backgroundColor: "gray" }}>
      <div>
        {isPending && <p>#00</p>}
        {isPending && <h3>-------</h3>}
        {!isPending && <p>#{pokemon.id}</p>}
        {!isPending && <h3>{pokemon.name}</h3>}
      </div>
      {isPending && <img src={"pokemon-ball-icon-9.jpg"} alt="Loading"></img>}
      {!isPending && (
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name + " sprite"}
        ></img>
      )}
    </div>
  );
}
