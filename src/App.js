import React, { useState, useEffect } from "react";
import "./App.css";
import Pagination from "./Pagination/Pagination";
import Renderdata from "./RenderDada/Renderdata";

export default function App() {
  const [data, setData] = useState([]);
  const [dataClick, setDataClick] = useState({
    currentPage: 1,
    itemsPerPage: 5,
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error));
  }, []);
  const handleDataClick = (data) => {
    setDataClick(data);
    console.log(data);
  };
  return (
    <div className="App">
      <Renderdata data={dataClick} />
      <Pagination data={data} handleOnClickPage={handleDataClick} />
    </div>
  );
}
