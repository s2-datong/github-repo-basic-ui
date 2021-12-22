import { useEffect, useState } from 'react'

export const usefetchRepos = (_username: string) => {
    const [username, setUsername] = useState(_username)
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        //
    }, [username])

    return {
        username, repos, loading, setUsername
    }
}