import { useEffect, useState } from "react"

export const useFetch = (method: string, url: string, setResult: Function, data?: any, json: boolean = true) => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(0)

    useEffect(() => {
        setLoading(true)
        fetch(url, {
            method,
            headers: {
                'content-type': 'application/json'
            },
            body: data ? JSON.stringify(data) : undefined
        })
        .then(response => {
            const status = response.status
            setStatus(status)
            return json ? response.json() : response.text()
        })
        .then(json => {
            setResult(json)
            setLoading(false)
        })
        .finally(() => {
            setLoading(false)
        })
        
    }, [method, url])

    return {
        loading, status
    }
}