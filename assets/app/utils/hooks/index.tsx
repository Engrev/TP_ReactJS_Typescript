import { useState, useEffect } from 'react'
import { ApiResponse } from '../../class/ApiResponse'

export function useFetch(url: string) {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(new ApiResponse(data))
            } catch (err) {
                //console.error(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { isLoading, data, error }
}
