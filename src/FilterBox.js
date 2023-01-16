import React from 'react'
import CountryCard from './CountryCard'
import filter__box from './FilterBox.css'

function FilterBox({ onFilter, countries }) {
  return (
    <div className='filter__box'>
        <label for="region"></label>
        <select onChange={onFilter} name="region" id="region">
            <option value="">Filter by Region</option>
            {countries.map((country, i) => {
                return <option key={i} value={country.region}>{country.region}</option>
            })}
        </select>
    </div>
  )
}

export default FilterBox