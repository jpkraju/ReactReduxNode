import React, { useState } from 'react'
import "./searchBarFilter.css"
import productsData from "../../utils/productsData.json"


const SearchBarFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(productsData);


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
    <div className='searchInput'>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />


      <ul className='searchList'>
        {filteredData.map((item) => (
          <li className='searchListName' key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};


export default SearchBarFilter;