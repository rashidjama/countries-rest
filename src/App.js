
import React, { Component } from 'react';
import './App.css';
import CountriesList from './CountriesList';
import FilterBox from './FilterBox';
import FilteredCountries from './FilteredCountries';
import Navbar from './Navbar';
import SearchBox from './SearchBox';


class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: [],
      searchField: '',
      filterField: '',
    }
  }

  componentDidMount() {
    const fetCountries = async() => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const countriesData = await response.json();
      this.setState({countries: countriesData})
    }
    fetCountries();
  }

  onSearch = (e) => {
    this.setState({searchField: e.target.value});
  }

  onFilter = (e) => {
    this.setState({filterField: e.target.value})
    console.log(this.state.filterField)
  }

  render() {

  const filteredCountries = this.state.countries.filter(country => {
   return country.name.common.toLowerCase().includes(this.state.searchField.toLocaleLowerCase());
  })

  const filterdRegions = this.state.countries.filter(country => {
    return country.region.toLocaleLowerCase() === this.state.filterField.toLocaleLowerCase()
  })

    return(
      <div className='App'>
          <Navbar />
        <div className='search__filter'>
        <SearchBox onSearch={this.onSearch}/>
        <FilterBox onFilter={this.onFilter} countries={this.state.countries} />
        </div>
        <FilteredCountries filterdRegions={filterdRegions}/>
        <CountriesList countries={filteredCountries}/>
      </div>
    )
  }
}

export default App;
