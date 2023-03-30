import { useState, useEffect } from 'react';
import PokeCard from '../PokeCard';
import './style.css';

export default function PokedexPage({ page }) {
    
  const [limit, setLimit] = useState(12);
  const [pokemons, setPokemons] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    async function fetchPokemons() {
      setIsPending(true)
      try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${limit * (page -1)}&limit=${limit}`);
        const data = await res.json();
        const pokemonPromises = await ( data.results.map(result => fetch(result.url)) );
        const allres = await Promise.all(pokemonPromises);
        const alldata = await Promise.all(allres.map(item => {
          return item.json();
        }))
        setPokemons(alldata);
        setIsPending(false);
        console.log(alldata);
      } catch(e) {
        console.log("Cannot fetch all Pokemons.")
      }
    }
    fetchPokemons();
    console.log(pokemons);
  }, [page, limit]);

    return (
        <div className='PokedexPage'>
          {pokemons.map(pokemon => <PokeCard pokemon={pokemon} isPending={isPending} />)}
        </div>
    )
}