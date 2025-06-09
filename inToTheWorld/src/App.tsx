import React from 'react';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Search from './pages/Search'
import CountryInfo from './pages/CountryInfo';

function App() {
  
  const [selectedCountry, setSelectedCountry] = React.useState("");

  const handleSearch = (country: string) => {
    setSelectedCountry(country);
  }

  console.log('selected country : ', selectedCountry);

  return (
    <>
      <Header/>
      <Search onSearch={handleSearch}/>
      {selectedCountry && <CountryInfo country={selectedCountry} />}
      <Footer />
    </>
  )
}

export default App
