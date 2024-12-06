import { useState } from 'react';
/*type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export function useFetch(
    method: Method,
    url: string | URL | Request,
    data: object = {},
    options: RequestInit = {},
) {
    const requestOptions: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        ...options,
    }

    const [responseData, setResponseData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, requestOptions)
            .then((response) => {
                if (!response.ok) {
                    // error coming back from server
                    throw Error('could not fetch the data for that resource')
                }
                return response.json()
            })
            .then((data) => {
                setIsLoading(false)
                setResponseData(data)
                setError(null)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.message)
            })
    }, [url, requestOptions])

    return { responseData, isLoading, error }
}*/
/*export function useFetch(
    url: string | URL | Request,
    data: object = {},
    options: RequestInit = {},
) {
    const defaultOptions: RequestInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    }
    const init: RequestInit = { ...defaultOptions, ...options }
    const [responseData, setResponseData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return
        setLoading(true)
        async function fetchData() {
            try {
                //const response = await fetch(url)
                const response = await fetch(url, init)
                const responseData = await response.json()
                setResponseData(new ApiResponse(responseData))
            } catch (err) {
                //console.error(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { isLoading, responseData, error }
}*/
/**
 * Custom hook to manage a boolean toggle state.
 *
 * @param {boolean} initial - The initial state of the toggle, defaults to false.
 * @return {[boolean, function]} An array containing the current state and a toggle function to invert the state.
 */
export function useToggle(initial = false) {
    const [state, setState] = useState(initial);
    const toggle = () => setState(v => !v);
    return [state, toggle];
}
