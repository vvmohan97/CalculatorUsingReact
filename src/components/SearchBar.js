import React from "react";
import './searchbar.css'
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  //     const handleclick = () => {
  //         onSubmit('cars')
  //     }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handlechange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handlechange} />
      </form>
    </div>
  );
}

export default SearchBar;
