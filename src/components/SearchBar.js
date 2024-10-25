import React, {useState} from "react";

function SearchBar({onPrice, onAlpha, onTech, onSportsWear, onFinance }) {
  const [checked, setChecked] = useState('');
  const [sort, setSort]=useState("");

  function handleSortChange(e){
    const selectedSort = e.target.value
    setSort(selectedSort)
    if (selectedSort === "Tech"){
      onTech()
     }
     if (selectedSort=== "Sportswear"){
      onSportsWear()
     }
     if (selectedSort === "Finance"){
      onFinance()
     }
  }

 function handleCheckChange(e){
  setChecked(e.target.value)
  if(e.target.value === "Alphabetically"){
   onAlpha()
  }
  if (e.target.value === "Price"){
    onPrice()
  }
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
          onChange={handleCheckChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={checked === "Price"}
          onChange={handleCheckChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleSortChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
