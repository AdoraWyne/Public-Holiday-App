import React from "react";
import { useState } from "react";
import './App.css';
import { useQuery } from '@tanstack/react-query'
import type { Countries } from "./types";

const App: React.FC = () => {
  const [ selectedCountry, setSelectedCountry ] = useState("NL")

  const fetchCountries = async () => {
    const url = "https://openholidaysapi.org/Countries?languageIsoCode=EN"
    try {
      const response = await fetch(url)
      if(!response.ok) throw new Error(`Response status: ${response.status}`)

      const result = await response.json()

      return result;
    } catch (error) {
      if (error instanceof Error ){
        console.error("Error msg: ", error.message)
      } else {
        console.error("Error msg: ", error)
      }
    }
  }

  const {data, isLoading, error} = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries
  })

  return (
    <div>
      <h1>Public Holidays App</h1>

      {isLoading && <p>Loading...</p>}
      {error && <p>An error has occurred: {error.message}</p>}

      <select name="countries" id="countries" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}>
        {data?.map((country) => {
          return (
            <option key={country.isoCode} value={country.isoCode}>{country.name[0].text}</option>
          )
        })}
      </select>

      <hr />
      {/* <div className="main-app">
        <LearnReactQuery />
        <LearnUseEffect />
      </div> */}
    </div>
  )
}

export default App;
