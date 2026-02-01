import React from "react";
import './App.css';
import { useQuery } from '@tanstack/react-query'
import LearnReactQuery from "./Learn-React-Query/index"
import LearnUseEffect from "./Learn-React-Query/indexWithUseEffect";

const App: React.FC = () => {
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
      <h1>My App</h1>

      <hr />
      <div className="main-app">
        <LearnReactQuery />
        <LearnUseEffect />
      </div>
    </div>
  )
}

export default App;
