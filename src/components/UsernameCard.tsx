import React, { useEffect, useState }  from 'react'
import { useFetchRepos } from '../hooks/useFetchRepos'
import { useRepository } from '../hooks/useRepository'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from '@chakra-ui/react'

export const UsernameCard: React.FC = () => {
    const [username, setInputUsername] = useState('')
    const handleChange = (event: any) => setInputUsername(event.target.value)
    const { repositories, setRepositories } = useRepository()
    const {loading, fetchRepo} = useFetchRepos(username, setRepositories)
    const navigate = useNavigate()
    


    const fetchRepositories = () => {
        fetchRepo(username)
    }

    useEffect(() => {
        if(repositories.length > 0){
            navigate( `/${username}`, {state: repositories})
        }
    }, [repositories])

    const style = {
        maxWidth: '500px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '30px'
    }

    return (
        <div style={style as React.CSSProperties}>
            <h3>Please enter your Github username </h3>
            <Input value={username} onChange={handleChange} placeholder='Github Username' />
            <Button onClick={fetchRepositories}>Get Repositories</Button>
        </div>
    )
}