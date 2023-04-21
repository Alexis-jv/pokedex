import { useState } from "react";
import "./style.css";
import "../../../../color-types.css";
import { Link } from "react-router-dom";

export default function PokeCard({ pokemon, isPending }) {
  return (
    <Link to={"/" + pokemon.id} className="PokeCard">
      <div className={pokemon.types[0].type.name}>
        <div>
          {isPending && <p>#00</p>}
          {isPending && <h3>-------</h3>}
          {!isPending && <p>#{pokemon.id}</p>}
          {!isPending && <h3>{pokemon.name}</h3>}
        </div>
        {isPending && (
          <img src={require("./pokemon-ball-icon-9.jpg")} alt="Loading"></img>
        )}
        {!isPending && (
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name + " sprite"}
          ></img>
        )}
      </div>
    </Link>
  );
}
