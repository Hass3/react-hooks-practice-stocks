import React, {useState} from "react";

function SearchBar({onSort, onType}) {
  const [checked, setChecked] = useState(null);
  const [type, setType]= useState(null)
  function sortOnChange(e){
  setChecked(e.target.value)
   onSort(e.target.value)
  }

  function typeOnChange(e){
    setType(e.target.value)
    onType(e.target.value)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={checked === "Alphabetically"}
          onChange={sortOnChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={checked === "Price"}
          onChange={sortOnChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={typeOnChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
