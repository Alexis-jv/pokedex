import "./style.css";
import { useState } from "react";
import PageSelector from "../../components/PageSelector/index.js";
import PokedexPage from "../../components/PokedexPage";

function Root() {
  const [page, setPage] = useState(1);

  function handleChange(value) {
    setPage(parseInt(value));
  }
  function handleClick(value) {
    if (page + value > 0) setPage(page + value);
  }
  return (
    <div className="Root">
      <header>
        <img src={require("../../Pokédex_logo.png")} alt="Pokédex logo" />
      </header>
      <PokedexPage page={page} />
      <footer>
        <PageSelector
          page={page}
          onArrowClick={(value) => handleClick(value)}
          onPageChange={(page) => handleChange(page)}
        />
      </footer>
    </div>
  );
}

export default Root;
