import React from "react"
import { useQuery } from "@tanstack/react-query"

const LearnReactQuery = () => {
    const fetchCountries = async () => {
        const response = await fetch('https://openholidaysapi.org/Countries')
        if(!response.ok) {
            throw new Error("Network error")
        }
        return response.json()
    }

    const { data, isLoading, error, refetch } = useQuery({
        queryKey:["countries"], // The name of this data in the cache
        queryFn: fetchCountries,
        staleTime: 5 * 60 * 1000 // 5 minutes, React Query will trust the cache
    })

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    const countries = data ?? []

    return (
        <div>
            <h2>Learn React Query API</h2>
            <button onClick={() => refetch()}>Refresh</button>
            <ul>
                {countries.map(country => (
                    <li key={country.isoCode}>{country.isoCode}</li>
                ))}
            </ul>
        </div>
    )
}

export default LearnReactQuery