import { useState } from 'react';
import './style.css';

export default function PokeCard({ pokemon }) {
    console.log(pokemon.color);
    return (
        <div className='PokeCard' style={{backgroundColor: "red"}}>
            <div>
                <p>#{pokemon.id}</p>
                <h3>{pokemon.name}</h3>
            </div>
            <img src={pokemon.sprites.front_default} alt={'Image of ' + pokemon.name}></img>
        </div>
    )
}