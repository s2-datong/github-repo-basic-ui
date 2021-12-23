import { useState } from 'react'
import { useFetch } from './useFetch'

export const useFetchReadme = (username: string, repo: string) => {
    const url = `http://git-api-proj.herokuapp.com/v1/repo/${username}/${repo}`
    const [result, setResult] = useState('')

    const done = (result: string) => {
        setResult(result)
    }

    const {loading, status} = useFetch('GET', url, done, null, false)

    return {
        loading, result
    }
}