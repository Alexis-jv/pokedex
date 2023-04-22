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
    </div>
  );
}

export default Root;
