import "./style.css";
import { useState } from "react";
import PageSelector from "../../components/PageSelector/index.js";
import PokedexPage from "../../components/PokedexPage";

function Root() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [pokemonCount, setPokemonCount] = useState();

  function changePage(value) {
    if (value < 1) setPage(1);
    else if (
      value >
      Math.floor(pokemonCount / limit) + (pokemonCount % limit === 0 ? 0 : 1)
    )
      setPage(
        Math.floor(pokemonCount / limit) + (pokemonCount % limit === 0 ? 0 : 1)
      );
    else setPage(value);
  }
  function handleChange(event) {
    if (event.target.value) setPage(parseInt(event.target.value));
    else setPage(0);
  }
  function handleBlur() {
    changePage(page);
  }
  function handleClick(value) {
    changePage(page + value);
  }
  function updatePokemonCount(value) {
    setPokemonCount(value);
  }
  return (
    <div className="Root">
      <header>
        <img src={require("../../Pokédex_logo.png")} alt="Pokédex logo" />
      </header>
      <PokedexPage
        page={page}
        limit={limit}
        getPokemonCount={(count) => updatePokemonCount(count)}
      />
      <footer>
        <PageSelector
          page={page}
          onArrowClick={(value) => handleClick(value)}
          onPageChange={(page) => handleChange(page)}
          onInputBlur={() => handleBlur()}
        />
      </footer>
    </div>
  );
}

export default Root;
