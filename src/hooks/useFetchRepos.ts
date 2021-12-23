import { useEffect, useState } from 'react'
import { GITHUB_API } from '../config'
import { useFetch } from './useFetch'

export const useFetchRepos = (_username: string, setRepositories: Function) => {
    const [username, setUsername] = useState(_username)
    const [url, setUrl] = useState('')

    const {loading, status} = useFetch('GET', url, setRepositories)

    const fetchRepo = (username: string) => {
        setUsername(username)
        const url = `${GITHUB_API}/users/${username}/repos`
        setUrl(url)
    }

    return {
        username, loading, fetchRepo
    }
}