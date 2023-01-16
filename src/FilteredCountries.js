import React from 'react'
import CountryCard from './CountryCard'

function FilteredCountries({ filterdRegions}) {
  return (
    <div className='countries__container'>
    { filterdRegions.map((country, i) => {
return(
   <CountryCard 
       key={i}
       flag={country.flags.png}
       name={country.name.common}
       population={country.population}
       capital={country.capital}
       region= {country.region}
       />
)
})}
</div>
  )
}

export default FilteredCountries