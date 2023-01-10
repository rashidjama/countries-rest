import React, { Component } from 'react';
import './App.css';
import CountriesList from './CountriesList';


class App extends Component {
  constructor() {
    super()
    this.state = {
      countries: []
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

  render() {
    return(
      <div className='App'>
        <CountriesList countries={this.state.countries}/>
      </div>
    )
  }
}

export default App;
