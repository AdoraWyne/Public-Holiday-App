import React, { useEffect, useState } from "react"

type LocalizedText = {
    language: string;
    text: string;
}

type Country = {
    isoCode: string;
    name: LocalizedText[];
    officialLanguages: string[]
}

type Countries = Country[] | null;

const LearnUseEffect = () => {
    const [ data, setData ] = useState<Countries>(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        let isMounted = true

        const fetchCountries = async () => {
            try {
                const response = await fetch('https://openholidaysapi.org/Countries')
                if(!response.ok) throw new Error("Network error")
                
                const result = await response.json()
                console.log("adora: ", result)
                if(isMounted) setData(result)
            } catch (err) {
                if(isMounted) setError(err)
            } finally {
                if(isMounted) setIsLoading(false)
            }
        }

        fetchCountries()

        return() => {
            isMounted = false
        }
    }, [])

    const countries = data ?? []

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Something went wrong</p>

    return (
        <>
            <div>
                <h2>With useEffect</h2>
                <ul>
                    {countries.map(country => (
                        <li key={country.isoCode}>{country.isoCode}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default LearnUseEffect

