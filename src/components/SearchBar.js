import React, {useState} from "react";

function SearchBar({onSort}) {
  const[filterValue, setFilterValue]= useState('')
  const[checkedValue, setCheckedValue] = useState(null)

  function onSortChange(e){
    setCheckedValue(e.target.value)
    onSort(e.target.checked === "Alphabetically")
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={checkedValue === "Alphabetically"}
          onChange={onSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={checkedValue === "Price"}
          onChange={onSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
