import "./style.css";
import { useState, useEffect, useLayoutEffect } from "react";
import PageSelector from "../../components/PageSelector/index.js";
import PokedexPage from "../../components/PokedexPage";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function Root() {
  const [windowWidth, windowHeight] = useWindowSize();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [pokemonCount, setPokemonCount] = useState();

  useEffect(() => {
    setLimit(updatePageLimit());
  }, [windowWidth, windowHeight]);

  function updatePageLimit() {
    let col = 4;
    let row = 5;
    if (window.innerWidth <= 1080) col = 3;
    if (window.innerWidth <= 800) col = 2;
    if (window.innerHeight <= 780) row = 4;
    if (window.innerHeight <= 640) row = 3;
    if (window.innerHeight <= 500) row = 2;
    if (window.innerWidth <= 500 && window.innerHeight <= 800) row = 3;
    if (window.innerWidth <= 500 && window.innerHeight <= 640) row = 2;
    return row * col;
  }

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
