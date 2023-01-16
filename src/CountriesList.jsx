import React from 'react'
import CountryCard from './CountryCard'
import Countries__Container from './CountriesList.css'

function CountriesList({ countries }) {
  return (
    <div className='countries__container'>
        {countries.map((country, i) => {
         
            return <CountryCard 
                    key={i}
                    flag={country.flags.png}
                    name={country.name.common}
                    population={country.population}
                    capital={country.capital}
                    region= {country.region}
                    />
        })}
    </div>
  )
}

export default CountriesList