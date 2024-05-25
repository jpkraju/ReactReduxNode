import React, { useState } from 'react'
import "./searchBarFilter.css"
import $ from 'jquery'
import productsData from "../../utils/productsData.json"
// import ProductItem from '../../pages/ProductItem'

$(".searchList").hide();
const SearchBarFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(productsData);

  $(".searchList").hide();
  if (searchTerm.length > 0) {
    $(".searchList").show();
  }
  

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    filterData(value);

  };

  const filterData = (searchTerm) => {
    const filteredData = productsData.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())

    );
    setFilteredData(filteredData);
  };

  return (
    <div className="SearchBarFilterContainer">
      <div className='SearchBarFilterWrapper'>

        <input
          type="text"
          placeholder="Search..."
          className='searchInput'
          value={searchTerm}
          onChange={handleInputChange}
        />


        <ul className='searchList'>
          {filteredData.map((item) => (
            <li className='searchListName' key={item.id}><a href="">{item.title}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default SearchBarFilter;