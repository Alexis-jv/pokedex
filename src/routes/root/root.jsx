import "./style.css";
import { useState } from "react";
import PageSelector from "../../components/PageSelector/index.js";
import PokedexPage from "../../components/PokedexPage";
import Statbar from "../pokemon/components/statbar";

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
      <PokedexPage page={page} />
      <PageSelector
        page={page}
        onArrowClick={(value) => handleClick(value)}
        onPageChange={(page) => handleChange(page)}
      />
      <Statbar label={"Attack"} min="20" max="220" value="120" color="blue" />
    </div>
  );
}

export default Root;
