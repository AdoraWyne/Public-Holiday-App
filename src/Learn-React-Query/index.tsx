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

    const { data, isLoading, error } = useQuery({
        queryKey:["countries"],
        queryFn: fetchCountries,
    })

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    return (
        <>
            <h2>Learn React Query API</h2>
            <ul>
                {data.map(country => (
                    <li key={country.isoCode}>{country.isoCode}</li>
                ))}
            </ul>
        </>
    )
}

export default LearnReactQuery