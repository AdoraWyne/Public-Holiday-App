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

    return (
        <>
            <h2>Learn React Query API</h2>
        </>
    )
}

export default LearnReactQuery