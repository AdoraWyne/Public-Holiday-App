import { useQuery } from '@tanstack/react-query'
import type { PublicHolidays } from "./types"

type PublicHolidaysProps = {
    countryIsoCode: string;
}

const PublicHolidayComponent = ({countryIsoCode}: PublicHolidaysProps) => {
    const fetchHolidays = async () => {
        const url = `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=2025-01-01&validTo=2025-12-31&languageIsoCode=EN`
        const response = await fetch(url)
        if (!response.ok) throw new Error(`Response status: ${response.status}`)
        const result = await response.json()

        return result;
    }

    const { data, isLoading, error } = useQuery<PublicHolidays>({
        queryKey: [`publicHolidays-${countryIsoCode}`],
        queryFn: fetchHolidays
    })

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>An error has occurred: {error.message}</p>}
            
            <ul>
                {data?.map((publicHoliday) => {
                    return (
                        <li key={publicHoliday.id}>{publicHoliday.startDate} - {publicHoliday.name[0].text}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default PublicHolidayComponent